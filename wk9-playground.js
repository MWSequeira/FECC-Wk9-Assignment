/*
Coding Steps:

For the final project you will be creating an automated version of the classic card game WAR! There are many versions of the game WAR. In this version there are only 2 players.
You do not need to do anything special when there is a tie in a round.
Think about how you would build this project and write your plan down. Consider classes such as: Card, Deck, Player, as well as what properties and methods they may include.
// Four suits to represent the appearance (user interface - ui) for your cards
let cardSuits = ["Spades 🗡️", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"];
console.log("Card Suits Example:", cardSuits);
 

The game itself will automatically play using console.log() to display turns, points, cards used, and the outcome of the game. No user input via prompts is required.
 

The completed project should, when executed, do the following:

Deal 26 Cards to each Player from a Deck of 52 cards.
Iterate through the turns where each Player plays a Card.
The Player who played the higher card is awarded a point.
-Ties result in zero points for both Players.
After all cards have been played, display the score and declare the winner.
 

The following is extra credit (10pts)

 

Write a Unit Test using Mocha and Chai for at least one of the functions you write.
*/
// *****************MY CODE BELOW*********************************
// GENERATE RANDOM NUMBERS:
function getRandomInt(min, max) { // Inclusive of the min and max
  const minCeiled = Math.ceil(min); // Math.ceil rounds up to the nearest integer
  const maxFloored = Math.floor(max); // Math.floor rounds down to the nearest integer
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// console.log(getRandomInt(0,30));
// Expected output: 0, 1 or 2

// console.log(getRandomInt(0,1));
// Expected output: 0

// console.log(Math.random());
// Expected output: a number from 0 to <1


// SHUFFLE AN ARRAY:
function shuffle (array) { // I'm using the Fisher-Yates method here
  let shuffledArray = [] // empty string to hold the shuffled deck
  for (let i = array.length - 1; i > -1; i--) {
    let rdm = getRandomInt(0, i); // choose a random element in the beginning of the array
    shuffledArray.push(array[rdm]); // push this random element into the new array
    array[rdm] = array [i]; // switch places. Note that the array that is passed in is changed
    }
  return shuffledArray
}
/* TEST
let x = [1, 2, 3, 4, 5]
let y = x
console.log(x)
console.log(shuffle(y));
should show a shuffled array. It does!
console.log (x); // the array passed in is changed
*/

// SHUFFLE AN ARRAY WITH SPLICE:
// (I'm calling this a pile because I imagine taking a random card from the sorted deck and placing it on a new pile. I'm practicing with a simple array first.
function shufflePile (array) { 
  let shuffledPile = []; // start with an empty array -- the new pile
  for (let i = array.length - 1; i > -1; i--) {
    let rdm = getRandomInt(0, i); // choose a random element in the array
    shuffledPile.push(array[rdm]); // push this random element into the new array
    array.splice(rdm, 1); // remove the element from the original array.
    }
  return shuffledPile
}
/* Testing
let v = [1, 2, 3, 4, 5]
console.log(shufflePile(v));
console.log(shufflePile([1, 2, 3, 4, 5]));
console.log(shufflePile([1, 2, 3, 4, 5]));
console.log(shufflePile([1, 2, 3, 4, 5]));
let w = (shufflePile(v));
console.log(w); // because the arrays point to the same values, an empty array is returned
*/

/* Create a new card deck. Jacks have a value of 11; Queens = 12; Kings = 13; Aces = 14.
function createDeck () {
  let cardDeck = [];
  for (let suit = 0; suit < 4; suit++) {
    for (let card = 0; card < 13; card ++) {
      cardDeck.push(card + 2);
    }
  }
  return cardDeck
}
let cardDeck = createDeck();
console.log(cardDeck); // new cardDeck
console.log(shuffle(cardDeck)); // shuffled cardDeck
*/

/* CHOOSE SUITS
      if (i = 0) {
        suit = "H";
      } else if (i = 1) {
        suit = "C";
      } else if (i = 2) {
        suit = "D";
      } else {
        suit = "S";
      } // suit selected
*/

class Card  {
  constructor (suit, value) {
    this.suit = suit;
    this.value = value;
  }
}


function createDeck () {
  let cardDeck = [];
  let cardVal = 0;
  let numInSuit = 3;
  
  let suit = "Hearts"
  for (let j = 0; j < numInSuit; j++) {
      cardVal = j + 2; // value selected
      let anotherCard = new Card(suit, cardVal); //create card as a 2-element array
      cardDeck.push(anotherCard);
    } 
  suit = "Clubs"
  for (let j = 0; j < numInSuit; j++) {
    cardVal = j + 2; // value selected
    let anotherCard = new Card(suit, cardVal); //create card as a 2-element array
    cardDeck.push(anotherCard);
  } 
  suit = "Diamonds"
  for (let j = 0; j < numInSuit; j++) {
    cardVal = j + 2; // value selected
    let anotherCard = new Card(suit, cardVal); //create card as a 2-element array
    cardDeck.push(anotherCard);
  } 
  suit = "Spades"
  for (let j = 0; j < numInSuit; j++) {
    cardVal = j + 2; // value selected
    let anotherCard = new Card(suit, cardVal); //create card as a 2-element array
    cardDeck.push(anotherCard);
  } 
  /*
  for (let suit = 0; suit < 4; suit++) {
    for (let j = 0; j < 2; j++) {

      cardVal = j + 2; // value selected
      let anotherCard = new Card(suit, cardVal); //create card as a 2-element array

      cardDeck.push(anotherCard);
    }
  }
  */
  return cardDeck
}


// SHUFFLE AN ARRAY OF OBJECTS: 
// I'm using the Fisher-Yates method here
// can't reshuffle the same deck; have to call a new deck

function shuffleDeck (array) { 
  let shuffledDeck = [] // empty string to hold the shuffled deck

  for (let i = array.length - 1; i > -1; i--) {
    let rdmNum = getRandomInt(0, i); 
    // let rdmCard = array[rdmNum]; // select a random card from the passed in array
    shuffledDeck.push(array[rdmNum]); // add that card to the new array
    array.splice(rdmNum,1); // remove the card from the passed-in array so you can't push that card again
    }
  return shuffledDeck;
}
let anotherDeck = createDeck();
console.log(anotherDeck); // new cardDeck
let myShuffledDeck = shuffleDeck(anotherDeck);
console.log(myShuffledDeck);

/*
let emptyPile = [];
let indexArray = [0, 1, 2, 3]
emptyPile.push(anotherDeck[2]);
indexArray.splice(2, 1);
console.log(emptyPile);
console.log(anotherDeck);
console.log(indexArray);

emptyPile.push(anotherDeck[0]);
indexArray.splice(0, 1);
console.log(emptyPile);
console.log(anotherDeck);
console.log(indexArray);
*/

//console.log(shuffleDeck(anotherDeck));

// let anotherShuffledDeck = shuffleDeck(anotherDeck)
// console.log(anotherShuffledDeck); // shuffled cardDeck

/*
function shuffleCardDeck () {
  let newDeck = [];
  for (let i = 0; i < 52; i++) {
    newDeck.push(i); // creates an array from 0 to 52
  }
  
  let shuffledArray = [] // empty string to hold the shuffled deck
  for (let i = newDeck.length - 1; i > -1; i--) { // start at the end of the array
    let rdm = getRandomInt(i); // choose a random element in the beginning of the array
    shuffledArray.splice(newDeck[rdm]); // push this randome element into the new array
    newDeck[rdm] = newDeck[i]; // switch places. Note that the array that is passed in is changed
    }
  return shuffledArray; // returns a randomized array of numbers 
}

let m = shuffleCardDeck()
console.log(m);
*/

/*
function shuffleADeck () {
  let newDeck = [];
  for (let i = 0; i < 52; i++) {
    newDeck.push(i); // creates an array from 0 to 52
  }
  
  const deckOfCards = Array(52);
  for (let i = deckOfCards.length - 1; i > -1; i--) {
    let r = getRandomInt(i); // get a random position
    if (deckOfCards[r] > 0) { // if there's a card in that position
      r = getRandomInt(i); // get another random position
    } else {
      deckOfCards.splice(r, 1, newDeck[i]) // put the card in this position
    }
  }
  return deckOfCards;
}

let a = shuffleADeck();
console.log (a);
*/

// // DEAL CARDS
// let playerOneHand = [];
// let playerTwoHand = [];
// let newCardDeck = createDeck();
// let gameWarCardDeck = shuffleDeck(newCardDeck);

// console.log (gameWarCardDeck);

// for (let i = 0; i < gameWarCardDeck.length; i++) {
//   if (i % 2 === 0) { // cards at even indices go to player one
//     playerOneHand.push(gameWarCardDeck[i]);
//   } else { // cards at odd indices go to player two
//     playerTwoHand.push(gameWarCardDeck[i]);
//   }
// }

// console.log(playerOneHand);
// console.log(playerTwoHand);
// console.log(`Deck length is ${gameWarCardDeck.length}`);

// // PLAY AND SCORING
// let playerOneScore = 0;
// let playerTwoScore = 0;
// for (let i = 0; i < gameWarCardDeck.length/2; i++) {
//   if (playerOneHand[i].value > playerTwoHand[i].value) {
//     playerOneScore += 1;
//   } else if (playerOneHand[i].value < playerTwoHand[i].value) {
//     playerTwoScore += 1;
//   } else if (playerOneHand[i].value === playerTwoHand[i].value) {
//     playerOneScore += 0; // tie
//     playerTwoScore += 0; // no score
//   }
// }
// console.log(playerOneScore);
// console.log(playerTwoScore);
// if (playerOneScore > playerTwoScore) {
//   console.log(`Player One wins: ${playerOneScore} to ${playerTwoScore}`);
// } else if (playerOneScore < playerTwoScore) {
//   console.log(`Player Two wins: ${playerTwoScore} to ${playerOneScore}`);
// } else {
//   console.log(`It's a TIE!`)
// }

// CREATE A GAME CLASS
class Game {
  constructor (shuffledDeckArray) {
    this.gameWarCardDeck = shuffledDeckArray; // pass in a shuffled deck
  }
  

  // METHOD to Deal, play and score each round
  playDealAndScore (array) {
    // deal all the cards
    let playerOneHand = []; // cards in player one's hand
    let playerTwoHand = []; // cards in player two's hand
    for (let i = 0; i < array.length; i++) {
      if (i % 2 === 0) { // cards at even indices go to player one
        playerOneHand.push(array[i]);
      } else { // cards at odd indices go to player two
        playerTwoHand.push(array[i]);
      }
    }
  
    // play and score
    let round = []; // array to hold round results; round results get pushed into gameArray
    let gameArray = []; // array to hold game results

    for (let i = 0; i < array.length/2; i++) { // go through all the cards
      console.log ("The array Length is " + array.length);
      if (playerOneHand[i].value > playerTwoHand[i].value) {
        round = [i, playerOneHand[i], playerTwoHand[i], 1, 0, 0];
        gameArray.push(round); // push round to gameArray;
      } else if (playerOneHand[i].value < playerTwoHand[i].value) {
        round = [i, playerOneHand[i], playerTwoHand[i], 0, 1, 0];
        gameArray.push(round); // push round to gameArray;
      } else if (playerOneHand[i].value === playerTwoHand[i].value) {
        round = [i, playerOneHand[i], playerTwoHand[i], 0, 0, 1];
        gameArray.push(round); // push round to gameArray
      }
    }
    
    // return all the rounds and scores
    return gameArray;
  }
    

  // METHOD to tally all the rounds in the game
  gameTally (gameArray) {
    let playerOneScore = 0;
    let playerTwoScore = 0;
    let ties = 0; // keep track of ties
    let winnerArray = []; // holds final game results

    for (let i = 0; i < gameArray.length; i++) { // loop through all the rounds
      playerOneScore =+ gameArray[i][3];
      playerTwoScore += gameArray[i[4]];
      ties += gameArray[i[5]];
    }
    winnerArray.push(playerOneScore);
    winnerArray.push(playerTwoScore);
    winnerArray.push(ties);

    return winnerArray;
  }
}

  // CREATE A DISPLAY CLASS
class Display {
  constructor (gameArray, winnerArray) {
    this.gameArray = gameArray;
    this.winnerArray = winnerArray;
  }

  displayRoundResults (gameArray) {
    for (let i = 0; i < gameArray.length; i++) { // loop through all the rounds
      console.log ("Round " + gameArray[i[0]] + ". Player 1: " + gameArray[i[1]].suit + gameArray[i[1]].value + ". Player 2: " + gameArray[i[2]].suit + gameArray[i[2]].value + "\n")
      if (gameArray[i[3]] === 1) {
        console.log ("Player ONE* wins this round.");
      } else if (gameArray[i[4]] === 1) {
        console.log ("Player TWO** wins this round.");
      } else if (gameArray[i[5]] === 1) {
        console.log ("This round was a TIE.");
      }
    }
  }

  displayGameResults (winnerArray) {
    console.log ("Player One's score is: " + winnerArray[0]);
    console.log ("Player Two's score is: " + winnerArray[1]);
    console.log ("This game had " + winnerArray[2] + " ties.");

    if (winnerArray[0] > winnerArray[1]) {
      console.log ("PLAYER ONE WINS !");
    } else if (winnerArray[0] < winnerArray[1]) {
      console.log ("PLAYER TWO WINS !");
    } else if (winnerArray[0] === winnerArray[1]) {
      console.log ("THE GAME IS TIED !");
    }
  }
}

let myGame = new Game(myShuffledDeck);
let myRounds = myGame.playDealAndScore(myShuffledDeck);
console.log(myRounds);
let myTally = myGame.gameTally(myRounds);
console.log(myTally);