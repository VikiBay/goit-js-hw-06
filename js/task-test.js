const newTechnologies = ["React", "TypeScript", "Node.js"];
const list = document.querySelector('.list');
const markup = newTechnologies.map(technology => `<li class = "list-item"> ${technology}</li>`).join('');
console.log(markup);
list.insertAdjacentHTML("beforeend", markup);
list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>")



const refs ={
    list: document.querySelector('.js-list'),
  staticItem: document.querySelectorAll('.js-item'),
  dinamicItem: document.getElementsByClassName('js-item'),
  eventBtn: document.querySelector('.js-qwe'),
  clearLogBtn: document.querySelector('button[data-action="clear"]'),
  logList: document.querySelector('.log-list'),
}


const arr = [];
for (let i=1; i<=3; i+=1){
const item = document.createElement('li');
// item.textContent = refs.list.lastElementChild
item.classList.add('js-item');
arr.push(item);
}

refs.list.append(...arr);

const onEventClick = (qwe) => {
    console.log('qwe:', qwe);
    console.log("qwe type:", qwe.type);
    console.log("qwe target", qwe.currentTarget);
    console.log("qwe target", qwe.target);
}
refs.eventBtn.addEventListener("click", onEventClick)
console.log(refs.list);
let keypressCounter = 1;
document.addEventListener('keydown', logMessage);
document.addEventListener('keyup', logMessage);
refs.clearLogBtn.addEventListener('click', reset);

function logMessage ({type,key,code}) {
    const markup = `<div class = 'log-item'><span class="chip">${keypressCounter}</span>
    <ul>
      <li><b>Event</b>:${type}</li>
      <li><b>Key</b>:${key}</li>
      <li><b>Code</b>:${code}</li>
    </ul></div>`
    refs.logList.insertAdjacentHTML("afterbegin", markup);
    if(type === "keyup"){
incrementKeypressCounter();
    }
}

function reset(){
    keypressCounter=1;
    refs.logList.innerHTML ='';
}
function incrementKeypressCounter(){
    keypressCounter+=1;
}




// console.log(refs.dinamicItem);
