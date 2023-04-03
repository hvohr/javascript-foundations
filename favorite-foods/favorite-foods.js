function createFavoriteFood(food) {
    var dish = {
        name: food.dish,
        ingredients: food.ingredients,
        isSpicy: food.isSpicy,
        timesOrdered: 0
    }
    return dish;
}

function commentOnSpiciness(food) {
    if (food.isSpicy === true) {
        return `Wow, this ${food.name} is so spicy!`
    } else {
        return `Phew, this ${food.name} is not very spicy.`
    }
}

function orderFood(dish) {
   dish.timesOrdered++
   return dish;
 }

 function createShoppingList(list) {
    var shoppingList = [].concat(list[0].ingredients, list[1].ingredients)
    return shoppingList;
 }

module.exports = {
    createFavoriteFood,
    commentOnSpiciness,
    orderFood,
    createShoppingList
};