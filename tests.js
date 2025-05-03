// import chai from './node_modules/chai/chai.js'; const { expect, assert } = chai;
const expect = chai.expect
const assert = chai.assert

describe("Week 9 Assignment: War Card Game", () => {
  describe('Shuffle the cards', () => {

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

    it('#Should return an array with all elements, reordered',  () => {
      // Copy & paste your debugged code
      const myDeck = new Deck(); // create a deck object
      const sortedDeck = myDeck.createDeck(); // create a deck array
      const gameWarCardDeck = myDeck.shuffleDeck(sortedDeck); // shuffle the deck
      console.log("sortedDeck", sortedDeck);
      console.log("gameWarCardDeck", gameWarCardDeck);
      expect(gameWarCardDeck.length).to.equal(sortedDeck.length);
      });
  });
});