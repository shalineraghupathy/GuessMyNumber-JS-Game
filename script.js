"use strict";

const checkNumber = function () {
  const guess = Number(document.querySelector(".guess").value);
  document.querySelector(".guess").value = "";
  let score = document.querySelector(".score");
  let highScore = document.querySelector(".highscore");
  if (guess == "") {
    document.querySelector(".message").textContent = "Yay!!!You are right.";
    document.querySelector(".number").textContent = "";
    if (highScore.textContent < score.textContent) {
      highScore.textContent = score.textContent;
    }
  } else {
    if (guess > "") {
      document.querySelector(".message").textContent =
        "Nahh!!!Guess is too high.";
    } else if (guess < "") {
      document.querySelector(".message").textContent =
        "Nahh!!!Guess is too low.";
    } else {
      document.querySelector(".message").textContent = "Not a valid number!!!";
    }

    score.textContent = score.textContent - 1;
    console.log(score.value);
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
