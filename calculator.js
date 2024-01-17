var currentDisplay = "";
var whichNumber=1;
var firstNum;
var secNum;
var answer;
let equation;

// button functionality
function updateDisplay(value) {
    currentDisplay += value;
    document.getElementById('display').value = currentDisplay;
}

// clears everything
function clearAll() {
    currentDisplay = "";
    document.getElementById('display').value = currentDisplay;
}

// clears the last number
function backspace() {
    currentDisplay = currentDisplay.slice(0, -1);
    document.getElementById('display').value = currentDisplay;
}

// calculates the total sum
function calculate(){
    if (currentDisplay.includes("+")){
        let numbers = currentDisplay.split("+");
        firstNum = numbers[0];
        secNum = numbers[1];
        answer = Number(firstNum) + Number(secNum);
        document.getElementById('display').value = answer;
    } else if (currentDisplay.includes("-")){
        let numbers = currentDisplay.split("-");
        firstNum = numbers[0];
        secNum = numbers[1];
        answer = Number(firstNum) - Number(secNum);
        document.getElementById('display').value = answer;
    } else if (currentDisplay.includes("x")){
        let numbers = currentDisplay.split("x");
        firstNum = numbers[0];
        secNum = numbers[1];
        answer = Number(firstNum) * Number(secNum);
        document.getElementById('display').value = answer;
    } else if (currentDisplay.includes("/")){
        let numbers = currentDisplay.split("/");
        firstNum = numbers[0];
        secNum = numbers[1];
        answer = Number(firstNum) / Number(secNum);
        document.getElementById('display').value = answer;
    } 
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calculate();
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key === '1') {
        updateDisplay('1');
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key === '2') {
        updateDisplay('2');
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key === '3') {
        updateDisplay('3');
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key === '4') {
        updateDisplay('4');
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key === '5') {
        updateDisplay('5');
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key === '6') {
        updateDisplay('6');
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key === '7') {
        updateDisplay('7');
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key === '8') {
        updateDisplay('8');
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key === '9') {
        updateDisplay('9');
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key === '0') {
        updateDisplay('0');
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'shift' && event.key === '8' ) {
        updateDisplay('x');
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key === '/') {
        updateDisplay('/');
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'Backspace') {
        backspace();
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        clearAll();
    }  
    if (event.key === 'shift' && event.key === '=') {
        updateDisplay('+');
    } 
    if (event.key === '-') {
        updateDisplay('-');
    } 
    if (event.key ==='x'){
        updateDisplay('x');
    }
});

