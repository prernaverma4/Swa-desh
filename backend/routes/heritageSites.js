const express = require('express');
const router = express.Router();
const { getHeritageSites, getHeritageSiteById, addHeritageSite, updateHeritageSite, deleteHeritageSite } = require('../controllers/heritageSiteController');
const { protect } = require('../middlewares/auth');

router.get('/', getHeritageSites);
router.get('/:id', getHeritageSiteById);
router.post('/', protect, addHeritageSite);
router.put('/:id', protect, updateHeritageSite);
router.delete('/:id', protect, deleteHeritageSite);

module.exports = router;
