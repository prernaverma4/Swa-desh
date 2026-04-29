const express = require('express');
const router = express.Router();
const { getDashboardStats } = require('../controllers/analyticsController');
const { protect } = require('../middlewares/auth');

router.get('/dashboard', getDashboardStats); // removed auth for easy access during dev if needed, else add auth param back

module.exports = router;
