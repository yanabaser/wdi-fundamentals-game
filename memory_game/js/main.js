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
if (cardsInPlay.length===2)
 if(cardsInPlay[0]===cardsInPlay[1]) {
alert("You found a macth!");}
else {
alert("Sorry, try again!");}
}

var flipCard = function () {
  var cardId = this.getAttribute('data-id');
this.setAttribute('src',cards[cardId].cardImage);
cardsInPlay.push(cards[cardId].rank);
  checkForMatch(cardId);}

var createBoard = function() {
    for (var i=0; i < cards.length; i++){
    var cardElement = document.createElement('img'); // image element will substitue a card in play?
  cardElement.setAttribute('src','images/back.png');
  cardElement.setAttribute('data-id',i);

cardElement.addEventListener('click', flipCard)
  document.getElementById('game-board').appendChild(cardElement);
}
  }
    createBoard();
