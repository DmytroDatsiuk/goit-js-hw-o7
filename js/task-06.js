const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
    const length = input.value.length;
    const num = Number(input.getAttribute('data-length'));

    if (length === num) {
       return input.classList.add('valid');
    }
        input.classList.add('invalid');

});
