function createEvent(title, month, day) {
    var event = {
        title,
        month,
        day
    }
    if (day >= 32 || day <= 0) {
        return `Error: ${day} is not a valid day`
    }
    return event;
}

function createCalendar(owner, events) {
    var calendar = {
        owner,
        events
    }
    return calendar;
}

function reportMonthlyEvents(calendar, month) {
    var monthlyEvents = []
    for (var i = 0; i < calendar.events.length; i++) {
        if (calendar.events[i].month === month) {
            monthlyEvents.push(calendar.events[i])
        }
    }
    return monthlyEvents;
}

module.exports = {
    createEvent,
    createCalendar,
    reportMonthlyEvents
};