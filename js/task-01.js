const numCategories = document.querySelectorAll('#categories .item');

const category1 = numCategories[0].firstElementChild.textContent;
const category2 = numCategories[1].firstElementChild.textContent;
const category3 = numCategories[2].firstElementChild.textContent;

const numElements1 = numCategories[0].lastElementChild.children.length;
const numElements2 = numCategories[1].lastElementChild.children.length;
const numElements3 = numCategories[2].lastElementChild.children.length;


console.log(`Number of categories: ${numCategories.length}`);
console.log('');

console.log(`Category: ${category1}`);
console.log(`Elements: ${numElements1}`);
console.log('');

console.log(`Category: ${category2}`);
console.log(`Elements: ${numElements2}`);
console.log('');

console.log(`Category: ${category3}`);
console.log(`Elements: ${numElements3}`);