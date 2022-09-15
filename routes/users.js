const express = require("express");
const router = express.Router();
const users = require("../controllers/users");

// Endpoint to create user to DB. This should be only accessible to admin or another registered user. => POST /api/users
router.post("/", users.addUser);

module.exports = router;
