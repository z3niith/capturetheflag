function checkFlag() {
    const input = document.getElementById('flag-input').value;
    const result = document.getElementById('result');

    const correctSound = document.getElementById('correct-sound');
    const wrongSound = document.getElementById('wrong-sound');

    const flags = [
        'stackoverflow.com',   
        'CTF{Roman_empire}',   
        'CTF{We_are_venom}'      
    ];

    if (flags.includes(input)) {
        result.textContent = 'Congratulations! You found the flag! You should connect with me on linkedin';
        result.style.color = 'green';
        correctSound.play();
    } else {
        result.textContent = 'Incorrect flag, try again!';
        result.style.color = 'red';
        wrongSound.play();
    }
}