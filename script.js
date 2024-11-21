let score = 0;

function updateScore() {
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = `Score: ${score}`;
}
async function checkFlag() {
    const flagInput = document.getElementById("flag-input").value;
    const resultDisplay = document.getElementById("result");
    const correctSound = document.getElementById("correct-sound");
    const wrongSound = document.getElementById("wrong-sound");
    const duplicateSound = document.getElementById("duplicate-sound")
    const container = document.querySelector(".container");

    let submittedFlags = JSON.parse(localStorage.getItem('submittedFlags')) || [];

    if (submittedFlags.includes(flagInput)) {
        resultDisplay.textContent = "You have already submitted this flag!";
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
