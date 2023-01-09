//Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"

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
    console.log(num1 + '+' + num2 + "=" + add(num1,num2));
    }

if(operand == '-'){
    console.log(num1 + '-' + num2 + "=" + subtract(num1,num2));
    }

if(operand == '/'){
    console.log(num1 + '/' + num2 + "=" + divide(num1,num2));
    }

if(operand == '*'){
    console.log(num1 + '*' + num2 + "=" + times(num1,num2));
    }