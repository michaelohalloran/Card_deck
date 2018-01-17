let output = document.getElementById("output");
let startBtn = document.getElementById("startBtn");
let howMany = document.getElementById("howMany");
let cardDeck = [];
let spadeImage = "<img src='spade.JPG'>";
let heartImage = "<img src='heart.JPG'>";
let diamondImage = "<img src='diamond.JPG'>";
let clubImage = "<img src='club.JPG'>";


//EVENT LISTENERS
// startBtn.addEventListener("click", dealDeck);



//ARRAYS
//playerArray
//cardDeck array

//FUNCTIONS/ACTIONS NEEDED

//need to start the game
//makeCardDeck, shuffle it, put players on display, 
//give them each their cards, make UI empty to start to reset last game

function startGame() {

}

//need to build cards (4 suits of 13) and store in array

function makeCardDeck() {
	let nonNums = ["Jack","King","Queen","Ace"];
	let Suits = ["Clubs","Spades","Hearts","Diamonds"];
	//push 52 cards into array
	//nested loop? 4 suits of 13 each
	for(let i = 0; i < 4; i++) {
		//make 4 suits
		for (let j = 2; j < 15; j++) {
			if(j < 11) {
				cardDeck.push(`${j} ${Suits[i]}`);
			} else {
				//**************this won't work after j > 4
				cardDeck.push(`${nonNums[j]} ${Suits[i]}`);
			}
		}
	}
	return cardDeck;
}

//need to shuffle cards randomly

function randomShuffle() {
	//%%%%%%%%%%%%need to always have 52 cards?

	//make randomCard index
	let randomCard = Math.floor(Math.random()*52);

	//loop through deck, randomizing by setting each item equal to 
	//random position

	for(let i = 0; i < cardDeck.length; i++) {
		let temp = arr[i];
		arr[i] = arr[randomCard];
		arr[randomCard] = temp;
	}
	return cardDeck;
}

//need to see how many are playing and deal each a full deck of cards

let numPlayers = Number(howMany.value);


// function dealDeck() {
	// alert(numPlayers);
// 	switch: numPlayers {
// 		case 1: 

// 		break;

// 		case 1: 

// 		break;

// 		case 1: 

// 		break;

// 		case 1: 

// 		break;

// 		case 1: 

// 		break;

// 		default: 
// 			//do stuff
// 	}
// }