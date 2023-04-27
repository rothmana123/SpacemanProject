//1) /creatge wordlist and pick a word
let wordList = ['apple', 'house', 'bread', 'phone', 'water']
let pickWordIndex = Math.floor(Math.random() * wordList.length);
let gameWord = wordList[pickWordIndex]
let wrongGuess = 5
let timerIntervalId;


console.log(gameWord)

//2) Define required variables used to track the state of the game
//create 1 array to track total guesses and 1 array to track correct guesses
let totalGuessArray = []
let correctGuessArray = ['', '', '', '', '']

//create an array for the purpose of checking to see if a guess is in the gameWord
// gameWord.split('')
let gameWordArray = []
for (let i = 0; i < gameWord.length; i++) {
    gameWordArray[i] = gameWord[i]
}

//3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.

const startButton = document.querySelector('#startButton')
const submitButton = document.querySelector('#submitButton')
const letterForm = document.querySelector('#letterForm')
const answerBoxes = document.querySelectorAll('.box')
const messageLabel = document.querySelector('#mainMessage')
const wrongGuessLabel = document.querySelector('#wrongGuessLabel')
const answerInput = document.querySelector('#answerInput')
//variable to store answerInput
const letterBoard = document.getElementById('letterBoard')

//have to hoist renderBoard here
renderBoard(totalGuessArray);

//4) Handle a player clicking the replay button
replayButton.addEventListener('click', replay)


//5) Handle a player clicking the submitting an answer

letterForm.addEventListener('submit', (evt) => {
  //console.log("the submit button is working")
  evt.preventDefault()
  let guess = answerInput.value;
  //console.log(guess)
  processGuess(guess, gameWordArray)
  answerInput.value = "";
  answerInput.focus()
  renderWord(correctGuessArray)
  updateBoard(guess)
});



//6) Functions

//function to check if a guess is in the gameWordArray
function processGuess(guess, gameWordArray) {
    
  console.log(guess)
  guess = guess.toLowerCase();

  //check to make sure guess is only 1 character
  if (guess.length>1){
    console.log("Please enter only 1 letter.")
    messageLabel.textContent = "Please enter only 1 letter."
    return
  }
  //check to see if guess is a letter
  if (!/^[a-zA-Z]/.test(guess)) {
    console.log("Please enter a valid letter.");
    messageLabel.textContent = "Please enter a valid letter."
    return;
  }

  //check to see if guess has been guessed before  
  if (totalGuessArray.includes(guess)) {
    console.log("You have already guessed this letter")
    messageLabel.textContent = "You have already guessed this letter"
    return
  } else {
    totalGuessArray.push(guess)
  }

  //look into "prettier" -> will format on save

  //check to see if guess in the gameWordArray.  
  //If yes, add to correctGuessArray at the correct index
  //Loop to see if word appears more than once
  //check if correctGuessArray = gameWordArray
  if (gameWordArray.includes(guess)) {
    for (let i = 0; i < gameWordArray.length; i++) {
        if (gameWordArray[i] === guess) {
            correctGuessArray[i] = guess
            messageLabel.textContent = ('Yes!')

        } 
    }
    if (checkWinner(correctGuessArray, gameWordArray)) {
      console.log("Congratulations! You guessed the word: " + gameWord);
      messageLabel.textContent = "Congratulations! You guessed the word: " + gameWord
      //winner function
      //or just set a winnin message
    }
    
  } else {
    wrongGuess--
    if (wrongGuess === 0) {
      console.log("You have no more guesses left!  The word was " + gameWord);
      messageLabel.textContent = "You have no more guesses left!  The word was " + gameWord
      //replace with an endGame function
      //set messageLabel to "You Lost!  Play Again"
    } else {
        console.log("Your guess is not in the word. You have " + wrongGuess + " left.")
        wrongGuessLabel.textContent = ("You have " + wrongGuess + " guesses left.")
        messageLabel.textContent = ("Nope")
        //set messageLabel to "You Lost!  Play Again"
    }
  }
 //delete console.logs
  console.log("this is the totalGuessArray: " + totalGuessArray)
  console.log("this is the correctGuessArray: " + correctGuessArray)
  console.log(checkWinner(correctGuessArray, gameWordArray))
}

//checkWinner Function
function checkWinner(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}



//play the game
//how to have function running in the background, waiting for checkguess?

function replay() {
  pickWordIndex = Math.floor(Math.random() * wordList.length);
  gameWord = wordList[pickWordIndex]
  gameWordArray = []
  for (let i = 0; i < gameWord.length; i++) {
      gameWordArray[i] = gameWord[i]
  }
  wrongGuess = 5
  totalGuessArray = []
  correctGuessArray = ['', '', '', '', '']
  renderWord(correctGuessArray)
  renderBoard(totalGuessArray)
  console.log(gameWord)
  wrongGuessLabel.textContent = ("You have 5 guesses left")
  messageLabel.textContent = ('Guess the word to stop the spaceship countdown!')
}

function renderWord (correctGuessArray) {
  answerBoxes.forEach((box, index) => {
    box.textContent = correctGuessArray[index]
  });
}

function renderBoard (totalGuessArray) {
  const alpha = "abcdefghijklmnopqrstuvwxyz"
  letterBoard.replaceChildren()
  alpha.split('').forEach((letter, idx) => {
    const letterDiv = document.createElement('div');
    letterDiv.textContent = letter
    letterDiv.classList.add('letter')
    letterDiv.id = 'letter-' + letter
    letterDiv.style.border = '2px solid black'
    letterDiv.style.marginLeft = '10px'
    letterDiv.style.marginBottom = '10px'
    letterBoard.append(letterDiv)
  });
}

function updateBoard(guess) {
  const updateLetter = document.getElementById('letter-' + guess)
  updateLetter.classList.add('letter--selected')
}

//countdown timer

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;
      
      
      if (--timer < 0) {
        document.querySelector('.timerArea').innerText = "00:00"
      }
  }, 1000);
}

  
  var fiveMinutes = 30,
  display = document.querySelector('.timerArea');
  startTimer(fiveMinutes, display);

/*
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;
      
      
      if (--timer < 0) {
        document.querySelector('.timerArea').innerText = "00:00"
      }
  }, 1000);
}

  
  var fiveMinutes = 30,
  display = document.querySelector('.timerArea');
  startTimer(fiveMinutes, display);
  */