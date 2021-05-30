"use strict";

// Lecture : DOM Manipulation

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "🤗 Correct Number";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 3;
// console.log(document.querySelector(".guess").value);

// document.querySelector(".score").textContent = 100;
// document.querySelector(".guess").value = 500;

// Lecture: Handling Click events

// step 1: first select the event
// step 2: add event listener to it
// step 3: define the function associated with the event

// Lecture :Implementing The Game Logic

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "❌ No Number";
  }
  // when the guess is correct
  else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "🤗 Correct Guess!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (highScore < score) {
      highScore = score;
    }
    document.querySelector(".highscore").textContent = highScore;
  }
  // when the guess is too high
  else if (score > 1) {
    if (guess > secretNumber) {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = " 🔼Too high!";
    } else if (guess < secretNumber) {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "🔽Too low!";
    }
  } else {
    document.querySelector(".message").textContent =
      "You have lost the game! 😔";
    document.querySelector(".score").textContent = 0;
  }
  //   const num = rand();
  //   if(num==guess)
  //   document.querySelector(".message").textContent = "🤗 Correct Number";
});

// Coding Challenge :

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = null;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
