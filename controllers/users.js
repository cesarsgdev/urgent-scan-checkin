const User = require("../models/Users");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password");
    res.status(200).json({ success: true, data: users });
    return;
  } catch (e) {
    res.status(200).json({ success: true, message: e.message });
    return;
  }
};

exports.getAllUsers = getAllUsers;

const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id, "-password");
    if (user) {
      res.status(200).json({ success: true, data: user });
      return;
    } else {
      res.status(200).json({
        success: false,
        message: `User with ID ${req.params.id} not found. Please try again.`,
      });
      return;
    }
  } catch (e) {
    res.status(200).json({ success: false, message: e.message });
    return;
  }
};

exports.getSingleUser = getSingleUser;

const addUser = async (req, res) => {
  try {
    const user = await new User(req.body);
    await user.save();
    res.status(200).json({ success: true, data: { user } });
    return;
  } catch (e) {
    res.status(200).json({ success: false, message: e.message });
    return;
  }
};

exports.addUser = addUser;

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { name: req.body.name }
    );

    if (user) {
      res.status(200).json({ success: true, data: user });
      return;
    } else {
      res.status(200).json({
        success: false,
        message: `User with ID ${req.params.id} not found. Please try again.`,
      });
      return;
    }
  } catch (e) {
    res.status(200).json({ success: false, message: e.message });
    return;
  }
};

exports.updateUser = updateUser;

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (user) {
      res.status(200).json({ success: true, data: user });
      return;
    } else {
      res.status(200).json({
        success: false,
        message: `User with ID ${req.params.id} not found. Please try again.`,
      });
      return;
    }
  } catch (e) {
    res.status(200).json({ success: false, message: e.message });
    return;
  }
};

exports.deleteUser = deleteUser;
