// Import required modules
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Valid flags (store securely)
const VALID_FLAGS = process.env.FLAGS ? process.env.FLAGS.split(",") : [];

// Route to validate flags
app.post("/validate-flag", (req, res) => {
    const { flag } = req.body;

    if (VALID_FLAGS.includes(flag)) {
        return res.status(200).json({ message: "Correct flag!" });
    } else {
        return res.status(400).json({ message: "Incorrect flag." });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
