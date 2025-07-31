// create buttons
let buttonsSection = document.querySelector(".buttons");
let button = document.createElement("button");
let display = document.querySelector(".display");
let clearButton = document.querySelector(".clear");

// button style
button.className = "button";
button.style.borderRadius = "2px";
button.style.width = "80px";
button.style.height = "60px";
button.style.border = "8px solid gray";

// accessor for buttons
const buttonCopies = [];
for (let i = 0; i < 16; i++) {
    let copy = button.cloneNode(true);
    copy.className = "btn-" + i;
    buttonCopies.push(copy);
    buttonsSection.appendChild(copy);
}

// create equal button after it is added to the dom, hence why it is apart from the others
let equalButton = document.querySelector(".btn-15");

// set button's display
buttonCopies[0].textContent = "7";
buttonCopies[1].textContent = "8";
buttonCopies[2].textContent = "9";
buttonCopies[3].textContent = "x";
buttonCopies[4].textContent = "4";
buttonCopies[5].textContent = "5";
buttonCopies[6].textContent = "6";
buttonCopies[7].textContent = "-";
buttonCopies[8].textContent = "1";
buttonCopies[9].textContent = "2";
buttonCopies[10].textContent = "3";
buttonCopies[11].textContent = "+";
buttonCopies[12].textContent = "0";
buttonCopies[13].textContent = ".";
buttonCopies[14].textContent = "/";
buttonCopies[15].textContent = "=";

// MATH FUNCTIONS
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Display text function
function changeDisplayText(setText) {
    return display.textContent = setText;
}

// CLEAR BUTTON
clearButton.addEventListener('click', () => {
    changeDisplayText(' ');
    calculatorState.stringNum1 = [];
    calculatorState.stringNum2 = [];
    calculatorState.operator = undefined;
    calculatorState.waitingForSecondOperand = true;
});

let calculatorState = {
    stringNum1: [],
    operator: undefined,
    stringNum2: [],
    num1: '',
    num2: '',
    answer: '',
    waitingForSecondOperand: true
}

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operators = ['+', '-', '/', 'x'];

    for (let i = 0; i < buttonCopies.length; i++) {
        buttonCopies[i].addEventListener('click', () => {
            if (numbers.includes(buttonCopies[i].textContent)
                && typeof calculatorState.operator == "undefined" && calculatorState.waitingForSecondOperand) {
                calculatorState.stringNum1.push(buttonCopies[i].textContent);
                calculatorState.num1 = calculatorState.stringNum1.join("");
                display.textContent = calculatorState.num1;
                console.log("a: " + calculatorState.stringNum1);
                // implement logic for chaining operators
            } else if (!calculatorState.waitingForSecondOperand) {
                        calculatorState.stringNum1 = calculatorState.answer.toString().split('');
                        calculatorState.num1 = calculatorState.answer.toString();
                        calculatorState.stringNum2 = [];
                        calculatorState.num2 = '';
                        calculatorState.waitingForSecondOperand = true;
            }

            if (operators.includes(buttonCopies[i].textContent)) {
                if (calculatorState.num1 && calculatorState.operator && calculatorState.num2) {
                    calculateAnswer();
                    calculatorState.stringNum1 = calculatorState.answer.toString().split('');
                    calculatorState.num1 = calculatorState.answer.toString();
                    calculatorState.stringNum2 = [];
                    calculatorState.num2 = '';
                }
                calculatorState.operator = buttonCopies[i].textContent;
                console.log("operator: " + calculatorState.operator);
            }

            // Prevents numbers from acting weird after 1st time through
            if (numbers.includes(buttonCopies[i].textContent)
                 && !calculatorState.waitingForSecondOperand) {
                calculatorState.stringNum2 = [];
                calculatorState.waitingForSecondOperand = true;
            }
            
            if (numbers.includes(buttonCopies[i].textContent)
                 && calculatorState.operator && calculatorState.waitingForSecondOperand) {
                calculatorState.stringNum2.push(buttonCopies[i].textContent);
                calculatorState.num2 = calculatorState.stringNum2.join("");
                display.textContent = calculatorState.num2;
                console.log("b: " + calculatorState.stringNum2);
            }
            

            
        });
    }

    // add back to back operator uses

    function calculateAnswer() {
        if (!calculatorState.num1 && !calculatorState.num2 && !calculatorState.answer) {return;}

        if (calculatorState.operator == "+") {
            calculatorState.answer = add(parseInt(calculatorState.num1), parseInt(calculatorState.num2));
        }
        if (calculatorState.operator == "-") {
            calculatorState.answer = subtract(parseInt(calculatorState.num1), parseInt(calculatorState.num2));
        }   
        if (calculatorState.operator == "/") {
            if (calculatorState.num2 == 0) {
                calculatorState.answer = "Cannot divide by 0 >;{\n Press clear to continue";
            } else {
                calculatorState.answer = divide(calculatorState.num1, calculatorState.num2);
            }
        }
        if (calculatorState.operator == "x") {
            calculatorState.answer = multiply(calculatorState.num1, calculatorState.num2);
        }
        console.log("answer: " + calculatorState.answer);
        changeDisplayText(calculatorState.answer);
        calculatorState.operator = undefined;
        // Bool variable to make sure num 1 becomes answer
        calculatorState.waitingForSecondOperand = false;
        return calculatorState.answer;
    }

    // when Equals is clicked, run corresponding function
    equalButton.addEventListener('click', () => {
        calculateAnswer();
});