// backend/routes/profileRoutes.js
const express = require('express');
const router = express.Router();
const { getProfile, updateProfile } = require('../controllers/profileController');
const { protect } = require('../middlewares/authMiddleware');

router.get('/profile', protect, getProfile);
router.put('/profile', protect, updateProfile);

module.exports = router;
