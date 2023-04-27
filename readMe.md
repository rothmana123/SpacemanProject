# SpacemanProject

<h1>Spaceman Game!</h1>

<h3>Spaceman is a fun and engaging word-guessing game that can be enjoyed by people of all ages (a modern update on H@n&man)</h3>

<h2>Wireframes</h2>
1. Beginning Game <br>

![Beginning Game](https://i.imgur.com/XkQOamp.png)

2. Letter is in Array

![Letter is in Array](https://i.imgur.com/nj2mLSq_d.jpg?maxwidth=520&shape=thumb&fidelity=high)

3. Letter is not in Array 

![Letter is not in Array](https://i.imgur.com/3OEfXD9.png)

4. Game Over - You Won!

![Game Over - You Won!](https://i.imgur.com/IpeuexH.png)

5. Game Over - You Lost :((

![Game Over - You Lost :((](https://i.imgur.com/gSSbGiv.png)

<h2>Technologies Used</h2>

<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>Javascript</li>
 </ul>

<h2>Getting Started</h2>
  
<ul>
   <li>The player starts by guessing letters that they think might be in the word. Each guess should be a single letter. </li>

   <li>The player get 5 incorrect guesses.</li>

   <li>If the player successfully guesses the word before running out of incorrect guesses, they win the game.</li>

   <li>If the player has 5 incorrect guesses, they lose the game. </li>
</ul>
  
<h2>User Story</h2>

As a player, 
<ul>
  <li>I want to play a fun and challenging game where I have to guess a secret word in order to launch a spaceship.</li>
  <li>I want the game to be easy to understand and visually appealing, with a cool space-themed design.</li>
  <li>When I start the game, I want to see a picture of a spaceship that is grounded and waiting to take off.</li>
  <li>I want to see a series of blank spaces on the screen that represent the secret word I need to guess.</li>
  <li>As I guess letters, I want the game to tell me if the letter is in the secret word or not.</li>
  <li>If I guess a correct letter, I want to see that letter revealed in the corresponding blank space(s) on the screen.</li>
  <li>If I guess an incorrect letter, I want to see a part of the spaceship light up or change color to indicate that I'm one step closer to losing the game.</li>
  <li>If I guess all the letters in the secret word before the spaceship is fully lit up or colored in, I want to see the spaceship take off and fly away into space.</li>
  <li>I want to see a victory message on the screen and have the option to play again.</li>
  <li>If I lose the game before guessing all the letters, I want to see a defeat message and the correct word displayed on the screen, and also have the option to play again.</li>
 </ul>
 
<h2>Pseudocode</h2>
  
<ul>
  <li>1. Constants</li>
    
    - possibleWords Array of Possible 5-Letter Words
    - wrongGuesses variable (start at 5)

  
  <li>2. State of Game Variables </li>
      
    - gameWord -> Pick a random word from array
    - index = random number Math.floor(Math.random() * 100);
    - answerArray -> take gameWord, and split to individual characters
    - totalGuess Array → array to track which total letters were guessed, renders in a label
    - correctGuess array -> Array to track correct guesses and compare to answerArray
  
  <li>3. Cache DOM elements</li>
      
    - cache start button
    - cache submit button
    - cache message label
    - cache rocket image
    - cache used letters object
    - cache answer board
    - cache wrongGuess label
  
  <li>4. Handle Start button click</li>
  
    - init function
      - let index variable = random between x and y
      - get gameWord from possibleWordArray
      - set wrong guesses = 5
      - set totalLettersGuesses to []
      - set correctLetters to []
      - set answerBoard to []
      - set DOM elements to render variables
  
  <li>5. Handle Submit Button Click</li>
      
      - checkGuess function
  
  <li>6. Functions</li>
    
    - checkGuess Function
      - set input letter to lowercase
      - add letter to totalLettersGuessed
       #what can I do if there are more than 1 of a single letter in the array?  Count first?  if 0 --> else, 
      - if guess is in answerArray
        - add to correct Letter Array at index
        - update rocket position
        - update messagelabel to "Yes!"
        - update answerBoard
        - checkWinner function
      - else
        - wrongGuess --
        - update wring Guess Label
        - if wrongGuesses === 5
          - endGame Function
  
    - checkWinner Function
      - if correctArray === answerArray
        -win Function

    - endGame Function
      - hide input
      - message label: Game Over
      - answerBoard -> reveal correct answer
      - rocket explosion animation
</ul>
      
<h2>Possible Extentions</h2>
   
    - Add a timer
    - Add difficulty: Beginner, Medium, Expert
    - Add additional letters
    - Sound for correct, incorrect