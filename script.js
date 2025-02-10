let previewBox = document.querySelector(".preview-box");
let x = document.querySelector(".offsetx");
let y = document.querySelector(".offsety");
let radius = document.querySelector(".blurradius");
let spread = document.querySelector(".blurspread");
let color = document.querySelector(".color");
let cssValue = document.querySelector(".cssvalue");
let copyBtn = document.querySelector(".copy-btn");
let resetBtn = document.querySelector(".reset-btn");
let randomBtn = document.querySelector(".random-btn");

function updateBoxShadow() {
    const shadowValue = `${x.value}px ${y.value}px ${radius.value}px ${spread.value}px ${color.value}`;
    previewBox.style.boxShadow = shadowValue;
    cssValue.value = `box-shadow: ${shadowValue};`;
}

function resetValues() {
    x.value = 0;
    y.value = 0;
    radius.value = 10;
    spread.value = 5;
    color.value = "#000000";
    updateBoxShadow();
}

function generateRandomShadow() {
    x.value = Math.floor(Math.random() * 50 - 25);
    y.value = Math.floor(Math.random() * 50 - 25);
    radius.value = Math.floor(Math.random() * 50);
    spread.value = Math.floor(Math.random() * 30 - 15);
    color.value = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    updateBoxShadow();
}

let inputs = [x, y, radius, spread, color];
inputs.forEach(input => input.addEventListener("input", updateBoxShadow));

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(cssValue.value);
    copyBtn.textContent = "Copied!";
    setTimeout(() => copyBtn.textContent = "Copy CSS", 1500);
});

resetBtn.addEventListener("click", resetValues);
randomBtn.addEventListener("click", generateRandomShadow);

updateBoxShadow();
    