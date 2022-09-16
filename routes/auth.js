const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth");

// Endpoint to login user and sign a JWT Token if credentials are valid => POST /auth/login
router.post("/login", auth.loginUser);

module.exports = router;
