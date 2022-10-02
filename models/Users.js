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
    },
  },
  { timestamps: true }
);

userSchema.pre("findOneAndUpdate", async function (next) {
  const user = this;
  try {
    if (user._update.password) {
      const hashed = await bcrypt.hash(user._update.password, saltRounds);
      user._update.password = hashed;
    }
    next();
  } catch (e) {
    return next(err);
  }
});

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
