const refs = {
  changeColor: document.querySelector('.change-color'),
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
refs.changeColor.addEventListener('click', onChangeColor)

function onChangeColor (evt){
  
  document.body.style.background = getRandomHexColor()
  refs.changeColor.previousElementSibling.firstElementChild.textContent = document.body.style.background
}
