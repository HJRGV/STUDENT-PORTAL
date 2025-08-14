const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

// Load env variables
dotenv.config();

// 👉 Connect to MongoDB
const connectDB = require('./config/db');
connectDB(); // This must come before using routes or starting the server

// Middleware
app.use(cors());
app.use(express.json());

// Route Imports
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const ticketRoutes = require('./routes/ticketRoutes');

// Connect Routes
app.use('/api', authRoutes);
app.use('/api', profileRoutes);
app.use('/api', ticketRoutes);
// Test API
app.get('/', (req, res) => {
  res.send('API is live');
});

// Error-handling middleware (Add here!)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something broke!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
