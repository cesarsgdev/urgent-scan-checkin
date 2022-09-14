const express = require("express");
const router = express.Router();
const events = require("../controllers/events");

// Endpoint to get the list of all events => GET /api/events
router.get("/", events.getAllEvents);

// Endpoint to get a single event by event :id => GET /api/events/:id
router.get("/:id", events.getSingleEvent);

//Endpoint to create an event => POST /api/events
router.post("/", events.createEvent);

//Endpoint to modify a single event by event :id => PUT /api/events/:id
router.put("/:id", events.modifyEvent);

//Endpoint to delete a single event by event :id => DELETE /api/events/:id
router.delete("/:id", events.deleteEvent);

module.exports = router;
