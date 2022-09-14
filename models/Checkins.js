const mongoose = require("mongoose");
const { Schema } = mongoose;

const checkinSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
      maxLength: 50,
    },

    appTime: {
      type: String,
      required: true,
      trim: true,
    },
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "events",
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Checkins = mongoose.model("checkins", checkinSchema);

module.exports = Checkins;
