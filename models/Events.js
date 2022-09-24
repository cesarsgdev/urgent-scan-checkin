const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minLength: 5,
      maxLength: 50,
    },

    location: {
      type: String,
      required: true,
      trim: true,
      minLength: 5,
      maxLength: 50,
    },

    city: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
      maxLength: 50,
    },

    state: {
      type: String,
      required: true,
      trim: true,
      minLength: 2,
      maxLength: 2,
    },

    date: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Events = mongoose.model("events", eventSchema);

module.exports = Events;
