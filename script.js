let score = 0;

function updateScore() {
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = `Score: ${score}`;
}

function checkFlag() {
    const flagInput = document.getElementById("flag-input").value;
    const resultDisplay = document.getElementById("result");
    const correctSound = document.getElementById("correct-sound");
    const wrongSound = document.getElementById("wrong-sound");
    const validFlags = [
        "CTF{lunar_codebreaker}",
        "Codeintheschools",
        "CTF{DarkNetSpecter}",
        "10.0.0.130",
        "Never gonna say goodbye",
        "Last_one",
    ];
    const container = document.querySelector(".container");

    if (validFlags.includes(flagInput)) {
        resultDisplay.innerHTML = 
            'Correct flag!<a href="https://www.linkedin.com/in/elenge-germain-5ab8b2319/" target="_blank"><br><strong> connect with me</strong></a>';
        resultDisplay.style.color = "violet";
        correctSound.play();

        score += 10;
    } else {
        resultDisplay.textContent = "That's the incorrect flag, try again!";
        resultDisplay.style.color = "red";
        wrongSound.play();

        score -= 5;
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
