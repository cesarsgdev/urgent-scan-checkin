const { json, urlencoded } = require("express");
const express = require("express");
const app = express();
const connectDB = require("./config/database");
const events = require("./routes/events");
const checkins = require("./routes/checkins");
const users = require("./routes/users");

connectDB();

require("dotenv").config();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/events", events);
app.use("/api/checkins", checkins);
app.use("/api/users", users);

app.get("/", (req, res) => {
  res.send("Entry endpoint...");
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
