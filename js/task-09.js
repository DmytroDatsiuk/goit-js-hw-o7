function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const buttonChenge = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');

buttonChenge.addEventListener('click', handleClick);

function handleClick(event) {
    const value = `${getRandomHexColor()}`;
    body.style.backgroundColor = value;
    colorValue.textContent = value;
}
