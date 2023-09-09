// #primitive dataType: 

// 7 types : - String, number, boolean, null, undefined, Symbol, BigInt

const name = "Abhishek"
const employeId = 32
const isLoggedIn =  false
const id = null;
let age;  //Undefined


//Symbol

const employee1 = Symbol('123')
const employee = Symbol('123')

console.log(employee === employee1);  //false

// BigInt

const number = 12312312312323123123312n  //n used for BigInt


// # Non-Primitive types

// Mainly 3 types :- Arrays, Object, Functions

const heros = ['hulk', 'tony', 'hawkeye']

const employeeDetails = {
    name: 'Abhishek',
    age: 23
}


const myFunction = function() {
    console.log('Hello World');
}


// console.log(typeof id)
// console.log(typeof myFunction)



// ++++++++++++++++++++++++++++++++

//  Memory -> Stack(Primitive) , Heap(Non_primtive)

// if you take anything under stack you will get the copy of it but in heap you will get the reference.

let myYoutubeName = "Abhishek"

let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);


let user = {
    email : "hey@google.coom",
    upi: "hey@ybl"
}

let userTwo = user

userTwo.email = "changed@google.com"

console.log(userTwo.email)
console.log(user.email)