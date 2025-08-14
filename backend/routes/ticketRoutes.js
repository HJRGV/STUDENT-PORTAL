const express = require('express');
const router = express.Router();
const { createTicket, getTickets } = require('../controllers/ticketController');
const { protect } = require('../middlewares/authMiddleware');

// POST /api/ticket
router.post('/ticket', protect, createTicket);

// GET /api/ticket
router.get('/ticket', protect, getTickets);

module.exports = router;
