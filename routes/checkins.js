const express = require("express");
const router = express.Router();

// Endpoint to get all the checkins available in all the events => GET /api/checkins
router.get("/", async (req, res) => {});

// Endpoint to get the info about a single checkin by :id => GET /api/checkins/:id
router.get("/:id", async (req, res) => {});

// Endpoint to create a new checkin attached to a specific event :id => POST /api/checkins/
router.post("/", async (req, res) => {});

// Endpoint to modify a single checkin attached to an event by checkin :id => PUT /api/checkins/:id
router.put("/", async (req, res) => {});

// Endpoint to delete a single checkin attached to an event by checkin :id => DELETE /api/checkins/:id
router.delete("/", async (req, res) => {});

module.exports = router;
