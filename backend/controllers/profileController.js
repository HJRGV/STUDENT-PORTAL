const User = require('../models/User');

const getProfile = async (req, res) => {
  res.json(req.user);
};

const updateProfile = async (req, res) => {
  const { name, email, phone } = req.body;
  const user = await User.findById(req.user._id);

  user.name = name;
  user.email = email;
  user.phone = phone;
  await user.save();

  res.json({ message: 'Profile updated' });
};

module.exports = { getProfile, updateProfile };
