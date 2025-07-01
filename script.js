let input = document.getElementById("input");
let result = document.getElementById("result");

function append(char) {
    input.value += char;
    liveCalculate();
}

function clearInput() {
    input.value = "";
    result.innerText = "= 0";
}

function backspace() {
    input.value = input.value.slice(0, -1);
    liveCalculate();
}

function calculate() {
    try {
        result.innerText = "= " + eval(input.value);
    } catch {
        result.innerText = "Error!";
    }
}

function liveCalculate() {
    try {
        result.innerText = "= " + eval(input.value);
    } catch {
        result.innerText = "= ?";
    }
}

// Advanced Functions
function square() {
    if (input.value) {
        input.value = `Math.pow(${input.value},2)`;
        calculate();
    }
}

function cube() {
    if (input.value) {
        input.value = `Math.pow(${input.value},3)`;
        calculate();
    }
}

function sqrt() {
    if (input.value) {
        input.value = `Math.sqrt(${input.value})`;
        calculate();
    }
}

function cbrt() {
    if (input.value) {
        input.value = `Math.cbrt(${input.value})`;
        calculate();
    }
}

function power() {
    input.value += "**";
}

// Optional: Enter key
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") calculate();
});
