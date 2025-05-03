/*
WAR GAME

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

// *** GAME SET-UP ***

// GENERATE RANDOM NUMBERS:
function getRandomInt(min, max) { // Inclusive of the min and max
    const minCeiled = Math.ceil(min); // Math.ceil rounds up to the nearest integer
    const maxFloored = Math.floor(max); // Math.floor rounds down to the nearest integer
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// CREATE A CARD CLASS
class Card  {
  constructor (suit, value) { // each card has a suit and a value
      this.suit = suit; // string: hearts, clubs, diamonds, spades
      this.value = value; // number: jacks=11, queens=12, kings=13, aces=14
  }
}

// CREATE DECK CLASS
class Deck {
  constructor () {
    this.cardDeck = [] // start with an empty array
  }
    
  //create a deck
  createDeck() {
    let cardVal = 0;
    let numInSuit = 13;

    let suit = "❤️" // easier to create each suit at a time
    for (let j = 0; j < numInSuit; j++) {
        cardVal = j + 2; // card value is 2 more than the index j
        let anotherCard = new Card(suit, cardVal); //create card object as a 2-element array
        this.cardDeck.push(anotherCard);
        } 
    suit = "♣️" // easier to create each suit at a time
    for (let j = 0; j < numInSuit; j++) {
        cardVal = j + 2; // card value is 2 more than the index j
        let anotherCard = new Card(suit, cardVal); //create card object as a 2-element array
        this.cardDeck.push(anotherCard);
    } 
    suit = "♦️" // easier to create each suit at a time
    for (let j = 0; j < numInSuit; j++) {
        cardVal = j + 2; /// card value is 2 more than the index j
        let anotherCard = new Card(suit, cardVal); //create card object as a 2-element array
        this.cardDeck.push(anotherCard);
    } 
    suit = "♠️" // easier to create each suit at a time
    for (let j = 0; j < numInSuit; j++) {
        cardVal = j + 2; // card value is 2 more than the index j
        let anotherCard = new Card(suit, cardVal); //create card object as a 2-element array
        this.cardDeck.push(anotherCard);
    } 
    return this.cardDeck;
  }

  // shuffle the deck 
  shuffleDeck() {
    let shuffledDeck = this.cardDeck.slice() // copy the cardDeck
    // I'm using the Fisher-Yates shuffle approach here.
    for (let i = this.cardDeck.length - 1; i > -1; i--) { // move the shuffle-end from end to beginnng
        let rdmNum = getRandomInt(0, i); // get a random index
        let temp = shuffledDeck[i]; // put the shuffle-end in the temporary array
        shuffledDeck[i] = shuffledDeck[rdmNum]; // copy a random card to the shuffle-end
        shuffledDeck[rdmNum] = temp; // put the original shuffle-end card in the random card position in the deck
        }
    return shuffledDeck; // This function replaces the original deck with the shuffled deck.
    }
}

// *** GAME PLAY STARTS HERE ***
const myDeck = new Deck(); // create a deck object
const sortedDeck = myDeck.createDeck(); // create a deck array
const gameWarCardDeck = myDeck.shuffleDeck(sortedDeck); // shuffle the deck

// DEAL CARDS
let playerOneHand = []; // cards in player one's hand
let playerTwoHand = []; // cards in player two's hand


for (let i = 0; i < gameWarCardDeck.length; i++) {
  if (i % 2 === 0) { // cards at even indices go to player one
    playerOneHand.push(gameWarCardDeck[i]);
  } else { // cards at odd indices go to player two
    playerTwoHand.push(gameWarCardDeck[i]);
  }
}

// PLAY AND SCORING
let playerOneScore = 0;
let playerTwoScore = 0;
let ties = 0; // keep track of ties

for (let i = 0; i < gameWarCardDeck.length/2; i++) { // go through all the cards
    console.log(`Round ${i+1}
        Player One:[${playerOneHand[i].suit} ${playerOneHand[i].value}]
        Player Two: [${playerTwoHand[i].suit} ${playerTwoHand[i].value}]`)
  if (playerOneHand[i].value > playerTwoHand[i].value) {
    playerOneScore += 1;
    console.log (`Player *One* wins round ${i+1}.`);
  } else if (playerOneHand[i].value < playerTwoHand[i].value) {
    playerTwoScore += 1;
    console.log (`Player TWO wins round ${i+1}.`);
  } else if (playerOneHand[i].value === playerTwoHand[i].value) {
    ties += 1; // keeping track of tied rounds
    console.log (`Round ${i+1} is a tie.`)
  }
}

// DISPLAY FINAL SCORES AND WINNER
console.log(`Player One's score is ${playerOneScore}`);
console.log(`Player Two's score is ${playerTwoScore}`);
console.log(`This game had ${ties} tied rounds.`)
if (playerOneScore > playerTwoScore) {
  console.log(`Player One wins: ${playerOneScore} to ${playerTwoScore}`);
} else if (playerOneScore < playerTwoScore) {
  console.log(`Player Two wins: ${playerTwoScore} to ${playerOneScore}`);
} else {
  console.log(`It's a TIE!`)
}

// export for tests
// module.exports={Deck} // old way