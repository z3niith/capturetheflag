function checkFlag() {
    const input = document.getElementById('flag-input').value;
    const result = document.getElementById('result');

    const correctSound = document.getElementById('correct-sound');
    const wrongSound = document.getElementById('wrong-sound');

    const flags = [
        'CTF{lunar_codebreaker}',   
        'Codeintheschools',   
        'CTF{DarkNetSpecter}',   
        '10.0.0.130'
    ];

    if (flags.includes(input)) {
        result.innerHTML = 'Congratulations! You found the flag! You should <a href="https://www.linkedin.com/in/elenge-germain-5ab8b2319/"><strong>connect with me on LinkedIn</strong></a> <br>Now find the next one';
        result.style.color = 'green';
        correctSound.play();
    } else {
        result.textContent = 'Incorrect flag, try again!';
        result.style.color = 'red';
        wrongSound.play();
    }

    result.style.opacity = 1;

    setTimeout(function() {
        result.style.opacity = 0;
    }, 3000);
}
