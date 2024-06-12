/*-------------------------------- Constants --------------------------------*/
const cards = document.getElementsByClassName("cards-container");
const reset = document.getElementById('reset');
const imgsLinksArray = [{
	id: 'card1',
	img: 'assets/avocado.png'
}, {
	id: 'card2',
	img: 'assets/kiwi.png'
}, {
	id: 'card3',
	img: 'assets/orange.png'
}, {
	id: 'card4',
	img: 'assets/papaya.png'
}, {
	id: 'card5',
	img: 'assets/strawberry.png'
}, {
	id: 'card6',
	img: 'assets/avocado.png'
}, {
	id: 'card7',
	img: 'assets/kiwi.png'
}, {
	id: 'card8',
	img: 'assets/orange.png'
}, {
	id: 'card9',
	img: 'assets/papaya.png'
}, {
	id: 'card10',
	img: 'assets/strawberry.png'
}]
/*-------------------------------- Variables --------------------------------*/
let allCardFaces = document.getElementsByClassName('card-face')
let toggledCardsArray = [];
let matchedCardsCount = 0;
let messsage = document.getElementById('message')
/*------------------------ Cached Element References ------------------------*/
/*----------------------------- Event Listeners -----------------------------*/
reset.addEventListener('click', init);

for (let i = 0; i < cards.length; i++) {
	cards[i].addEventListener('click', handleClick);
}
/*-------------------------------- Functions --------------------------------*/
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

function init() {
	const shuffledArray = shuffleArray(imgsLinksArray);
	for (let i = 0; i < cards.length; i++) {
		const cardFace = cards[i].querySelector('.card-face img');
		cardFace.src = shuffleArray[i].img;
		cardFace.alt = shuffleArray[i].altName;
		cards[i].setAttribute('data-card-id', shuffleArray[i].id)
	}
}

function handleClick() {
	this.classList.add("flipped");
	toggledCardsArray.push(this);
	if (toggledCardsArray.length === 2) {
		const card1Id = toggledCardsArray[0].getAttribute('data-card-id');
		const card2Id = toggledCardsArray[1].getAttribute('data-card-id');
		if (card1id !== card2Id) {
			setTimeout(() => {
				toggledCardsArray.forEach(card => card.classList.remove("flipped"));
				toggledCardsArray = [];
			}, 1000);
		} else {
			toggledCardsArray = [];
			matchedCardsCount++;
			if (matchedCardsCount === cards.length / 2) {
				messsage.textContent = " You won! Congratulations"
			}
		}
	}
}