function checkFlag() {
    const input = document.getElementById('flag-input').value;
    const result = document.getElementById('result');

    const correctSound = document.getElementById('correct-sound');
    const wrongSound = document.getElementById('wrong-sound');

    const flags = [
        'CTF{lunar_codebreaker}',   
        'Codeintheschools',   
        'CTF{DarkNetSpecter}'   
        '10.0.0.130' 
    ];

    if (flags.includes(input)) {
        result.textContent = 'Congratulations! You found the flag! You should connect with me on linkedin';
        result.style.color = 'green';
        correctSound.play("");
    } else {
        result.textContent = 'Incorrect flag, try again!';
        result.style.color = 'red';
        wrongSound.play();
    }
}