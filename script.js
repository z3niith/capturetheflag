let score = parseInt(localStorage.getItem('score')) || 0;

function updateScore() {
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = `Score: ${score}`;
    localStorage.setItem('score', score);
}

document.addEventListener('DOMContentLoaded', () => updateScore());

async function checkFlag() {
    const flagInput = document.getElementById("flag-input").value;
    const resultDisplay = document.getElementById("result");
    const correctSound = document.getElementById("correct-sound");
    const wrongSound = document.getElementById("wrong-sound");
    const errorSound = document.getElementById("error-sound");
    const duplicateSound = document.getElementById("duplicate-sound");
    const container = document.querySelector(".container");

    let submittedFlags = JSON.parse(localStorage.getItem('submittedFlags')) || [];

    if (submittedFlags.includes(flagInput)) {
        resultDisplay.textContent = "Flag already submitted";
        resultDisplay.style.color = "orange";
        resultDisplay.style.opacity = 1;
        duplicateSound.play();
        return;
    }

    try {
        const response = await fetch("https://capturetheflag-nf0x.onrender.com/validate-flag", {
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
                'Correct flag!<a href="https://www.linkedin.com/in/elengegermain" target="_blank"><br><strong> connect with me</strong></a>';
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
        errorSound.play();
        resultDisplay.style.opacity = 1;
        return;
    }

    updateScore();

    resultDisplay.style.opacity = 1;
    container.classList.add("grow");

    setTimeout(() => {
        resultDisplay.style.opacity = 0;
        container.classList.remove("grow");
    }, 2000);
}
