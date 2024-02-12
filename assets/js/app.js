const btnEl = document.querySelector(".btn");
const text1El = document.querySelector(".text1");
const text2El = document.querySelector(".text2");
const text3El = document.querySelector(".text3");
const text4El = document.querySelector(".text4");
const inputEl = document.querySelector(".big_input");
const toggle = document.querySelector('#toggleDark');
const body = document.querySelector('body');
const biEl = document.querySelector(".bi");

toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon');
    if (this.classList.toggle('bi-brightness-high')) {
        body.style.background = 'white';
        body.style.background = 'black';
        biEl.style.color = 'aqua'
    }
    else {
        body.style.background = 'black';
        body.style.background = 'white';
        biEl.style.color = 'black';
    }
});


text1El.innerHTML = "N soat";
text2El.innerHTML = "N soat";
text3El.innerHTML = "N soat";
text4El.innerHTML = "N soat";


btnEl.addEventListener ('click', (e) => {
    e.preventDefault();
    text1El.innerHTML = eval(inputEl.value / 10);
    text2El.innerHTML = eval(inputEl.value / 20);
    text3El.innerHTML = eval(inputEl.value / 50);
    text4El.innerHTML = eval(inputEl.value / 100);
});