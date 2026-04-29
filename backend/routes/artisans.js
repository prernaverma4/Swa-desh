const express = require('express');
const router = express.Router();
const { getArtisans, getArtisanById, addArtisan, updateArtisan, deleteArtisan } = require('../controllers/artisanController');
const { protect } = require('../middlewares/auth');

router.get('/', getArtisans);
router.get('/:id', getArtisanById);
router.post('/', protect, addArtisan);
router.put('/:id', protect, updateArtisan);
router.delete('/:id', protect, deleteArtisan);

module.exports = router;
