function createItemStock(name = 'unknown', quantity = 0, price = 1.00) {
    var item = {
        name: name,
        quantity: quantity,
        price: price
    }
    return item
}

function makePurchase(item, money) {
    if (item.price > money) {
        return `Sorry, you need at least $${item.price} to make that purchase`
    }
    if (item.quantity === 0) {
        return `Sorry, there are none left`
    } else {
        return `Here are your ${item.name}`
    }
}


function collectChange(change) {
var sum = 0
    for (var i = 0; i < change.length; i++) {
        sum += change[i]
    }
    return sum
}


module.exports = {
    createItemStock,
    collectChange,
    makePurchase
}
