const refs = {
  divControls: document.querySelector('#controls'),
  divBoxes: document.querySelector('#boxes'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
}

let numberInp = refs.divControls.firstElementChild;

refs.createBtn.addEventListener('click', createBoxes)
refs.destroyBtn.addEventListener('click', destroyBoxes)


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let divHeight = 30;
let divWidth = 30;


function createBoxes(amount){
  amount = numberInp.value;

  if(!amount){
numberInp.style.borderColor = '#f44336';
    alert('Enter anything')

  } else
  numberInp.style.borderColor = ''
const divS = [];     
for (let i=1; i<=amount; i+=1){
  let div = document.createElement('div');
    div.style.height = `${divHeight}px`;
    div.style.width = `${divWidth}px`;
    div.style.background = getRandomHexColor();
    divHeight+=10;
    divWidth+=10;
    divS.push(div)
  }
  refs.divBoxes.append(...divS)
  return divS;
}


function destroyBoxes(){
refs.divBoxes.innerHTML=''
numberInp.value='';
}