console.log("Up and running!");
var cards =[
  {rank: "queen",
  suit: "hearts",
  cardImage:"images/queen-of-hearts.png"},
  {rank:"queen",
  suit:"diamonds",
  cardImage: "images/queen-of-diamonds.png"},
  {rank:"king",
  suit: "hearts",
  cardImage:"images/king-of-hearts.png"},
  {rank: "king",
  suite:"diamonds",
  cardImage:"images/king-of-diamonds.png"}
];

var cardsInPlay = [];
var checkForMatch = function(cardId) {
  //document.getElementById(cardId).setAttribute('src',cards[cardId].cardImage);
if (cardsInPlay.length===2)
 if(cardsInPlay[0]===cardsInPlay[1]) {
alert("You found a macth!");}
else {
alert("Sorry, try again!");}
}
var flipCard = function () {
  var cardId = this.getAttribute('data-id');
//console.log("User flipped " + cards[cardId].rank)
//  console.log(cards[cardId].cardImage)
this.setAttribute('src',cards[cardId].cardImage);
cardsInPlay.push(cards[cardId].rank);
  checkForMatch(cardId);}
  //create a board playing function
var createBoard = function() {
    for (var i=0; i < cards.length; i++){
    var cardElement = document.createElement('img'); // image element will substitue a card in play?
  cardElement.setAttribute('src','images/back.png');
  cardElement.setAttribute('data-id',i);
  // add event listener to know when card is flipped and execute the flip card function
cardElement.addEventListener('click', flipCard)
  //document.getElementsByTagName('img')[0].addEventListener('click', flipCard);
  // append the card to the game board
  document.getElementById('game-board').appendChild(cardElement);
}
  }
    createBoard();
  //add event listener for refreshing the page after we played one game
document.getElementsByTagName('button').addEventListener('click',reload());
