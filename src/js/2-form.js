const form = document.querySelector('feedback-form');

form.addEventListener('submit', event => {
    event.preventDefault();
    const email = event.target.elements.email.value.trim();
    const password = event.target.elements.password.value.trim();

    if (email && password) {
        const obj = {email, password};
        console.log(obj);
        form.reset();
    } else {
        alert('All form fields must be filled in');
    }
});
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', () => {
  const value = input.value.trim();

  output.textContent = value || 'Anonymous';
});



// const form = document.querySelector('.feedback-form');
// const localStorageKey = 'feedback-form-state';

// const storedForm = JSON.parse(localStorage.getItem(localStorageKey));

// if (storedForm) {
//   form.elements.email.value = storedForm.email || '';
//   form.elements.message.value = storedForm.message || '';
// }

// form.addEventListener('input', () => {
//   const formState = {
//     email: form.elements.email.value.trim(),
//     message: form.elements.message.value.trim(),
//   };
//   localStorage.setItem(localStorageKey, JSON.stringify(formState));
// });

// form.addEventListener('submit', eve => {
//   eve.preventDefault();
//   if (form.elements.email.value === '' || form.elements.message.value === '') {
//     console.log('Please fill in both email and message fields');
//     return;
//   }
//   console.log(
//     'Data submitted:',
//     JSON.parse(localStorage.getItem(localStorageKey))
//   );
//   form.reset();
//   localStorage.removeItem(localStorageKey);
// });