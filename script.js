const words = [
  "apple",
  "banana",
  "orange",
  "mango",
  "strawberry",
  "grape",
  "pineapple",
  "blueberry",
  "raspberry",
  "blackberry",
  "kiwi",
  "watermelon",
  "cantaloupe",
  "honeydew",
  "papaya",
  "guava",
  "lychee",
  "dragonfruit",
  "passionfruit",
  "grapefruit",
  "lime",
  "lemon",
  "cherry",
  "peach",
  "nectarine",
  "apricot",
  "plum",
  "pomegranate",
  "fig",
  "date",
  "persimmon",
  "tangerine",
  "clementine",
  "kumquat",
  "durian",
  "jackfruit",
  "starfruit",
  "avocado",
  "coconut",
  "cranberry",
  "currant",
  "gooseberry",
  "elderberry",
  "quince",
  "pear",
  "acai",
  "sapodilla",
  "soursop",
  "mulberry",
  "boysenberry",
  "loganberry",
  "jambolan",
  "salak",
  "rambutan",
  "longan",
  "pomelo",
];

const wordElement = document.getElementById("word");
const lettersElement = document.getElementById("letters");
const messageElement = document.getElementById("message");
const incorrectGuessesElement = document.getElementById("incorrectGuesses");
const keyButtons = document.querySelectorAll("#key button");
const playAgainButton = document.getElementById("playAgain");

let chosenWord = "";
let guessedLetters = [];
let incorrectGuessCount = 0;

function resetGame() {
  chosenWord = words[Math.floor(Math.random() * words.length)];
  guessedLetters = [];
  incorrectGuessCount = 0;

  wordElement.textContent = "_".repeat(chosenWord.length);
  lettersElement.innerHTML = "";
  messageElement.textContent = "";
  incorrectGuessesElement.textContent = "";

  for (const button of keyButtons) {
    button.style.backgroundColor = "";
    button.style.color = "";
  }

  playAgainButton.style.display = "none";
}

function handleGuessInput(letter) {
  if (guessedLetters.includes(letter)) return;

  guessedLetters.push(letter);

  if (chosenWord.includes(letter)) {
    for (let i = 0; i < chosenWord.length; i++) {
      if (chosenWord[i] === letter) {
        wordElement.textContent =
          wordElement.textContent.substring(0, i) +
          letter +
          wordElement.textContent.substring(i + 1);
      }
    }

    if (
      wordElement.textContent.replace(/_/g, "").length === chosenWord.length
    ) {
      messageElement.textContent = "Congratulations! You've won!";
      playAgainButton.style.display = "block";
    }
  } else {
    incorrectGuessCount++;

    if (incorrectGuessCount <= 5) {
      for (const button of keyButtons) {
        if (button.textContent.toLowerCase() === letter.toLowerCase()) {
          button.style.backgroundColor = "red";
          button.style.color = "white";
          break;
        }
      }
    } else {
      messageElement.textContent = `Game Over! The word was ${chosenWord}`;
      playAgainButton.style.display = "block";

      for (const button of keyButtons) {
        button.style.backgroundColor = "";
        button.style.color = "";
      }
    }
  }
}

resetGame();
