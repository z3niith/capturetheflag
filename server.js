const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Flags mapped by difficulty and task
const flags = {
    beginner: {
        task1: "CTF{lunar_codebreaker}"
    },
    easy: {
        task2: "Codeintheschools",
        task5: "Never gonna say goodbye"
    },
    intermediate: {
        task3: "CTF{DarkNetSpecter}",
        task6: "Last_one"
    },
    advanced: {
        task4: "10.0.0.130"
    }
};

// Middleware
app.use(bodyParser.json());
app.use(express.static("public"));

// API Endpoint for validating flags
app.post("/validate-flag", (req, res) => {
    const { flag, difficulty, task } = req.body;

    if (!flag || !difficulty || !task) {
        return res.status(400).json({ valid: false, message: "Invalid request" });
    }

    const correctFlag = flags[difficulty]?.[task];
    if (correctFlag === flag) {
        return res.json({ valid: true, message: "Correct flag!" });
    } else {
        return res.json({ valid: false, message: "Incorrect flag." });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
