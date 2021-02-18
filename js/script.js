"use strict";
let randNumber = Math.trunc(Math.random() * 20 + 1);
// document.querySelector("#box").textContent = randNumber;
console.log(randNumber);
let score = 20;
let highScore = 0;

// !!!! On click Event on Check Button !!!!!!!!

document.querySelector("#checkButton").addEventListener("click", function () {
  const inputNumber = Number(document.querySelector("#field").value);
  //   console.log(inputNumber);
  // TODO:>>> Checking whether input is number or not

  if (!inputNumber || inputNumber === NaN) {
    document.querySelector(".message").textContent = `⛔ Not a number`;
  }
  // TODO:>>> All things happened only if input is [1-20]
  else if (inputNumber >= 1 && inputNumber <= 20) {
    // TODO:>>> When input is equal to randNumber
    if (inputNumber === randNumber) {
      document.querySelector(".message").textContent = `🎉 Correct Number`;
      document.querySelector("#score").textContent = score;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector("#box").textContent = randNumber;
      document.querySelector("#field").style.backgroundColor = "#60b347";
      document.querySelector("#box").style.padding = "20px 60px 20px 60px";
      document.querySelector(".message").style.color = "yellow";
      if (score > highScore) {
        highScore = score;
        document.querySelector("#highscore").textContent = highScore;
      } else {
        document.querySelector("#highscore").textContent = highScore;
      }
    }
    // TODO:>>> When input is higher or less than randNumber

    if (inputNumber > randNumber || inputNumber < randNumber) {
      if (score > 1) {
        document.querySelector(".message").textContent = `${
          inputNumber > randNumber ? "📈 Too high" : "📉 Too low"
        }`;
        document.querySelector(".message").style.color = "red";
        score--;
        document.querySelector("#score").textContent = score;
      } else {
        document.querySelector(".message").textContent = `😖 You lost the game`;

        document.querySelector("#score").textContent = 0;
      }
    }
  } else {
    document.querySelector(".message").textContent = `⛔ Invalid Number`;
  }
});

// !!!! On click Event on Again(reset) Button !!!!!!!!!!

document.querySelector("#againButton").addEventListener("click", function () {
  randNumber = Math.trunc(Math.random() * 20 + 1); //resetting random number
  console.log(randNumber);
  score = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("#score").textContent = 20;
  document.querySelector("body").style.backgroundColor = "";
  document.querySelector("#box").textContent = "?";
  document.querySelector("#field").value = "";
  document.querySelector("#field").style.backgroundColor = "rgb(46, 46, 46)";
  document.querySelector("#box").style.padding = "20px 30px 20px 30px";
  document.querySelector(".message").style.color = "yellow";
});
