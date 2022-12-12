const input = document.querySelector('#font-size-control');
const textFont = document.querySelector('#text');

textFont.style.fontSize = `${input.value}px`;

input.addEventListener('input', () => {
    textFont.style.fontSize = `${input.value}px`;
});
