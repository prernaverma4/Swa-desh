const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth.js');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/heritage-sites', require('./routes/heritageSites'));
app.use('/api/artisans', require('./routes/artisans'));
app.use('/api/products', require('./routes/products'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/analytics', require('./routes/analytics'));
app.use('/api/events', require('./routes/event'));
app.use('/api/bookings', require('./routes/booking'));

// Basic Route for testing
app.get('/', (req, res) => {
    res.send('Digital Catalyst API Running');
});

// Database Connection
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/digital_catalyst';
mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('MongoDB Connection Error: ', err.message));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
