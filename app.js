/*-------------------------------- Constants --------------------------------*/

const cards = document.getElementsByClassName("cards-container");
const restart = document.getElementById('restart');
const imgsLinksArray = [ {
    id: 'card1',
    img: 'assets/avocado.png'
    altName: 'Avocado image'
}, {
    id: 'card2',
    img: 'assets/kiwi.png'
    altName: 'Kiwi Image'
}, {
    id: 'card3',
    img: 'assets/orange.png'
    altName: 'Orange Image'
}, {
    id: 'card4',
    img: 'assets/papaya.png'
    altName: 'Papaya Image'
}, {
    id: 'card5', 
    img: 'assets/strawberry.png'
    altName: 'Strawberry Image'
}, {
    id: 'card6',
    img: 'assets/avocado.png'
    altName: 'Avocado image'
}, {
    id: 'card7',
    img: 'assets/kiwi.png'
    altName: 'Kiwi Image'
}, {
    id: 'card8',
    img: 'assets/orange.png'
    altName: 'Orange Image'
}, {
    id: 'card9',
    img: 'assets/papaya.png'
    altName: 'Papaya Image'
}, {
    id: 'card10', 
    img: 'assets/strawberry.png'
    altName: 'Strawberry Image'
}]

/*-------------------------------- Variables --------------------------------*/

let allCardFaces = document.getElementsByClassName('card-face')
let toggledCardsArray = [];

/*------------------------ Cached Element References ------------------------*/



/*----------------------------- Event Listeners -----------------------------*/


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

init();