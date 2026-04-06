function checkFlag() {
    let userInput = document.getElementById("flagInput").value.trim().toLowerCase();

    let correctFlag = "ritctf{easy_flag}";

    if (userInput === correctFlag) {
        document.getElementById("result").innerHTML = "✅ Correct!";
        document.getElementById("result").style.color = "lightgreen";
    } else {
        document.getElementById("result").innerHTML = "❌ Wrong!";
        document.getElementById("result").style.color = "red";
    }
}

