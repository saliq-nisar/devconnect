const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/model.user');

// ===================== JWT Middleware =====================
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; 

  if (!token) return res.status(401).json({ error: 'Access denied. No token provided.' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid or expired token.' });
    req.user = user;
    next();
  });
}

// ===================== Login Route =====================
router.post('/login', async (req, res) => {
  try {
    const { name } = req.body;
    const user = await User.findOne({ name });

    if (!user) return res.status(404).json({ error: 'User not found' });

    const token = jwt.sign({ userId: user._id, name: user.name }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    res.json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
});

// ===================== Protected Routes =====================

// Create user (no auth for now)
router.post('/create', async (req, res) => {
  try {
    const { name, age } = req.body;
    const newUser = new User({ name, age });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all users with pagination
router.get('/', authenticateToken, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 3;
    const skip = (page - 1) * limit;

    const totalUsers = await User.countDocuments();
    const users = await User.find().skip(skip).limit(limit);

    res.json({
      totalUsers,
      page,
      totalPages: Math.ceil(totalUsers / limit),
      users
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a user by name
router.get('/:name', authenticateToken, async (req, res) => {
  try {
    const user = await User.findOne({ name: req.params.name });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update user by name
router.put('/:name', authenticateToken, async (req, res) => {
  try {
    const { name, age } = req.body;
    const updatedUser = await User.findOneAndUpdate(
      { name: req.params.name },
      { name, age },
      { new: true }
    );
    if (!updatedUser) return res.status(404).json({ error: 'User not found' });
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: 'Update failed' });
  }
});

// Delete user by name
router.delete('/:name', authenticateToken, async (req, res) => {
  try {
    const deletedUser = await User.findOneAndDelete({ name: req.params.name });
    if (!deletedUser) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Delete failed' });
  }
});

// Search users by name (partial match)
router.get('/search/users', authenticateToken, async (req, res) => {
  try {
    const { name } = req.query;
    if (!name) return res.status(400).json({ error: 'Name query parameter is required' });

    const users = await User.find({ name: { $regex: name, $options: 'i' } });

    res.json({ count: users.length, users });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
