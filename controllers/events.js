const Event = require("../models/Events");

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
