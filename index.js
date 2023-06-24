let selectedCard;
let countdownInterval = null;
const countdownElement = document.getElementById("timer");
const cards = document.querySelectorAll(".card");
const initialCards = Array.from(cards).slice(0, 10); 
let resultContainer = document.getElementById("res");
let res01 = document.getElementById("restar");
let sound = new Audio("shufflecards.mp3");




// Select the first 10 cards


function selectCard(card) {
  if (selectedCard !== null) {
    selectedCard.style.backgroundColor = "";
  }
  selectedCard = card;
  card.style.backgroundColor = "#ede861";
}

function shuffleCards() {
    const cardsContainer = document.getElementById("cardContainer");
  
    for (let i = initialCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      cardsContainer.appendChild(initialCards[j]);
    }
  }

  function startAnimation() {
    cards.forEach(function (card) {
      card.classList.add("animated");
      card.addEventListener("animationstart", function () {
        sound.play();
      });
    });
  }
  
  function stopAnimation() {
    cards.forEach(function (card) {
      card.classList.remove("animated");
     
    });
  }
function startCountdown() {
  let time = 15;
  countdownElement.textContent = time;
  
  startAnimation();

  countdownInterval = setInterval(function () {
    time--;
    countdownElement.textContent = time;

    if (time === 0) {
      clearInterval(countdownInterval);
      revealAutomatedCard();
      stopAnimation();
    }
  }, 1000);
}
function revealAutomatedCard() {
    const automatedCard = document.getElementById("automatedCard");
    const automatedIndex = Math.floor(Math.random() * initialCards.length);
    const automatedCardElement = initialCards[automatedIndex].querySelector("img").src;

  
    automatedCard.classList.remove("hidden");
    console.log(automatedCardElement);


    let a = document.createElement("img");
    a.src = automatedCardElement;
    automatedCard.appendChild(a);

    if (automatedCardElement === selectedCard.querySelector("img").src) {
      automatedCard.style.backgroundColor = "#41f0e1";
      setTimeout(function () {
        resultContainer.textContent = "Congratulations! You Won";
        resultContainer.style.color = "green";
        resetSelection();
      }, 2000);
    } else {
      automatedCard.style.backgroundColor = "#f08a41";
      setTimeout(function () {
       resultContainer.textContent = "Sorry You Lose! Try Again";
       resultContainer.style.color = "red";
        resetSelection();
      }, 2000);
    }
  }
function startGame() {
    if (selectedCard === null) {
        alert("Please Select a Card");
        return;
      }
  countdownElement.textContent = "";

  const automatedCard = document.getElementById("automatedCard");
  automatedCard.classList.add("hidden");

  clearInterval(countdownInterval);

  setTimeout(startCountdown, 500);

  for (const card of cards) {
    card.addEventListener("click", clickHandler);
  }
}
res01.addEventListener("click",function(){
    resultContainer.textContent = "";

    const cards = document.querySelectorAll(".card");


      if (selectedCard !== null) {
    selectedCard.style.backgroundColor = "";
    selectedCard = null;
  }
  const automatedCard = document.getElementById("automatedCard");
  automatedCard.style.backgroundColor = "";
  automatedCard.textContent = "";
  automatedCard.classList.add("hidden");
})

selectedCard = null; 

document.addEventListener("click", clickHandler);

function clickHandler(event) {
  if (event.target.classList.contains("card") && event.target !== cards[0]) {
    selectCard(event.target);
  }
}


let a = document.getElementById("userValue01");
let b = document.getElementById("decre");
let c = document.getElementById("incre");


b.addEventListener("click", decrement01);

function decrement01(){
  let previous = a.value;
  let new01 = parseInt(previous) - 10;
  a.value = new01;

}
c.addEventListener("click", increment01);

function increment01(){
  let previous = a.value;
  let new01 = parseInt(previous) + 10;
  a.value = new01;

}

