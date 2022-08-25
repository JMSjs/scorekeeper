//coding practice event listeners
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
let winningScoreSelector = document.querySelector("#playto");
let winningScore = 3;
let p1Score = 0;
let p2Score = 0;
let p1Button = document.querySelector("#p1Button");
let p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");
let gameOver = false;
p1Button.disabled = false;
p2Button.disabled = false;

function reset() {
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p2Display.style.color = "black";
    p1Display.style.color = "black";
}

winningScoreSelector.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    reset();
})

p1Button.addEventListener("click", function () {
    if (!gameOver) {
        p1Score += 1;
        p1Display.textContent = p1Score;
        console.log(winningScore.value);
        if (p1Score === winningScore) {
            gameOver = true;
            p2Display.style.color = "red";
            p1Display.style.color = "green";
        }
    }
})

p2Button.addEventListener("click", function () {
    if (!gameOver) {
        p2Score += 1;
        p2Display.textContent = p2Score;
        console.log(winningScore.value);
        if (p2Score === winningScore) {
            gameOver = true;
            p2Display.style.color = "green";
            p1Display.style.color = "red";
        }
    }
})
if (gameOver) {
    p1Button.disabled = true;
    p2Button.disabled = true;
    
}
resetButton.addEventListener("click", reset);

