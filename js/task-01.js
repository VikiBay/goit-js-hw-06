// const categories_child = document.querySelector("#categories").children;
const categories = document.querySelectorAll(".item")
// console.log(categories)
console.log(`Number of categories: ${categories.length}`);
categories.forEach(category => {
    console.log(`\nCategory: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
});