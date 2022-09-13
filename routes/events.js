const express = require("express");
const router = express.Router();
const events = require("../controllers/events");

// Endpoint to get the list of all events => GET /api/events
router.get("/", async (req, res) => {
  try {
    res
      .status(200)
      .json({ success: true, message: `This is the list of all events...` });
    return;
  } catch (e) {
    res.status(200).json({ success: false, error: e.message });
    return;
  }
});

// Endpoint to get a single event by event :id => GET /api/events/:id
router.get("/:id", async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: `This is the event with ID ${req.params.id}`,
    });
    return;
  } catch (e) {
    res.status(200).json({ success: false, message: e.message });
    return;
  }
});

// Endpoint to create a new event => POST /api/events
// router.post("/", async (req, res) => {
//   try {
//     res.status(200).json({ success: true, message: `Event created...` });
//     return;
//   } catch (e) {
//     res.status(200).json({ success: false, message: e.message });
//     return;
//   }
// });

router.post("/", events.createEvent);

//Endpoint to modify a single event by event :id => PUT /api/events/:id
router.put("/:id", async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: `Event with ID ${req.params.id} modified`,
    });
    return;
  } catch (e) {
    res.status(200).json({ success: false, message: e.message });
    return;
  }
});

//Endpoint to delete a single event by event :id => DELETE /api/events/:id
router.delete("/:id", async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: `Event with ID ${req.params.id} deleted`,
    });
    return;
  } catch (e) {
    res.status(200).json({ success: false, message: e.message });
    return;
  }
});

module.exports = router;
