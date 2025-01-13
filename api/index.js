require('dotenv').config(); // Load environment variables at the top
const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,       
    useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Test route
app.get("/", (req, res) => {
    res.send("Main URL");
});

// Start the server
const PORT = process.env.PORT || 4000; 
app.listen(PORT, () => {
    console.log(`Backend is running on port ${PORT}...`);
});
