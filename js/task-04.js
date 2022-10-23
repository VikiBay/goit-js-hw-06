const refs ={
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  counterValue: document.querySelector('#value'),
}

const onDecrementClick = () =>{
console.log('Decrement was Clicked');
refs.counterValue.textContent-=1}

const onIncrementClick = () =>{
console.log('on increment clicked')
refs.counterValue.textContent = Number(refs.counterValue.textContent)+1}

refs.decrementBtn.addEventListener('click', onDecrementClick);
refs.incrementBtn.addEventListener('click', onIncrementClick);


