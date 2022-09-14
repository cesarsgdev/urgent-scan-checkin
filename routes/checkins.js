const express = require("express");
const router = express.Router();
const checkins = require("../controllers/checkins");

// Endpoint to get all the checkins available in all the events => GET /api/checkins
router.get("/", checkins.getCheckins);

// Endpoint to get the info about a single checkin by :id => GET /api/checkins/:id
router.get("/:id", checkins.getSingleCheckin);

// Endpoint to create a new checkin attached to a specific event :id => POST /api/checkins/
router.post("/", checkins.checkinGuest);

// Endpoint to modify a single checkin attached to an event by checkin :id => PUT /api/checkins/:id
router.put("/:id", checkins.modifyCheckin);

// Endpoint to delete a single checkin attached to an event by checkin :id => DELETE /api/checkins/:id
router.delete("/:id", checkins.deleteCheckin);

module.exports = router;
