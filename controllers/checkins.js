const Checkins = require("../models/Checkins");

const getCheckins = async (req, res) => {
  try {
    const checkins = await Checkins.find().populate({ path: "eventId" });
    if (checkins) {
      res.status(200).json({ success: true, data: checkins });
      return;
    }
  } catch (e) {
    res.status(200).json({ success: true, message: e.message });
    return;
  }
};

exports.getCheckins = getCheckins;

const getSingleCheckin = async (req, res) => {
  try {
    const checkin = await Checkins.findById(req.params.id);
    if (checkin) {
      res.status(200).json({ success: true, data: checkin });
      return;
    }
  } catch (e) {
    res.status(200).json({ success: false, message: e.message });
    return;
  }
};

exports.getSingleCheckin = getSingleCheckin;

const checkinGuest = async (req, res) => {
  try {
    const checkin = await new Checkins(req.body);
    await checkin.save();
    res.status(200).json({ success: true, data: checkin });
    return;
  } catch (e) {
    res.status(200).json({ success: false, message: e.message });
    return;
  }
};

exports.checkinGuest = checkinGuest;

const modifyCheckin = async (req, res) => {
  try {
    const checkin = await Checkins.findByIdAndUpdate(
      { _id: req.params.id },
      { name: req.body.name }
    );

    if (checkin) {
      res.status(200).json({ success: true, data: checkin });
      return;
    } else {
      res.status(200).json({
        success: false,
        message: `Checkin with object ${req.params.id} not found. Please try again.`,
      });
      return;
    }
  } catch (e) {
    res.status(200).json({ success: false, message: e.message });
    return;
  }
};

exports.modifyCheckin = modifyCheckin;

const deleteCheckin = async (req, res) => {
  try {
    const checkin = await Checkins.findByIdAndDelete(req.params.id);
    if (checkin) {
      res.status(200).json({ success: true, data: checkin });
      return;
    } else {
      res.status(200).json({
        success: false,
        message: `Checkin with object ${req.params.id} not found. Please try again.`,
      });
      return;
    }
  } catch (e) {
    res.status(200).json({ success: false, message: e.message });
    return;
  }
};

exports.deleteCheckin = deleteCheckin;
