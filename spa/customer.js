function createCustomer(name, bill, bookings = []) {
    var customer = {
        name: name,
        bill: bill,
        bookings: bookings
    }
    return customer;
}


function greeting(customer) {
    if (customer.bookings.length >= 1) {
        return `${customer.name}! Welcome back to Happy Spa`
    } else {
        return `${customer.name}! Welcome to Happy Spa`
    }
}

function createService(name, cost) {
    if (name === undefined || cost === undefined) {
        return "Please provide service name and cost."
    } else {
        return { name: name, cost: cost }
    }
}

function bookServices(customer, service) {
    customer.bookings.push(service.name)
    customer.bill += service.cost
    return customer
}



function applyGiftCard(allServices, giftCard) {
    var affordable =[];
        for (var i = 0; i < allServices.length; i++) {
        if (allServices[i].price <= giftCard) {
            affordable.push(allServices[i].name)
        }
    }
    return affordable
}


module.exports = {
    createCustomer,
    greeting,
    bookServices,
    createService,
    applyGiftCard
}
