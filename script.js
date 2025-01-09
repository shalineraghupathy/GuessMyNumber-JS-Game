"use strict";
let randonNumber = "";

const generateRandomNumber = function () {
  randonNumber = Math.trunc(Math.random(1, 20) * 20) + 1;
  console.log(randonNumber);
};

generateRandomNumber();

const setContent = function (classname, message) {
  document.querySelector(`.${classname}`).textContent = message;
};

const getContent = function (classname) {
  return document.querySelector(`.${classname}`).textContent;
};

const checkNumber = function () {
  const guess = document.querySelector(".guess").value;
  document.querySelector(".guess").value = "";
  let score = getContent("score");
  let highScore = getContent("highscore");

  if (score > 1) {
    if (guess == randonNumber) {
      //player wins
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      setContent("message", "Yay!!!You are right.");
      setContent("number", randonNumber);
      if (highScore < score) {
        console.log(score);
        setContent("highscore", score);
      }
    } else if (!guess) {
      //no number input
      setContent("message", "Not a valid number!!!");
    } else {
      //wrong answer
      const message =
        guess > randonNumber
          ? "Nahh!!!Guess is too high."
          : "Nahh!!!Guess is too low.";
      setContent("message", message);
      setContent("score", score - 1);
    }
  } else {
    //game over
    setContent("message", "Game Over!!!!");
    setContent("score", score - 1);
  }
};

const resetGame = function () {
  document.querySelector(".guess").value = "";
  setContent("message", "Start Guessing...");
  setContent("score", "20");
  setContent("number", "?");
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  generateRandomNumber();
};

document.querySelector(".check").addEventListener("click", checkNumber);
document.querySelector(".again").addEventListener("click", resetGame);
