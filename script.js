// Hidden Cipher (player must find this in console)
console.log("Cipher: dWx3RldJe2Z1YnN3cl9wZHd2aHV9");

// Extra hint in console
console.log("Hint: First decode, then shift back 😉");

function checkFlag() {
    let userInput = document.getElementById("flagInput").value.trim();

    let correctFlag = "ritCTF{crypto_master}";

    if (userInput === correctFlag) {
        document.getElementById("result").innerHTML = "✅ Correct! You found the flag!";
        document.getElementById("result").style.color = "lightgreen";
    } else {
        document.getElementById("result").innerHTML = "❌ Wrong flag. Try again!";
        document.getElementById("result").style.color = "red";
    }
}
