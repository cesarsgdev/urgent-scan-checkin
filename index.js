const express = require("express");
const app = express();
const connectDB = require("./config/database");
const events = require("./routes/events");

connectDB();

require("dotenv").config();

const PORT = process.env.PORT || 3001;

app.use("/api/events", events);

app.get("/", (req, res) => {
  res.send("Entry endpoint...");
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});