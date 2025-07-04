// Create buttons
let buttons = document.querySelector(".buttons");

let button = document.createElement("button")

button.className = "button";
button.style.borderRadius = "2px"
button.style.width = "80px"
button.style.height = "60px"
button.style.border = "8px solid gray"

for (let i = 0; i < 16; i++) {
    let copy = button.cloneNode(true);
    buttons.append(copy);
}