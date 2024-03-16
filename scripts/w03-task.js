/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    //Gets the values of two HTML form controls with IDs of add1 and add2.
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);

    //call the add function using those two arguments and assign the return value to an HTML form element with an ID of sum
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

//Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function. 
document.querySelector("#addNumbers").addEventListener("click", addNumbers);


/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function() {
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);

    document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector("#factor1").value);
    let factor2 = Number(document.querySelector("#factor2").value);

    document.querySelector("#product").value = multiply(factor1, factor2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

const divideNumbers = () => {
    let dividend = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);

    document.querySelector("#quotient").value = divide(dividend, divisor);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
function calculateTotal() {
    let subtotal = parseFloat(document.querySelector("#subtotal").value);
    let member = document.querySelector("#member").checked;
    let totalPrice;

    if (member){
        totalPrice = subtotal * 0.8;
    } else {
        totalPrice = subtotal;
    }

    document.querySelector("#total").textContent = `$${totalPrice.toFixed(2)}`;
}

document.querySelector("#getTotal").addEventListener("click", calculateTotal);


/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.querySelector("#array").innerHTML = numbersArray;

/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbersArray.filter(number => (number % 2) === 1);

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(number => (number % 2) === 0);

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((total, number) => total + number);

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
let doubledArray = numbersArray.map(number => number * 2);
document.querySelector("#sumOfMultiplied").innerHTML = doubledArray.reduce((total, number) => total + number);
