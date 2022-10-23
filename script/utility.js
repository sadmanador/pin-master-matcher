// generating pin
const getRandomInt = () => {
    const randomPin = Math.random() * 10000;
    const actualPin = randomPin.toFixed(0);
    return actualPin;
}

const formattingPin = () => {
    const pin = getRandomInt()
    const pinDisplay = document.getElementById('display-pin');

    if (pin.length < 4) {
        return getRandomInt()
    }
    else {
        pinDisplay.value = pin;
        return pin;
    }
}


//getting pin input field
document.getElementById('calculator').addEventListener('click', (event) => {
    const display = document.getElementById('calculator-display');
    const digits = event.target.innerText;
    const previousTypeDigit = display.value;

    if (isNaN(digits)) {
        if (digits === 'C') {
            display.value = '';
        }
        else if (digits === '<') {
            const digit = previousTypeDigit.split('');
            digit.pop();
            const remainingDigit = digit.join('');
            display.value = remainingDigit;
        }
    }
    else {
        const newTypeDigit = previousTypeDigit + digits;
        display.value = newTypeDigit;
    }
})

document.getElementById('submit').addEventListener('click', () => {
    const pinDisplay = document.getElementById('display-pin');
    const currentPin = pinDisplay.value;


    const calculatorDisplay = document.getElementById('calculator-display');
    const typedPin = calculatorDisplay.value;
    
    const success = document.getElementById('success');
    const failure =  document.getElementById('failure');

    if(currentPin === typedPin){
        success.style.display = 'block';
        failure.style.display = 'none';
    }
    else{
        success.style.display = 'none';
        failure.style.display = 'block';
    }
})