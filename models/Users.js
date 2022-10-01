const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const saltRounds = 12;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      minLength: 5,
      maxLength: 50,
    },

    email: {
      type: String,
      trim: true,
      required: true,
      minLength: 6,
      maxLength: 50,
    },

    password: {
      type: String,
      trim: true,
      required: true,
      minLength: 8,
      select: false,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const user = this;
  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) throw err;
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) throw err;
      else {
        user.password = hash;
        next();
      }
    });
  });
});

const Users = mongoose.model("users", userSchema);

module.exports = Users;
