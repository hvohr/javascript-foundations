function createMeal(type, calorieGoal, dishes = []) {
    var meal = {
        type: type,
        calorieGoal: calorieGoal,
        dishes: dishes
    }
    return meal;
}

function addDish(meal, dish) {
    if (dish.calories <= meal.calorieGoal) {
        meal.dishes.push(dish)
        meal.calorieGoal -= dish.calories
    }

    return meal
}


function calculateCalories(meal) {
    var sum = 0
    for (var i = 0; i < meal.dishes.length; i++) {
        sum += meal.dishes[i].calories
    }
    return `${meal.type} has a total of ${sum} calories.`
}

module.exports = {
    createMeal,
    addDish,
    calculateCalories
}