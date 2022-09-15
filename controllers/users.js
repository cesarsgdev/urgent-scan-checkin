const User = require("../models/Users");

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
