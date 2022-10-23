const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const allLi = [];
ingredients.forEach(ingredient =>{
const liItem = document.createElement("li");
liItem.textContent = ingredient;
liItem.classList.add('item');
console.log(liItem);
// allLi.push(`<li class = "item">${ingredient}</li>`);
allLi.push(liItem)
})
// let listStr = allLi.join('');
const list = document.querySelector("#ingredients");
// list.innerHTML = listStr;
list.append(...allLi);
