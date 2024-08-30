function checkFlag() {
    const _0x153ed3 = document.getElementById("flag-input").value;
    const _0x5104a2 = document.getElementById("result");
    const _0x3b12e1 = document.getElementById("correct-sound");
    const _0x584df3 = document.getElementById("wrong-sound");
    const _0x4f23f5 = ["CTF{lunar_codebreaker}", "Codeintheschools", "CTF{DarkNetSpecter}", "10.0.0.130", "Never gonna say goodbye"];
    if (_0x4f23f5.includes(_0x153ed3)) {
      _0x5104a2.innerHTML = "Congratulations! You found the flag! You should <a href=\"https://www.linkedin.com/in/elenge-germain-5ab8b2319/\"><strong>connect with me on LinkedIn</strong></a> <br>Now find the next one";
      _0x5104a2.style.color = "green";
      _0x3b12e1.play();
    } else {
      _0x5104a2.textContent = "Incorrect flag, try again!";
      _0x5104a2.style.color = "red";
      _0x584df3.play();
    }
    _0x5104a2.style.opacity = 0x1;
    setTimeout(function () {
      _0x5104a2.style.opacity = 0x0;
    }, 0xbb8);
  }