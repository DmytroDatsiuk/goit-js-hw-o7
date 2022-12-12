function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('[type="number"]');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxHere = document.querySelector('#boxes');

const quantity = {
    value: 0,
    getNumberValue() {
        this.value = Number(this.value);
        return this.value;
    },
};

input.addEventListener('input', event => {
    quantity.value = event.currentTarget.value;
});

createButton.addEventListener('click', () => {
    createBox(quantity.getNumberValue());
});

destroyButton.addEventListener('click', () => {
    const boxAll = document.querySelectorAll('.box');

    for (let i = 0; i < boxAll.length; i++) {
        const box = document.querySelector('.box');
        box.remove();
    }
});

function createBox(amount) {
    const elements = [];
    for (let i = 0; i < amount; i += 1) {
        let pixelStep = 10;
        let pixel = 30 + pixelStep * i;

        const boxEl = document.createElement('div');
        boxEl.style.backgroundColor = getRandomHexColor();
        boxEl.style.width = `${pixel}px`;
        boxEl.style.height = `${pixel}px`;
        boxEl.classList.add('box');

        elements.push(boxEl);
    }
    return boxHere.append(...elements);
}
