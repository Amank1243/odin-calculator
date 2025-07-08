// Create buttons
let buttonsSection = document.querySelector(".buttons");
let button = document.createElement("button");
let display = document.querySelector(".display");
let clearButton = document.querySelector(".clear");

button.className = "button";
button.style.borderRadius = "2px";
button.style.width = "80px";
button.style.height = "60px";
button.style.border = "8px solid gray";

const buttonCopies = [];
for (let i = 0; i < 16; i++) {
    let copy = button.cloneNode(true);
    copy.className = "btn-" + i;
    buttonCopies.push(copy);
    buttonsSection.appendChild(copy);
}

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

// CLEAR BUTTON
clearButton.addEventListener('click', () => {
    display.textContent = ' ';
    a = []
    b = []
    operator = undefined;
    firstTime = true;
});

let equalButton = document.querySelector(".btn-15");
let a = [] ;
let operator;
let b = [];
let answer;

let num1;
let num2;

// flag variables
let firstTime = true;
// Run Calc Function
function operate() {
    for (let i = 0; i < buttonCopies.length; i++) {
        buttonCopies[i].addEventListener('click', () => {
            if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(buttonCopies[i].textContent)
                 && typeof operator == "undefined" && firstTime) {
                a.push(buttonCopies[i].textContent);
                num1 = a.join("");
                display.textContent = num1;
                console.log("a: " + a);
            } else if (!firstTime) {
                a = answer;
                num1 = answer;
            }

            if (['+', '-', '/', 'x'].includes(buttonCopies[i].textContent)) {
                operator = buttonCopies[i].textContent;
                console.log("operator: " + operator);
            }

            // Prevents numbers from acting weird after 1st time through
            if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(buttonCopies[i].textContent)
                 && !firstTime) {
                b = [];
                firstTime = true;
            }
            
            if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(buttonCopies[i].textContent)
                 && operator && firstTime) {
                b.push(buttonCopies[i].textContent);
                num2 = b.join("");
                display.textContent = num2;
                console.log("b: " + b);
            }
            

            
        });
    }

    // add back to back operator uses

    

    // when Equals is clicked, run corresponding function
    equalButton.addEventListener('click', () => {
        if (operator == "+") {
            answer = add(parseInt(num1), parseInt(num2));
        }
        if (operator == "-") {
            console.log(parseInt(num1));
            console.log(parseInt(num2));
            answer = subtract(parseInt(num1), parseInt(num2));
        }   
        if (operator == "/") {
            if (num2 == 0) {
                answer = "Cannot divide by 0 >;{\n Press clear to continue";
            } else {
                answer = divide(num1, num2);
            }
        }
        if (operator == "x") {
            answer = multiply(num1, num2);
        }
        console.log("answer: " + answer);
        display.textContent = answer;
        
        // Bool variable to make sure num 1 becomes answer
        firstTime = false;
})
}
operate();