const submitButton = document.querySelector('button');
const resultDiv = document.querySelector('#result');

submitButton.addEventListener('click', async () => {
    const flagInput = document.querySelector('#flag-input').value;

    try {
        const response = await fetch('/validate-flag', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ flag: flagInput })
        });

        const data = await response.json();
        resultDiv.textContent = data.message;
        resultDiv.style.color = data.success ? 'green' : 'red';
    } catch (error) {
        resultDiv.textContent = 'Error connecting to server.';
        resultDiv.style.color = 'red';
    }
});
