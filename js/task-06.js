const refs ={
    validationInput: document.querySelector('#validation-input'),
}

refs.validationInput.addEventListener('change', onValidationInputBlur)
function onValidationInputBlur (evt){
    let myTarget = evt.currentTarget;
    if (myTarget.dataset.length != myTarget.value.length){

myTarget.classList.add('invalid');

    } else {
        myTarget.classList.remove('invalid');
        myTarget.classList.add('valid');
    }
    
}