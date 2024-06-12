/*-------------------------------- Constants --------------------------------*/
const cards = document.getElementsByClassName("cards-container");
const reset = document.getElementById('reset');
const imgsLinksArray = [{
	id: 'card1',
	img: 'assets/avocado.png'
    altName: 'Avocado Img'
}, {
	id: 'card2',
	img: 'assets/kiwi.png'
    altName: 'Kiwi Img'
}, {
	id: 'card3',
	img: 'assets/orange.png'
    altName: 'Orange Img'
}, {
	id: 'card4',
	img: 'assets/papaya.png'
    altName: 'Papaya Img'
}, {
	id: 'card5',
	img: 'assets/strawberry.png'
    altName: 'Strawberry Img'
}, {
	id: 'card6',
	img: 'assets/avocado.png'
    altName: 'Avocado Img'
}, {
	id: 'card7',
	img: 'assets/kiwi.png'
    altName: 'Kiwi Img'
}, {
	id: 'card8',
	img: 'assets/orange.png'
    altName: 'Orange Img'
}, {
	id: 'card9',
	img: 'assets/papaya.png'
    altName: 'Papaya Img'
}, {
	id: 'card10',
	img: 'assets/strawberry.png'
    altName: 'Strawberry Img'
}]
/*-------------------------------- Variables --------------------------------*/
let allCardFaces = document.getElementsByClassName('card-face')
let toggledCardsArray = [];
let matchedCardsCount = 0;
let message = document.getElementById('message')
/*------------------------ Cached Element References ------------------------*/
/*----------------------------- Event Listeners -----------------------------*/
reset.addEventListener('click', init);

const cardElements = document.querySelectorAll('.cards'); 
cardElements.forEach(card => { 
    card.addEventListener('click', handleClick); 
});
/*-------------------------------- Functions --------------------------------*/
function shuffleArray(array) {
    const newArray = array.slice();
	for (let i = newArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
	}
	return newArray;
}

function init() {
	const shuffledArray = shuffleArray(imgsLinksArray);
	for (let i = 0; i < cards.length; i++) {
		const cardFace = cards[i].querySelector('.card-face img');
		cardFace.src = shuffledArray[i].img;
        cardFace.alt = shuffledArray[i].altName
		cards[i].setAttribute('data-card-id', shuffledArray[i].id)
	}
}

function handleClick() {
	this.classList.add("flipped");
	toggledCardsArray.push(this);
	if (toggledCardsArray.length === 2) {
		const card1Id = toggledCardsArray[0].getAttribute('data-card-id');
		const card2Id = toggledCardsArray[1].getAttribute('data-card-id');
		if (card1Id !== card2Id) {
			setTimeout(() => {
				toggledCardsArray.forEach(card => card.classList.remove("flipped"));
				toggledCardsArray = [];
			}, 1000);
		} else {
            toggledCardsArray.forEach (card => {
                card.removeEventListener('click', handleClick);
                card.classList.add("matched")
            });
			toggledCardsArray = [];
			matchedCardsCount++;
			if (matchedCardsCount === cards.length / 2) {
				message.textContent = " You won! Congratulations"
			}
		}
	}
}
