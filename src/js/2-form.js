
let form = document.querySelector('form');
//Ключ до сховища
let localStorageKey = "feedback-form-state";
//Об"єкт, що містить дані форми
let formData = {email: "", message: ""};

//Отримання даних зі сховища за ключем (при запускі)
let localStorageItem = localStorage.getItem(localStorageKey);

//Якщо дані зі сховища отримано (тобто вони були збережені у сховищі раніше)
if(localStorageItem){
  //Формування об"єкту, за даними сховища
  formData = JSON.parse(localStorageItem);
  //Заповнення елементів форми
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

//Подія - введення даних
form.addEventListener('input', event => {
  //Делегуванням подій визначаємо у якому саме елементі форми відбулась подія (що вводили, адресу чи текст)
  
  if(event.target.name == "email"){ //Вводили адресу 
    formData.email = event.target.value.trim(); //Метод trim(), щоб прибрати зайві пробіли в значеннях
  }

  if(event.target.name == "message"){ //Вводили текст
    formData.message = event.target.value.trim(); //Метод trim, щоб прибрати зайві пробіли в значеннях
  }

  //Збереження даних у сховище
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

//Подія - відправка форми
form.addEventListener('submit', event => {
  //Відміна стандартної події
  event.preventDefault();

  //Перевірка, чи заповнені поля форми
  if(form.elements.email.value &&  form.elements.message.value)
  {
    //Очищення полів на формі
    form.elements.email.value = "";
    form.elements.message.value = "";
    
    //Запис у консоль об"єкту, що містить дані форми
    console.log(formData);

    //Очищення сховища
    localStorage.removeItem(localStorageKey);
  }
  else
  {
    //Не заповнені усі поля форми
    alert('Будь ласка, заповніть всі поля.');
  }
});





