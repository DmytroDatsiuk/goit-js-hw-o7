const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', event => {
    const query = event.currentTarget.value;

    if (!query) {
        return (output.textContent = 'Anonymous');
    }
    
    output.textContent = query;
});
