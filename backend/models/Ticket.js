const mongoose = require('mongoose');


const ticketSchema = new mongoose.Schema({
  title: String,
  description: String,
  users: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' }
});

module.exports = mongoose.model('ticket', ticketSchema);
