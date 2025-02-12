import User from "../models/User.js";

// @desc   Get all users
// @route  GET /api/users
// @access Public
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc   Create new user
// @route  POST /api/users
// @access Public
export const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await User.create({ name, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};