const inputNumber = document.querySelector('.input-number');
const inputChangeNum = document.querySelector('.input-changeNum');
const inputChars= document.querySelector('.input-charsSpecial');
const btnRandom = document.querySelector('.btn-random');
const error = document.querySelector('.box-btn span');
const info = document.querySelector('.copy-info');
const textField = document.querySelector('.donePass');
const btnCopy = document.querySelector('.btn-copy');

const oneReg = 'abcdefghijklmnoprstuwyzABCDEFGHIJKLMNOPRSTUWYZ';
const twoReg = '0123456789';
const threeReg = '!@#$%&';

let wynik = '';
let result = [];  

const errorApp = () => {
    error.textContent = 'System wygenerował błędne hasło, spróbuj jeszcze raz.';
}

const randomPassword = () => {
    if((inputNumber !== 0) && !(inputChangeNum.checked) && !(inputChars.checked)) {
        oneStep();
    }else if((inputNumber !== 0) && (inputChangeNum.checked) && !(inputChars.checked)){
        twoStep();
    }else if((inputNumber !== 0) && !(inputChangeNum.checked) && (inputChars.checked)){
        onethreeStep(); 
    }else{
        threeStep();
    }
}

const randomChange = () => {
    if(inputNumber.value >= 8){
        error.textContent = '';
        randomPassword();
    }else {
        error.textContent = 'Hasło musi mieć przynajmniej 8 znaków!';
        textField.value = '';
        info.textContent = '';
    }
}

const oneStep = () => {
    let lenghtInput = inputNumber.value - 1;
    result.length = 0;

    for (let i=0; i<=lenghtInput; i++) {
        wynik = oneReg.charAt(Math.floor(Math.random() * oneReg.length));
        result.push(wynik);
        textField.value = result.join('');
    }
}

const twoStep = () => {
    let lenghtInput = inputNumber.value - 1;
    result.length = 0;

    for (let i=0; i<=lenghtInput; i++) {
        wynik = (oneReg + twoReg).charAt(Math.floor(Math.random() * ((oneReg + twoReg).length)));
        result.push(wynik);

        if(!(result.includes('0') || result.includes('1') || result.includes('2') || result.includes('3') || result.includes('4') || result.includes('5') || result.includes('6') || result.includes('7') || result.includes('8') || result.includes('9'))){
            errorApp();
            textField.value = '';
        }else{
            error.textContent = '';
            textField.value = result.join('');
        }
    }
}

const threeStep = () => {
    let lenghtInput = inputNumber.value - 1;
    result.length = 0;

    for (let i=0; i<=lenghtInput; i++) {
        wynik = (oneReg + twoReg + threeReg).charAt(Math.floor(Math.random() * (oneReg + twoReg + threeReg).length));
        result.push(wynik);

        if(!(result.includes('0') || result.includes('1') || result.includes('2') || result.includes('3') || result.includes('4') || result.includes('5') || result.includes('6') || result.includes('7') || result.includes('8') || result.includes('9')) || (!(result.includes('!') || (result.includes('@') || (result.includes('#') || (result.includes('$') || (result.includes('%') || (result.includes('&'))))))))){
            errorApp();
            textField.value = '';
        }else{
            error.textContent = '';
            textField.value = result.join('');
        }
    }
}

const onethreeStep = () => {
    let lenghtInput = inputNumber.value - 1;
    result.length = 0;

    for (let i=0; i<=lenghtInput; i++) {
        wynik = (oneReg + threeReg).charAt(Math.floor(Math.random() * (oneReg + threeReg).length));
        result.push(wynik);

        if(!(result.includes('!') || (result.includes('@') || (result.includes('#') || (result.includes('$') || (result.includes('%') || (result.includes('&')))))))){
            errorApp();
            textField.value = '';
        }else{
            error.textContent = '';
            textField.value = result.join('');
        }
    }
}

const copyText = () => {
    if(textField.value !== ''){
        textField.select();
        document.execCommand('copy');
    }else{
        info.textContent = 'Pole hasło jest puste. Najpierw musisz wygenerować hasło.'
        error.textContent = '';
    }
}

btnRandom.addEventListener('click', randomChange);
btnCopy.addEventListener('click', copyText);