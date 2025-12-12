function checkEmail() {
    const email = document.getElementById("emailInput").value;
    const resultContainer = document.getElementById("result-container");
    const resultText = document.getElementById("result-text");

    if (email.includes("@")) {
        resultText.innerText = "Valid";
        
        resultContainer.className = "result-box valid-style";
        resultContainer.style.display = "block";
    } else {
        resultText.innerText = "Invalid";
        
        resultContainer.className = "result-box invalid-style";
        resultContainer.style.display = "block";
    }

    if (email === "") {
        resultText.innerText = "Please enter an email";
        resultContainer.className = "result-box";
        resultContainer.style.background = "#eee";
        resultContainer.style.color = "#333";
    }
}
