const express = require('express');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./routes/user.route');
const mongoose = require('mongoose');

const app = express(); 
const PORT = process.env.PORT;

// Middleware
app.use(cors()); 
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB Connected');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

// Routes
app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello from Backend!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
