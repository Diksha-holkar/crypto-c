// Hint logic
function showHint() {
    let choice = document.getElementById("hintSelect").value;

    if (choice === "correct") {
        document.getElementById("hintResult").innerHTML = "💡 Think about Base64 😉";
        document.getElementById("hintResult").style.color = "lightgreen";
    } else if (choice === "wrong1" || choice === "wrong2") {
        document.getElementById("hintResult").innerHTML = "❌ Misleading hint 😏";
        document.getElementById("hintResult").style.color = "orange";
    } else {
        document.getElementById("hintResult").innerHTML = "⚠️ Please select a hint";
        document.getElementById("hintResult").style.color = "white";
    }
}

// Flag check logic
function checkFlag() {
    let userInput = document.getElementById("flagInput").value.trim().toLowerCase();

    let correctFlag = "ritctf{easy_flag}";

    if (userInput === correctFlag) {
        document.getElementById("result").innerHTML = "✅ Correct! You found the flag!";
        document.getElementById("result").style.color = "lightgreen";
    } else {
        document.getElementById("result").innerHTML = "❌ Wrong flag. Try again!";
        document.getElementById("result").style.color = "red";
    }
}

