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
    copy.className = i;
    buttonCopies.push(copy);
    buttonsSection.appendChild(copy);
}

buttonCopies[0].textContent = "7";
buttonCopies[1].textContent = "8";
buttonCopies[2].textContent = "9";
buttonCopies[3].textContent = "X";
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
buttonCopies[14].textContent = "+/-";
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

clearButton.addEventListener('click', () => {
    display.textContent = ' ';
});

// Operator Calc Function
let clickCount = 0;
function operate(a, operator, b) {
    for (let i = 0; i < buttonCopies.length; i++) {
        buttonCopies[i].addEventListener('click', () => {
            clickCount++;
            if (clickCount == 1) {
                a = buttonCopies[i].textContent;
                console.log("a: " + a);
                
            }

            if (clickCount == 2) {
                operator = buttonCopies[i].textContent;
                if (!['+', '-', '/', '*'].includes(operator)) {
                        display.textContent = "INVALID OPERATOR";
                        clickCount--;
                        return;
                    }
                console.log("operator: " + operator);
            }

            if (clickCount == 3) {
                b = buttonCopies[i].textContent;
                console.log("b: " + b);
            }
        });
    }
}
operate();