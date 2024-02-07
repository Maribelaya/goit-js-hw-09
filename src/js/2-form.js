let form = document.querySelector('form');
let localStorageKey = "feedback-form-state";

let formData = {email: "", message: ""};
let localStorageItem = localStorage.getItem(localStorageKey);

if(localStorageItem){
  formData = JSON.parse(localStorageItem);
  form.email.value = formData.email;
  form.message.value = formData.message;
}

form.addEventListener('input', event => {
  if(event.target.name == "email"){ 
    formData.email = event.target.value.trim();
  }

  if(event.target.name == "message"){ 
    formData.message = event.target.value.trim();
  }

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if(form.email.value && form.message.value)
  {
    form.email.value = "";
    form.message.value = "";
    console.log(formData);

    localStorage.removeItem(localStorageKey);
  }
  else
  {

  }
});





