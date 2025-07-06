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

buttonCopies[0].addEventListener('click', () => {

})

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
// declare equal button

clearButton.addEventListener('click', () => {
    display.textContent = ' ';
    clickCount = 0;
});

let equalButton = document.querySelector(".btn-15");
let a;
let operator;
let b;
let answer;

// Run Calc Function
function operate() {
    for (let i = 0; i < buttonCopies.length; i++) {
        buttonCopies[i].addEventListener('click', () => {
            a = buttonCopies[i].textContent;
            if (!['+', '-', '/', 'x'].includes(operator)) {
                a += buttonCopies[i].textContent;
                display.textContent = a;
                console.log("a: " + a);
            }

            operator = buttonCopies[i].textContent;
            if (['+', '-', '/', 'x'].includes(operator)) {
                    display.textContent = "INVALID OPERATOR";
                    return;
            }

            console.log("operator: " + operator);

            if (clickCount == 3) {
                b = buttonCopies[i].textContent;
                display.textContent = b;
                console.log("b: " + b);
            }
        });
    }

    // when Equals is clicked, run corresponding function
    equalButton.addEventListener('click', () => {
        if (operator == "+") {
            answer = add(a, b);
        }
        if (operator == "-") {
            answer = subtract(a, b);
        }
        if (operator == "/") {
            answer = divide(a, b);
        }
        if (operator == "x") {
            answer = multiply(a, b);
        }
        console.log("answer: " + answer);
        display.textContent = answer;
})
}
operate();