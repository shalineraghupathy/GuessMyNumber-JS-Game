"use strict";
let randonNumber = "";
const generateRandomNumber = function () {
  randonNumber = Math.trunc(Math.random(1, 20) * 20) + 1;
  console.log(randonNumber);
};

generateRandomNumber();

const checkNumber = function () {
  const guess = document.querySelector(".guess").value;
  document.querySelector(".guess").value = "";
  let score = document.querySelector(".score");
  let highScore = document.querySelector(".highscore");
  if (score.textContent > 1) {
    if (guess == randonNumber) {
      //player wins
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "25rem";
      document.querySelector(".message").textContent = "Yay!!!You are right.";
      document.querySelector(".number").textContent = randonNumber;
      if (highScore.textContent < score.textContent) {
        highScore.textContent = score.textContent;
      }
    } else if (!guess) {
      //no number input
      document.querySelector(".message").textContent = "Not a valid number!!!";
    } else {
      //wrong answer
      if (guess > randonNumber) {
        //higher number
        document.querySelector(".message").textContent =
          "Nahh!!!Guess is too high.";
      } else {
        //lower number
        document.querySelector(".message").textContent =
          "Nahh!!!Guess is too low.";
      }
      score.textContent--;
    }
  } else {
    //game over
    document.querySelector(".message").textContent = "Game Over!!!!";
    score.textContent--;
  }
};

const resetGame = function () {
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  generateRandomNumber();
};

document.querySelector(".check").addEventListener("click", checkNumber);
document.querySelector(".again").addEventListener("click", resetGame);
