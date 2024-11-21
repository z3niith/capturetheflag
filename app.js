const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const VALID_FLAGS = process.env.FLAGS ? process.env.FLAGS.split(",") : [];

app.post("/validate-flag", (req, res) => {
    const { flag } = req.body;

    if (VALID_FLAGS.includes(flag)) {
        return res.status(200).json({ message: "Correct flag!" });
    } else {
        return res.status(400).json({ message: "Incorrect flag." });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
