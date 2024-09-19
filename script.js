// Game Guest a Number
// Create variable guest and attempts
const startGame = function () {
  const min = 1;
  const max = 100;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  let guess;
  let attempts = 0;

  console.log("guess number between 1 - 100 : ");

  while (guess !== randomNumber) {
    guess = parseInt(prompt(`Enter the guess number!`), 10);
    attempts++;

    if (isNaN(guess)) {
      alert(`Please enter a valid number! Try again.`);
    } else if (guess < min || guess > max) {
      alert(`The number must be between ${min} and ${max}. Try again.`);
    } else if (guess < randomNumber) {
      alert(`Too low! Try again.`);
    } else if (guess > randomNumber) {
      alert(`Too high! Try again.`);
    } else {
      alert(
        `Congratulations! You guessed the correct number (${randomNumber}) in ${attempts} attempts.`
      );
    }
  }
};

startGame();
