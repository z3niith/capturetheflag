const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Only allow requests from the GitHub Pages site
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || "https://z3niith.github.io";

app.use(cors({ origin: ALLOWED_ORIGIN }));
app.use(express.json());

// Simple in-memory rate limiter: max 15 submissions per IP per minute
const rateLimit = {};
function limitRate(req, res, next) {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const now = Date.now();
    if (!rateLimit[ip]) rateLimit[ip] = [];
    rateLimit[ip] = rateLimit[ip].filter(t => now - t < 60000);
    if (rateLimit[ip].length >= 15) {
        return res.status(429).json({ message: "Too many attempts. Please wait a minute." });
    }
    rateLimit[ip].push(now);
    next();
}

const VALID_FLAGS = process.env.FLAGS ? process.env.FLAGS.split(",") : [];

app.post("/validate-flag", limitRate, (req, res) => {
    const { flag } = req.body;

    if (!flag || typeof flag !== "string") {
        return res.status(400).json({ message: "Invalid request." });
    }

    if (VALID_FLAGS.includes(flag.trim())) {
        return res.status(200).json({ message: "Correct flag!" });
    } else {
        return res.status(400).json({ message: "Incorrect flag." });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
