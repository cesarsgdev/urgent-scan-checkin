const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Mongo DB Connection Success: ${conn.connection.host}`);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

module.exports = connectDB;
