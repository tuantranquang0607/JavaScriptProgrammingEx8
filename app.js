function clickHandler() {
    const inputElement = document.getElementById('firstNameInput');
    const target = document.getElementById('target-p');

    target.innerText = inputElement.value.toUpperCase();
}

const button = document.getElementById('btnClickMe');

button.addEventListener('click', clickHandler);

const checkbox = document.getElementById('chkMyCheckBox');

checkbox.addEventListener('change', showCheckboxState);

function showCheckboxState(evt) {
    console.log(evt.target.checked);
    const span = document.getElementById('checkboxState');
    span.innerText = evt.target.checked
}