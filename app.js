var output = document.getElementById("output");
var startBtn = document.getElementById("startBtn");

//DECK
const cardFace = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
const suits = ["clubs","spades","hearts","diams"];

//CARD IMAGES
var spadeImage = "<img src='spade.JPG'>";
var heartImage = "<img src='heart.JPG'>";
var diamondImage = "<img src='diamond.JPG'>";
var clubImage = "<img src='club.JPG'>";


//EVENT LISTENERS
startBtn.addEventListener("click", startGame);

//ARRAYS
var players = [];
var cardDeck = [];

//FUNCTIONS/ACTIONS NEEDED

//startGame
//makeCardDeck
//shuffleDeck
//dealDeck 
//showCards
//reset (make UI empty to start to reset last game)

function startGame() {
	//reset UI, clear any remnant values 
	players = [];
	cardDeck = []; 

	//make playersArray 
	var howManyPlayers = Number(document.getElementById("howManyPlayers").value);
	makeCardDeck();
	shuffleDeck(cardDeck);
	dealDeck(howManyPlayers, cardDeck);

}


function makeCardDeck() {

	//nested loop of cardFace and Suits
	//concatenate a Suit with a cardFace for each, push into large cardDeck
	
	//make 4 suits
	// for(let i = 0; i < 4; i++) {
	// 	//make 13 cards for each suit
	// 	for (let j = 0; j < 13; j++) {
	// 		cardDeck.push(`${cardFace[j]} ${suits[i]}`);
	// 	}
	// }
	// return cardDeck;

	for(var suit in suits) {
		//using var causes bgColor to be undefined
		var bgColor = (suits[suit] === "hearts" || suits[suit] === "diams") ? bgColor = "red": bgColor = "black";
		var cardImg;
		switch(suits[suit]) {
			case "clubs":
				cardImg = clubImage;
				break;
			case "spades":
				cardImg = spadeImage;
				break;
			case "hearts": 
				cardImg = heartImage;
				break;
			case "diams":
				cardImg = diamondImage;
				break;
			default:
				console.log('switch not working');
		}
		for(var c in cardFace) {
			var card = {
				suit: suits[suit],
				num: cardFace[c],
				bgColor: bgColor,
				cardImg
			}
			cardDeck.push(card);
		}
	}
	console.log('inside makeCardDeck, before shuffle');
	console.log(cardDeck);
	return cardDeck;
}

//need to shuffle cards randomly

function shuffleDeck(cards) {
	//loop through deck, randomizing by setting each item equal to 
	//random position

	for(var i = cards.length -1; i > 0; i--) {
		//make randomCard index
		var randomCard = Math.floor(Math.random()*(i+1));
		var temp = cards[i];
		cards[i] = cards[randomCard];
		cards[randomCard] = temp;
		}
	console.log('after shuffling, inside shuffle function');
	console.log(cards);
	return cards;
}


//need to see how many are playing and deal each a full deck of cards
//Math.floor(array.length/numPlayers) =>each gets this many cards

function dealDeck(numPlayers, deck) {
	console.log(`There are ${numPlayers} playing`);
	var numCardsPerPlayer = Math.floor(deck.length/numPlayers);
	console.log(`Each player gets ${numCardsPerPlayer} cards`);
	//this only prints 13 cards for 4 players, but need 4 sets of 13
	for(let i = 0; i < numPlayers; i++) {
		for(let j = 0; j < numCardsPerPlayer; j++) {
			output.innerHTML += `
			<ul style="color: ${deck[j].bgColor}">
				<li>${deck[j].suit} ${deck[j].num} ${deck[j].cardImg}</li>
			</ul>
		`;
		}
		output.innerHTML += '<br/>'
	}
	
}


//***********************************************************************
//***********************************************************************
//***********************************************************************