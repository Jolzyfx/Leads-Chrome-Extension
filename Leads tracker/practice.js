
// Used an onclick() function from the html
function saveInput(){
    console.log("Button Clicked")
}

// No onclick() function in the html because of the addEventListener
let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function(){
  console.log("Button clicked from addEventListener")
})
//More Examples on addEventListener
let boxEl = document.getElementById()

boxEl.addEventListener("click" ,function(){
  console.log("I want to open the box ")
})

// Examples on innerHtml
const containerEl = document.getElementById("container") 

containerEl.innerHTML = "<button onclick = 'buy()'>Buy!</button>"
// Render a paragraph when the button isz clicked 
function buy(){
    containerEl.innerHTML += "Thank you for buying!!"
}

//ANOTHER METHOD✔⬇
  // const li =document.createElement("li")
   //li.textContent = myLeads[index]
  // ulEl.append(li)


  const recipient = "James"
  const sender = "Josh anthony"

const email = 
`
Hey ${recipient}! 

How is it going? 

Cheers ${sender}
`

console.log(email)

//localStorage.setItem("hello" , " bye")
//let nam = localStorage.getItem("hello")
//console.log(nam)
//localStorage.clear()


let myLeads = `["www.awesomelead.com"]`

myLeads = JSON.parse(myLeads)
myLeads.push("www.lead2.com")
myLeads = JSON.stringify(myLeads)
console.log(typeof myLeads)

const credits = 0

if (credits > 0){
  console.log("lets play")
}else{
  console.log("Sorry, you have no credits")
}



function greetUser(greeting,name,emoji){
  welcomeEl.textContent = `${greeting},${name},${emoji}`
}
greetUser("welcome back","joshua","👋")



function add(num1,num2){
 return num1+num2
}
console.log(add(3, 4))


function getFirst(arr){
  return arr[0]
}
console.log(getFirst([a,b,c]))


//PRACTICE TIME

const player = "Per"
const opponent = "Nick"
const game = "AmazingFighter"
let points = 0
let hasWon = false

points += 100
hasWon = true

if(hasWon){
  console.log(`${player} got ${points} points and won the ${game} game!`)
}else{
  console.log(`The winner is ${opponent}! ${player} lost the game`)
}

//PRACTICE 2

let myCourses = ["Learn CSS Animations","UI Design Fundamentals","Intro to Clean Code"]

function courses(arr){
 for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  
 }
}
logItems(myCourses)

//PRACTICE 3

//localStorage.setItem("array",100)

let tab = localStorage.getItem("array")
console.log("array")



















































































































































