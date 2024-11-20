document.getElementById("submit-flag").addEventListener("click", async () => {
  const flagInput = document.getElementById("flag-input").value.trim();
  const difficulty = document.getElementById("difficulty-select").value;
  const task = document.getElementById("task-select").value;

  if (!flagInput) {
      document.getElementById("result").textContent = "Please enter a flag!";
      return;
  }

  try {
      const response = await fetch("/validate-flag", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({ flag: flagInput, difficulty, task })
      });

      const result = await response.json();
      if (result.valid) {
          document.getElementById("result").textContent = `✅ Correct flag for ${task}!`;
          document.getElementById("correct-sound").play();
      } else {
          document.getElementById("result").textContent = `❌ Incorrect flag. Try again!`;
          document.getElementById("wrong-sound").play();
      }
  } catch (error) {
      console.error("Error validating flag:", error);
      document.getElementById("result").textContent = "An error occurred. Please try again.";
  }
});
