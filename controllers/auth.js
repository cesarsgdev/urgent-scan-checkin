const User = require("../models/Users");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const key = process.env.JWT_KEY;

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password)
      throw new Error("Username and password are required", {
        cause: "missing credentials",
      });

    const user = await User.findOne({ email: email });

    if (!user) {
      res.status(200).json({
        success: false,
        error: "user",
        message: `User with ${email} was not found`,
      });
      return;
    }

    bcrypt.compare(password, user.password, function (err, result) {
      if (err)
        return res.status(200).json({
          success: false,
          error: "generic",
          message: `Something went wrong. Please try again.`,
        });
      if (!result) {
        return res.status(200).json({
          success: false,
          error: "password",
          message: `Password for user ${email} does not match.`,
        });
      }
      if (result) {
        const token = jwt.sign(
          {
            _id: user._id,
            name: user.name,
            email: user.email,
          },
          key,
          { expiresIn: "12h" }
        );

        res.status(200).json({ success: true, token: token });
        return;
      }
    });
  } catch (e) {
    res
      .status(400)
      .json({ success: false, error: `${e.cause}`, message: `${e.message}` });
    return;
  }
};

exports.loginUser = loginUser;
