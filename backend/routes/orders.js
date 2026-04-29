const express = require('express');
const router = express.Router();
const { createOrder, verifyPayment, getUserOrders } = require('../controllers/orderController');
const { protect, optionalAuth } = require('../middlewares/auth');

router.post('/create', optionalAuth, createOrder);
router.post('/verify', optionalAuth, verifyPayment);
router.get('/myorders', protect, getUserOrders);

module.exports = router;
