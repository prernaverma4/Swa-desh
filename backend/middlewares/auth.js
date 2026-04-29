// const jwt = require('jsonwebtoken');

// module.exports = function (req, res, next) {

//     const authHeader = req.header('Authorization');

//     if (!authHeader) {
//         return res.status(401).json({ message: 'No token, authorization denied' });
//     }

//     const token = authHeader.split(' ')[1];

//     try {

//         const decoded = jwt.verify(token, process.env.JWT_SECRET);

//         req.user = decoded.user;

//         next();

//     } catch (err) {

//         res.status(401).json({ message: 'Token is not valid' });

//     }

// };

const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
    let token = req.headers.authorization;
    if (token && token.startsWith('Bearer')) {
        try {
            token = token.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');
            if (!req.user) {
                return res.status(401).json({ message: 'Not authorized, user not found' });
            }
            next();
        } catch (error) {
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
    } else {
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};

const admin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({ message: 'Not authorized as an admin' });
    }
};

const optionalAuth = async (req, res, next) => {
    let token = req.headers.authorization;
    if (token && token.startsWith('Bearer') && token !== 'Bearer undefined' && token !== 'Bearer null') {
        try {
            token = token.split(' ')[1];
            if (token && token !== 'undefined' && token !== 'null') {
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                req.user = await User.findById(decoded.id).select('-password');
            }
        } catch (error) {
            // Silently ignore auth errors for optional routes
        }
    }
    next();
};

module.exports = { protect, admin, optionalAuth };