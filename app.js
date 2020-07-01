const plusBtn = document.querySelector('.plus-btn');
const minBtn = document.querySelector('.min-btn');
const personInput = document.querySelector('.person-input');


plusBtn.addEventListener('click', function () {
    personInput.value = parseInt(personInput.value) + 1;
})
minBtn.addEventListener('click', function () {
    if (personInput.value > 0) {
        personInput.value = parseInt(personInput.value) - 1;
    }
})