const suits = ['hearts', 'spades', 'diamonds', 'clubs'];
const cardsWrapper = document.querySelector('.cards-wrapper');


function createCards() {
  const cards = [];
  
  // For each suit produce 13 cards
  suits.forEach((suit, i) => {
  for (let i = 1; i <= 13; i += 1) {

    const cardObject = {
      value: i,
      suit,
    };

    cards.push(cardObject);
  }

});


   
  // For each dataObject, create a new card and append it to the DOM
  cards.forEach((card, i) => {
    const positionFromLeft = i * 30;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.id = 'card';
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });


  
 



}

function shuffleCards() {
 cardsWrapper.classList.add('shuffling');
 setTimeout(
    function() {
      cardsWrapper.classList.remove('shuffling');     
      var cards =  document.getElementById('cards');
      for (var i = cards.children.length; i >= 0; i--) {
      cards.appendChild(cards.children[Math.random() * i | 0]);
      } 
    }, 2000);
}

function showHide() {
 cardsWrapper.classList.toggle('hidden');
}

function magic() {
  cardsWrapper.classList.add('shuffling');
   setTimeout(
    function() {
      cardsWrapper.classList.remove('shuffling'); 
      createCards();     
       }, 2000);

}


// Function to clear out the initial button and create new buttons to play the game.
function createButtons() {
  
  // Remove Start button
  document.getElementById('start-game').remove();
  
  // Shuffle button
  var shuffleButton = document.createElement('button');
  shuffleButton.innerHTML = 'Shuffle';
  shuffleButton.id = 'shuffle-button';
  shuffleButton.type = 'button';
  shuffleButton.className = 'btn btn-lg btn-secondary';
  shuffleButton.onclick = function(){
    shuffleCards();
  }
  document.querySelector(".btn-wrapper").appendChild(shuffleButton);

  

  // Show/Hide button 
  var showButton = document.createElement('button');
  showButton.innerHTML = 'Show/Hide';
  showButton.id = 'show-button';
  showButton.className = 'btn btn-lg btn-secondary';
  showButton.className = 'btn btn-lg btn-secondary';
  showButton.onclick = function(){
    showHide();
  }
  document.querySelector(".btn-wrapper").appendChild(showButton);
  
  // Magic button
  var magicButton = document.createElement('button');
  magicButton.innerHTML = 'Magic';
  magicButton.id = 'magic-button';
  magicButton.type = 'button';
  magicButton.className = 'btn btn-lg btn-secondary';
  magicButton.onclick = function(){
    magic();
  }
  document.querySelector(".btn-wrapper").appendChild(magicButton);  

}


function startGame() {
  createButtons();
  createCards();
}

document.getElementById('start-game').addEventListener('click', startGame);
