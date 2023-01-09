//Create 4 math functions, one called add() that adds 2 numbers, one called subtract() that subtracts 2 numbers, one called multiply() to multiply 2 numbers, and one called divide() to divide two numbers.

// Add
function add(num1, num2) {
    return parseInt(num1) + parseInt(num2);
}

// Subtract
function subtract(num1, num2) {
    return parseInt(num1) - parseInt(num2);
}

// Divide
function divide(num1, num2) {
    return parseInt(num1) / parseInt(num2);
}

//Multiply
function times(num1, num2) {
    return parseInt(num1) * parseInt(num2);
}

var operand = prompt("Enter a operand ( + , - , * , / )"), num1 = prompt("Enter First Number"), num2 = prompt("Enter Second Number");

if(operand == '+'){
    console.log(add(num1,num2));
    }

if(operand == '-'){
    console.log(subtract(num1,num2));
    }

if(operand == '/'){
    console.log(divide(num1,num2));
    }

if(operand == '*'){
    console.log(times(num1,num2));
    }


/* var add = myFunction (10, 5);

function myFunction(a, b) {
    return a + b;
 } */


// // Add
// var add1 = 10;
// var add2 = 30;

// console.log(add1 + add2); // Show up as 40

// // Another Way to Add
// let x = 20;
// let y = 60;

// let k = y + x; // Add Left to Right

// console.log(k) // Show up as 80



// // Subtract
// var sub1 = 5;
// var sub2 = 2;

// console.log(sub1 - sub2); //Show up as 3

// // Another Way to Subtract
// let a = 40;
// let b = 20;

// let c = b - a; // SubtractLeft to Right

// console.log(c) //Show up as -20



// // Multiply
// var times1 = 50;
// var times2 = 2;

// console.log(times1 * times2);

// // Another Way to Multiply
// let d = 4;
// let e = 5;

// let f = e * d; // Multiply Left to Right

// console.log(f) //Show up as 20



// // Divide
// var divide1 = 100;
// var divide2 = 4;

// console.log(divide1 / divide2);

// // Another Way to Divide
// let g = 8;
// let h = 4;

// let i = h / g; //Divide Left to Right

// console.log(i) //Show up as .5