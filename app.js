let secretNumber = 0;
let attempts = 0;
let drawnNumbers = [];
let maxNumber = 10;

function assignText(element, text) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
    return;
}

function attemptCheck() {
    let userNumber = parseInt(document.getElementById('userValue').value);
    console.log('Secret number ' + secretNumber);

    console.log('Attempt ' + attempts);

    if (userNumber === secretNumber) {
        assignText('p', `You guessed the number in ${attempts} ${attempts === 1 ? 'attempt' : 'attempts'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // User didn't guess
        if (userNumber > secretNumber) {
            assignText('p', 'The secret number is lower');
        } else {
            assignText('p', 'The secret number is higher');
        }
        attempts++;
        cleanInput();
    }
    return;
}

function cleanInput() {
    document.querySelector('#userValue').value = '';
}

function generateSecretNumber() {
    let generatedNumber = Math.floor(Math.random()*maxNumber)+1;

    console.log(generatedNumber);
    console.log(drawnNumbers);

    if (drawnNumbers.length == maxNumber) {
        assignText('p', 'The maximum number possible is already reached')
    } else {
        if (drawnNumbers.includes(generatedNumber)) {
            return generateSecretNumber();
        } else {
            drawnNumbers.push(generatedNumber);
            return generatedNumber;
        }
    }


}

function initialConditions() {
    assignText('h1', 'Secret Number!');
    assignText('p', `Choose a number between 1 and ${maxNumber}`);
    secretNumber = generateSecretNumber();
    attempts = 1;
}

function restartGame() {
    cleanInput();
    initialConditions();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

initialConditions();