const Event = require("../models/Events");

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.status(200).json({ success: true, data: events });
    return;
  } catch (e) {
    res.status(200).json({ success: false, message: e.message });
  }
};

exports.getAllEvents = getAllEvents;

const getSingleEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (event) {
      res.status(200).json({ success: true, data: event });
      return;
    } else {
      res.status(200).json({
        success: false,
        message: `Event with event ID ${req.params.id} was not found. Please try again.`,
      });
      return;
    }
  } catch (e) {
    res.status(200).json({ success: false, message: e.message });
    return;
  }
};

exports.getSingleEvent = getSingleEvent;

const createEvent = async (req, res) => {
  try {
    const event = await new Event(req.body);
    await event.save();
    res.status(200).json({ success: true, data: event });
    return;
  } catch (e) {
    res.status(200).json({ success: false, message: e.message });
    return;
  }
};

exports.createEvent = createEvent;

const modifyEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(
      { _id: req.params.id },
      { name: req.body.name }
    );
    if (event) {
      res.status(200).json({ success: true, data: event });
      return;
    } else {
      res.status(200).json({
        success: false,
        message: `Event with event ID ${req.params.id} was not found. Please try again.`,
      });
      return;
    }
  } catch (e) {
    res.status(200).json({ success: false, message: e.message });
    return;
  }
};

exports.modifyEvent = modifyEvent;

const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (event) {
      res.status(200).json({ success: true, data: event });
      return;
    } else {
      res.status(200).json({
        success: false,
        message: `Event with ID ${req.params.id} was not found. Please try again.`,
      });
      return;
    }
  } catch (e) {
    res.status(200).json({ success: false, message: e.message });
    return;
  }
};

exports.deleteEvent = deleteEvent;
