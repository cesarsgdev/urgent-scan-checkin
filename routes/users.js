const express = require("express");
const router = express.Router();
const users = require("../controllers/users");

/*
All of routes below should be only accessible by an admin or another registered user.
*/

// Endpoint to get a list of all users => GET /api/users
router.get("/", users.getAllUsers);

// Endpoint to get a single user by :id GET /api/users/:id
router.get("/:id", users.getSingleUser);

// Endpoint to create user to DB. This should be only accessible to admin or another registered user. => POST /api/users
router.post("/", users.addUser);

//Endpoint to update a single user by :id => PUT /api/users/:id
router.put("/:id", users.updateUser);

//Endpoint to delete a single user by :id => DELETE /api/users/:id
router.delete("/:id", users.deleteUser);

module.exports = router;
