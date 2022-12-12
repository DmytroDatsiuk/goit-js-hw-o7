const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

// const elements = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//     const ingredientsItem = document.createElement('li');
//     ingredientsItem.classList.add('item');
//     ingredientsItem.textContent = ingredients[i];

//     elements.push(ingredientsItem);
// }

// ingredientsList.append(...elements);

const makeIngredientsItem = vegetables => {
    return vegetables.map(vegetable => {
        const ingredientsItem = document.createElement('li');
        ingredientsItem.classList.add('item');
        ingredientsItem.textContent = vegetable;

        return ingredientsItem;
    });
};

const elements = makeIngredientsItem(ingredients);
ingredientsList.append(...elements);
