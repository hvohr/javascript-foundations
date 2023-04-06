function createIngredient(name = 'unknown', price = 0.00) {
    var ingredient = {
        name: name,
        price: price
    }
    return ingredient;
}


function createTaco(name = 'custom', ingredients = []) {
    return { name, ingredients };
}

function addIngredientToTaco(taco, ingredient = {}) {
    taco.ingredients.push(ingredient)
    return taco;
}


function calculatePrice(taco) {
    var sum = 0;
    for (var i = 0; i < taco.ingredients.length; i++) {
        sum += taco.ingredients[i].price
    }
    return sum;
}

module.exports = {
    createIngredient,
    createTaco,
    addIngredientToTaco,
    calculatePrice
}
