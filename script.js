async function checkFlag() {
    const flagInput = document.getElementById("flag-input").value;
    const resultDisplay = document.getElementById("result");
    const correctSound = document.getElementById("correct-sound");
    const wrongSound = document.getElementById("wrong-sound");
    const container = document.querySelector(".container");

    try {
        // Send the flag to the backend
        const response = await fetch("https://capturetheflag-nf0x.onrender.com/validate-flag", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ flag: flagInput })
        });

        const data = await response.json();

        if (response.ok) {
            // Correct flag
            resultDisplay.innerHTML = 
                'Correct flag!<a href="https://www.linkedin.com/in/elenge-germain-5ab8b2319/" target="_blank"><br><strong> connect with me</strong></a>';
            resultDisplay.style.color = "violet";
            correctSound.play();

            score += 10;
        } else {
            // Incorrect flag
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
