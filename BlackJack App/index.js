
/**let age = 22;

if (age < 21){
    console.log("You cannot enter the club!")
}else {
    console.log("Welcome!")
}

let age = 105;

if(age < 100){
    console.log("Not Eligible")
}else if (age === 100){
  console.log("Here is your birthday card from the king!")
}else{
    console.log("Not eligible, you have already gotten one")
}*/

let player = {
    name : "Josh",
    chips : 200
}


let cards = []
let sum = 0;

let hasBlackJack = false
let isAlive = true
let message = " ";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")



let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips







function getRandomCard(){
   
    let randomNumber = Math.floor(Math.random() * 13)  + 1

    
    if (randomNumber > 10){
        return 10
    }else if(randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }
}
getRandomCard()

function startGame(){
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame(){
      cardsEl.textContent = "Cards: " 
    for (let index = 0; index < cards.length; index++) {
        cardsEl.textContent  += cards[index] + " ";
        
    }
    

    sumEl.textContent = "Sum: " + sum
    if(sum <= 20){
        message = "Do you want draw a new card?"
    }else if (sum === 21){
        message = "You've got BlackJack!"
        hasBlackJack = true
    }else {
        message = "You're out of the game!"
        isAlive = false
    }


     messageEl.textContent = message
}

function newCard(){
    console.log("Drawing a new card from the deck!")
    


    if (isAlive === true && hasBlackJack === false){

        isAlive = true
        hasBlackJack = false

        let card = getRandomCard()
        sum += card
    
        cards.push(card)
    
    
        renderGame()
      
    }

    
    }
    












































