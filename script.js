let score = 0;
let submittedFlags = [];
const API_URL = "https://capturetheflag-nf0x.onrender.com/validate-flag";

document.addEventListener('DOMContentLoaded', initialize);

function initialize() {
    score = parseInt(localStorage.getItem('ctfScore')) || 0;
    submittedFlags = JSON.parse(localStorage.getItem('submittedFlags')) || [];
    document.getElementById('submit-button').addEventListener('click', checkFlag);
    updateScore();
}

function updateScore() {
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = `Score: ${score}`;
    localStorage.setItem('ctfScore', score);
}

async function checkFlag() {
    const flagInput = document.getElementById("flag-input").value;
    const resultDisplay = document.getElementById("result");
    const correctSound = document.getElementById("correct-sound");
    const wrongSound = document.getElementById("wrong-sound");
    const duplicateSound = document.getElementById("duplicate-sound");  
    const container = document.querySelector(".container");

    if (submittedFlags.includes(flagInput)) {
        resultDisplay.textContent = "Flag already submitted";
        resultDisplay.style.color = "orange";
        resultDisplay.style.opacity = 1;
        duplicateSound.play();
        return; 
    }

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ flag: flagInput })
        });

        const data = await response.json();

        console.log(data);

        if (response.ok) {
            resultDisplay.innerHTML = 
                'Correct flag!<a href="https://www.linkedin.com/in/elenge-germain-5ab8b2319/" target="_blank"><br><strong> connect with me</strong></a>';
            resultDisplay.style.color = "violet";
            correctSound.play();

            score += 10;

            submittedFlags.push(flagInput);
            localStorage.setItem('submittedFlags', JSON.stringify(submittedFlags));
        } else {
            resultDisplay.textContent = "That's the incorrect flag, try again!";
            resultDisplay.style.color = "red";
            wrongSound.play();

            score -= 5;
        }
    } catch (error) {
        console.error("Error validating flag:", error);
        resultDisplay.textContent = "Something went wrong. Please try again later.";
        resultDisplay.style.color = "orange";
    }

    updateScore();

    resultDisplay.style.opacity = 1;
    container.classList.add("grow");

    setTimeout(() => {
        resultDisplay.style.opacity = 0;
        container.classList.remove("grow");
        container.classList.add("shrink");

        setTimeout(() => {
            container.classList.remove("shrink");
        }, 300);
    }, 2000);
}