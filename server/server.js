// server.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// 1. Connect to the DB.
// 2. Connect to the right collection.
// 3. Call the correct function with mongo to retrieve it.

const mongoDB = process.env.MONGO_URI;
mongoose.connect(mongoDB);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Login Route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const collection = db.collection("sign-in-usernames");
  const user = await collection
    .find({
      username: username,
    })
    .toArray();

  try {
    console.log("request made.");
    console.log(user);

    if (user.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user[0].password !== password) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    res.status(200).json({
      message: "Login successful",
      user: { id: user._id, username: user.username },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
