function getGenerate() {
    const pin = getPin();

    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    } else {
        return getGenerate();
    }
}

function getPin() {
    const pin = Math.round(Math.random() * 10000);
    return pin;
}

document.getElementById('pin-generate').addEventListener('click', function () {
    const pin = getGenerate()
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
})


document.getElementById('calculator').addEventListener('click', function (event) {
    const digits = event.target.innerText;

    const calculatorDisplay = document.getElementById('calculator-display');
    const previousDisplayedDigits = calculatorDisplay.value;

    if (isNaN(digits)) {
        if (digits === 'C') {
            calculatorDisplay.value = '';
        }
        else if (digits === '<') {
            const typedDigits = previousDisplayedDigits.split('');
            typedDigits.pop();
            const remainingDigits = typedDigits.join('');
            calculatorDisplay.value = remainingDigits;
        }
    }

    else {
        const newDisplayedDigits = previousDisplayedDigits + digits;
        calculatorDisplay.value = newDisplayedDigits;
    }
});


document.getElementById('submit').addEventListener('click', function () {
    const displayPin = document.getElementById('display-pin');
    const currentPin = displayPin.value;

    const calculatorDisplay = document.getElementById('calculator-display');
    const currentDisplayedTyped = calculatorDisplay.value;

    const successMessage = document.getElementById('success');
    const failureMessage = document.getElementById('failure');


    if(currentPin === currentDisplayedTyped){
        successMessage.style.display = 'block';
        failureMessage.style.display = 'none';
    }
    else{
        failureMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
});
