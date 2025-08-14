const Ticket = require('../models/Ticket');

const createTicket = async (req, res) => {
  try {
    const { subject, description } = req.body;
    const ticket = new Ticket({
      user: req.user._id,
      subject,
      description,
    });
    await ticket.save();
    res.status(201).json(ticket);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getTickets = async (req, res) => {
  const tickets = await Ticket.find({ user: req.user._id });
  res.status(200).json(tickets);
};

module.exports = { createTicket, getTickets };
