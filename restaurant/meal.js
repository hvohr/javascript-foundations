function createMeal(name, specialRequests, tableNumber) {
    var meal = {
        name: name,
        specialRequests: specialRequests,
        tableNumber: tableNumber,
        complete: false
    }
    return meal
}

function getMade(meal) {
    meal.complete = true
    return meal
}

function announceMeal(meal) {
    if (meal.complete === true) {
        return `Order up - ${meal.name} for table ${meal.tableNumber}!`
    } else {
        return `This ${meal.name} is not completed yet`
    }
}


function createOrder({ tableNumber: tableNumber, meals: meals, completedMeals = [] }) {
    var order = {
        tableNumber: tableNumber,
        meals: meals,
        completedMeals: completedMeals
    }
    return order
}


function cookMeal(order, meal) {
if (order.tableNumber === meal.tableNumber) {
    order.completedMeals.push(meal.name)
}
return order
}

function listOrders(order) {
var mealNames = []
for (var i = 0; i < order.meals.length; i++) {
    mealNames.push(order.meals[i].name)
}
return mealNames;
}

module.exports = {
    createMeal,
    getMade, 
    createOrder,
    cookMeal, 
    listOrders, 
    announceMeal
};
