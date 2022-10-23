const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
}


function onNameInput(event){
    refs.nameOutput.textContent = event.currentTarget.value;
    
    // refs.nameOutput.textContent = refs.nameInput.value;
if (!event.currentTarget.value){
    refs.nameOutput.textContent = "Anonymous";
}
}
refs.nameInput.addEventListener("input", onNameInput)