'use strict';
// document.querySelector('.message').textContent = 'Guess a Number';
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);
// let score = 20;
// document.querySelector('.check').addEventListener('click', function () {
//   const inputGuess = Number(document.querySelector('.guess').value);

//   if (!inputGuess) {
//     document.querySelector('.message').textContent = 'No number';
//   } else if (inputGuess === secretNumber) {
//     document.querySelector('.message').textContent = 'Congrats! you won';
//   } else {
//     if (score > 1) {
//       if (inputGuess > secretNumber) {
//         document.querySelector('.message').textContent = 'Number too high';
//         score--;
//         document.querySelector('.score').textContent = score;
//       } else if (inputGuess < secretNumber) {
//         document.querySelector('.message').textContent = 'Number too low';
//         score--;
//         document.querySelector('.score').textContent = score;
//       }
//     } else {
//       document.querySelector('.score').textContent = 'You have lost';
//     }
//   }
// });

document.querySelector('.message').textContent = 'Guess a Number';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guessedNumber = Number(document.querySelector('.guess').value);
  console.log(guessedNumber);

  if (guessedNumber === secretNumber) {
    document.querySelector('.message').textContent = 'Congrats! you won';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.highscore').textContent = score;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (!guessedNumber) {
    document.querySelector('.message').textContent = 'Please enter a number';
  } else {
    if (score > 1) {
      if (guessedNumber > secretNumber) {
        document.querySelector('.message').textContent =
          'Your guess is too high';
        score--;
        document.querySelector('.score').textContent = score;
      } else if (guessedNumber < secretNumber) {
        document.querySelector('.message').textContent =
          'Your guess is too low';
        score--;
        document.querySelector('.score').textContent = score;
      }
    } else {
      document.querySelector('.message').textContent = 'You have lost';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start Guessing';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  score = 20;
  document.querySelector('.score').textContent = score;

  // secretNumber = Math.trunc(Math.random() * 20) + 1;
  // console.log(secretNumber);
});
