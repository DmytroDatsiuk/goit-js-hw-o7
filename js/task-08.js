const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password }
      } = event.currentTarget;

      const obj = {
        email: email.value,
        password: password.value,
      }

      if (email.value === "" || password.value === "") {
        return alert("Будь-ласка заповніть всі поля:)");
      }

      console.log(obj);
  event.currentTarget.reset();
}
