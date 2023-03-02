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

const rdoTechs=document.getElementsByName('tech');
const prdo = document.getElementById('radio-target');

for(const rdo of rdoTechs) {
    rdo.onchange = evt => {
        // console.log(evt);
        // console.log(evt.target);
        // console.log(evt.target.value);
        prdo.innerText=`Your favourite tech is ${evt.target.value}`
    }
}

const vehicleMakesSelect = document.getElementById('vehicleMakes');
const selectedMake = document.getElementById('selection');

vehicleMakesSelect.addEventListener('change', vehicleMakeChange);

const vehicleMakeChange = (evt) => {
    const index = ect.target.selectedIndex;
    console.log(index);
    const opttionSelecct = evt.target.selectedOptions[0];
    console.log(opttionSelecct);

    if (index > 0) {
        selectedMake.innerText = `You select Make: ${optionSelected.text} Id: ${optionSelected.value}`;
    } else {
        selectedMake.innerText = 'Please make a selection';
    }
}

//vehicleMakesSelect.addEventListener('change', vehicleMakeChange);
vehicleMakesSelect.onchange = vehicleMakeChange;

function clickMe() {
    console.log(new Date());
}