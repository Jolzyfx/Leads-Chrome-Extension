//



//let firstBatch = 5
//let secondBatch = 7
//let count = firstBatch + secondBatch

//console.log(count)

let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")
 console.log("save-el");

let count = 0;

function increment() {
   count +=1
   countEl.textContent = count;
}

 function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
 }
 console.log("Lets count people on the subway")
  


/** 
let firstName = "Joshua";
let lastname = "Chiemela";

let fullName = firstName + " " + lastname;
console.log(fullName);


let myname = "Linda"
let greeting = "Hi there"

function greet(){
   console.log(greeting + ", " + myname + "!");

}
greet()

let myPoints = 3;

function add3Points(){
    myPoints += 3
}

function remove1Point(){
    myPoints -= 1
}
 
add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()


console.log(myPoints)


let num1 = 8 
let num2 = 2
document.getElementById("num-el").textContent = num1
document.getElementById("num2-el").textContent = num2


let sumEl = document.getElementById("sum-el")

function add(){
 let result = num1 + num2
 sumEl.textContent = "Sum: " + result
}

function subtract(){
    let result = num1 - num2
    sumEl.textContent = "Sum: " + result
}

 function divide(){
    let result = num1 / num2
    sumEl.textContent = "Sum: " + result
 }

 
function multiply(){
    let result = num1 * num2
    sumEl.textContent = "Sum: " + result
}  */



































































