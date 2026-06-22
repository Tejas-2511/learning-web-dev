const display = document.querySelector("#display");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let shouldResetScreen = false;

// =====================
// Math Functions
// =====================

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){

    if(b === 0){
        return "Nice try 😏";
    }

    return a / b;
}

function operate(op,a,b){

    a = Number(a);
    b = Number(b);

    switch(op){

        case "+":
            return add(a,b);

        case "-":
            return subtract(a,b);

        case "*":
            return multiply(a,b);

        case "/":
            return divide(a,b);

    }
}

// =====================
// Display Functions
// =====================

function clearCalculator(){

    firstNumber = "";
    secondNumber = "";
    operator = "";

    shouldResetScreen = false;

    display.textContent = "0";
}

function appendNumber(number){

    if(
        display.textContent === "0" ||
        shouldResetScreen
    ){

        display.textContent = "";

        shouldResetScreen = false;
    }

    display.textContent += number;
}

function addDecimal(){

    if(shouldResetScreen){

        display.textContent = "0";

        shouldResetScreen = false;
    }

    if(display.textContent.includes(".")){
        return;
    }

    display.textContent += ".";
}

function deleteLast(){

    if(display.textContent.length === 1){

        display.textContent = "0";

        return;
    }

    display.textContent =
        display.textContent.slice(0,-1);
}

// =====================
// Calculator Logic
// =====================

function setOperator(op){

    if(
        operator !== "" &&
        !shouldResetScreen
    ){

        evaluate();
    }

    firstNumber = display.textContent;

    operator = op;

    shouldResetScreen = true;
}

function evaluate(){

    if(operator === ""){
        return;
    }

    if(shouldResetScreen){
        return;
    }

    secondNumber = display.textContent;

    let result = operate(
        operator,
        firstNumber,
        secondNumber
    );

    if(typeof result === "number"){

        result =
            Number(result.toFixed(8));
    }

    display.textContent = result;

    firstNumber = result;

    operator = "";

    shouldResetScreen = true;
}

// =====================
// Button Events
// =====================

document
.querySelectorAll(".digit")
.forEach(button => {

    button.addEventListener("click", () => {

        appendNumber(
            button.textContent
        );

    });

});

document
.querySelectorAll(".operator")
.forEach(button => {

    button.addEventListener("click", () => {

        setOperator(
            button.textContent
        );

    });

});

document
.querySelector("#equals")
.addEventListener("click", evaluate);

document
.querySelector("#clear")
.addEventListener("click", clearCalculator);

document
.querySelector("#decimal")
.addEventListener("click", addDecimal);

document
.querySelector("#backspace")
.addEventListener("click", deleteLast);

// =====================
// Keyboard Support
// =====================

document.addEventListener("keydown",(e)=>{

    if(e.key >= "0" && e.key <= "9"){
        appendNumber(e.key);
    }

    if(e.key === "."){
        addDecimal();
    }

    if(
        e.key === "+" ||
        e.key === "-" ||
        e.key === "*" ||
        e.key === "/"
    ){
        setOperator(e.key);
    }

    if(
        e.key === "=" ||
        e.key === "Enter"
    ){
        evaluate();
    }

    if(e.key === "Backspace"){
        deleteLast();
    }

    if(e.key === "Escape"){
        clearCalculator();
    }

});