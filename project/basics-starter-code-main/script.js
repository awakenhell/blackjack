/*Create a basic version of Scissors Paper Stone where the user inputs one of "scissors", "paper", or "stone", the program internally randomly chooses scissors, paper, or stone, and the program outputs whether the user won, the program won, or it's a draw.
Rules: scissors beats paper, paper beats stone, and stone beats scissors. If both parties choose the same object, it's a draw.*/

//input can be Scissors, Paper or Stone
//output can be user wins, program wins or draw
var scissors = "scissors";
var rock = "rock";
var paper = "paper";

//generate 3 numbers from dice roll, assign dice roll numbers to the 3 output values
var diceRoll = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger;
  //if ( == 1 ){ return scissors etc}
  if (diceNumber == 0) {
    return scissors;
  }
  if (diceNumber == 1) {
    return paper;
  }
  if (diceNumber == 2) {
    return rock;
  }
};

var main = function (input) {
  var randomDiceRoll = diceRoll();
  var myOutputValue =
    "Invalid Input. Please key in either rock paper or scissors (case sensitive)";
  var results = "Win";
  if (input == randomDiceRoll) {
    myOutputValue =
      "Draw! You guessed: " + input + " You rolled " + randomDiceRoll;
    return myOutputValue;
  }
  console.log("input:", input);
  console.log("diceRoll:", randomDiceRoll);
  if (input == "scissors") {
    if (randomDiceRoll == "rock") {
      results = "Lost";
    }
  } else if (input == "rock") {
    if (randomDiceRoll == "paper") {
      results = "Lost";
    }
  } else if (input == "paper") {
    if (randomDiceRoll == "scissors") {
      results = "Lost";
    }
  }
  myOutputValue =
    " You " +
    results +
    " You guessed: " +
    input +
    " You rolled " +
    randomDiceRoll;

  return myOutputValue;
};
