function checkFlag() {
    const input = document.getElementById('flag-input').value;
    const result = document.getElementById('result');

    const flags = [
        'CTF{hidden_in_html_comment}',    // Challenge 1
        'CTF{caesar_shift_challenge}',    // Challenge 2
        'CTF{file_generated_flag}'        // Challenge 3
    ];

    if (flags.includes(input)) {
        result.textContent = 'Congratulations! You found the flag!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Incorrect flag, try again!';
        result.style.color = 'red';
    }
}
