let myHobbies = [
   "Forex trading",
   "Programming",
   "Praying",
   "Watching Football",
]


let newMessage = "Same here!"

myHobbies.push(newMessage);

myHobbies.pop()

let  Josh = [Name = "Joshua" , Age =  20 ,Pizza = true,]

//******************** */
for (let count = 10;  count < 101 ; count+= 1)
console.log(count)





let cardo = [7, 3, 9]

for (let i = 0; i < cardo.length; i++) {
    console.log(cardo[i])
    
}

let sentence = ["Hello ","my ","name ","is ","Josh"]
let greetingsEl = document.getElementById("greeting-el")

for (let index = 0; index < sentence.length; index++) {
    greetingsEl.textContent += sentence[index]
    
    
}

let player1Time = 102
let player2Time = 107

function getFastestRaceTime(){
    if (player1Time < player2Time){
        return player1Time
    }
}




 function raceTime(){
     return player1Time + player2Time
 }

 let totalTime = raceTime()

 console.log(totalTime)
 
function rollDice(){
    let randomNumber = Math.floor(Math.random() * 6 )  + 1

    return randomNumber
}
console.log(rollDice())



let hasSolvedChallange = false
let hasHintsLeft = false

if (hasSolvedChallange === false && hasHintsLeft === false){
    showSolution();
}

function showSolution(){
    console.log("Showing the solution.....")
}



let hasCompletedCourse = true
let givesCertificate = true

if(hasCompletedCourse === true || givesCertificate === true){
    generateCertificate()
}

function generateCertificate(){
    console.log("Generating certificate......")
}





let h = big;
console.log(h)



let likesDocumentries = true
let likesStartups = true

if (likesDocumentries === true || likesStartups === true){
  recommendMovie()
}

function recommendMovie(){
    console.log("Hey check out this new file we thank you will like!")
}




let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Josh Anthony",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]

}

console.log(course.length)




let castle = {
   title: " Live like a king in my Castle",
   price: 190,
   isSuperHost: true,
   images:["img/castle1.png"]   
}


console.log(castle.price)
console.log(castle.isSuperHost)



let person = {
    mname: "Joshua",
    age: "20 years old" ,
    country: "Nigeria",
    
    
}
 
function logData(){
     return person.mname + " is " + person.age + " and lives in " + person.country
     
 }
 console.log(logData())  


 let age = 15 
 if(age < 6){
     console.log("Free")
 }else if(age < 18){
     console.log("Child discount")
 }else if(age < 27){
     console.log("Student discount")
 }else if (age < 66){
     console.log("full price")
 }else {
     console.log("senior citizen discount")
 }

 // Loop 
 let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

   for (let index = 0; index < largeCountries.length; index++) {
    
        console.log("- " + largeCountries[index]);
        
    }


    let bigCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]


bigCountries.pop()
bigCountries.push("Pakistan")
bigCountries.shift()
bigCountries.unshift("China")


console.log(bigCountries)


let dayOfMonth = 13
let weekday = "Friday"

if(dayOfMonth === 13 && weekday === "Friday"){
    console.log("Spooky Face")
}
   

let hands = ["rock","paper","scissor"]

function getHand(){
  let randomIndex = Math.floor(Math.random() * 3)
  return hands[randomIndex]
}
console.log(getHand());


let fruit = ["apple","orange","apple","apple","orange"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function apple(){
    for (let index = 0; index < fruit.length; index++) {
        if (fruit[index]=== "apple") {
            appleShelf.textContent += "apple"
        }else if (fruit[i] === "orange") {
            orangeShelf.textContent += "orange"
        }
        
    }
}

apple()





















 


