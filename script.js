const submit = document.querySelector('.submit');
const successContainer = document.querySelector('.success-container');
const cardContainer = document.querySelector('.container');
const spanValue = document.getElementById('success-span');

const buttonOne = document.getElementById('buttonOne');
const buttonTwo = document.getElementById('buttonTwo');
const buttonThree = document.getElementById('buttonThree');
const buttonFour = document.getElementById('buttonFour');
const buttonFive = document.getElementById('buttonFive');

let returnValue = 0;
buttonOne.addEventListener('click', () => {
    returnValue = buttonOne.value;
})

buttonTwo.addEventListener('click', () => {
    returnValue = buttonTwo.value;
})

buttonThree.addEventListener('click', () => {
    returnValue = buttonThree.value;
})

buttonFour.addEventListener('click', () => {
    returnValue = buttonFour.value;
})

buttonFive.addEventListener('click', () => {
    returnValue = buttonFive.value;
})

submit.addEventListener('click', () => {
    successContainer.style.display = 'flex';
    cardContainer.style.display = 'none';
    spanValue.innerText = returnValue;
})