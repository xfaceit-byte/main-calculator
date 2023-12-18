const display = document.getElementById("display");
function arata(input) {
    display.value += input;
}

function sterge() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
    }
}