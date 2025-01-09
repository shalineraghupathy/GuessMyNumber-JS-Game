"use strict";
let randonNumber = "";
const generateRandomNumber = function () {
  randonNumber = Math.trunc(Math.random(1, 20) * 20) + 1;
};

generateRandomNumber();

const checkNumber = function () {
  const guess = document.querySelector(".guess").value;
  document.querySelector(".guess").value = "";
  let score = document.querySelector(".score");
  let highScore = document.querySelector(".highscore");
  if (guess == randonNumber) {
    document.querySelector(".message").textContent = "Yay!!!You are right.";
    document.querySelector(".number").textContent = randonNumber;
    if (highScore.textContent < score.textContent) {
      highScore.textContent = score.textContent;
    }
  } else {
    if (guess > randonNumber) {
      document.querySelector(".message").textContent =
        "Nahh!!!Guess is too high.";
    } else if (guess < randonNumber) {
      document.querySelector(".message").textContent =
        "Nahh!!!Guess is too low.";
    } else {
      document.querySelector(".message").textContent = "Not a valid number!!!";
    }
    score.textContent = score.textContent - 1;
  }
};

const resetGame = function () {
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").textContent = "?";
  generateRandomNumber();
};

document.querySelector(".check").addEventListener("click", checkNumber);
document.querySelector(".again").addEventListener("click", resetGame);
