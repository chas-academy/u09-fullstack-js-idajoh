const express = require("express");
const app = express();

console.log("Tyson")

const PORT = process.env.PORT || 4000; 
app.listen(PORT, () => {
    console.log(`Backend is running on port ${PORT}...`);
});
