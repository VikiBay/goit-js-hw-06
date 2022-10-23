const refs = {
    form: document.querySelector('.login-form'),

}
// document.addEventListener('keydown', onFormSubmit)

refs.form.addEventListener("submit", onFormSubmit)
function onFormSubmit(evt){
    evt.preventDefault()
    const {email,password} = evt.currentTarget.elements;
    if (!email.value.length || !password.value.length){
     alert('Enter anything');
    } else {
    const dataObj ={
        email: email.value,
        password:password.value
    }
    console.log(dataObj)
    evt.currentTarget.reset()
}

}