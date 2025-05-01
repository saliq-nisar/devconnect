const express = require('express');
const router = express.Router();
const User = require('../models/model.user');

// Create user
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

// Get all users
// Get all users with pagination
router.get('/', async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;       // default to page 1
      const limit = parseInt(req.query.limit) || 3;     // default to 10 users per page
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
router.get('/:name', async (req, res) => {
    try {
      const user = await User.findOne({ name: req.params.name });
      if (!user) return res.status(404).json({ error: 'User not found' });
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  // Update user by name
  router.put('/:name', async (req, res) => {
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
  router.delete('/:name', async (req, res) => {
    try {
      const deletedUser = await User.findOneAndDelete({ name: req.params.name });
      if (!deletedUser) return res.status(404).json({ error: 'User not found' });
      res.json({ message: 'User deleted successfully' });
    } catch (err) {
      res.status(400).json({ error: 'Delete failed' });
    }
  });
  

module.exports = router;
