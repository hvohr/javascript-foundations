function createTape(title, readyToPlay = false) {
    var tape = {
        title: title,
        readyToPlay: readyToPlay
    }
    return tape
}


function reset(tape) {
   if (tape.readyToPlay === false) {
     tape.readyToPlay = true
   }
   return tape
}


function createCollection(tape) {
collection = []
 for (var i = 0; i < tape.length; i++) {
    collection.push(tape[i].title)
 }
 if (collection.length === 0) {
    return "Your collection is empty"
 }
 return collection
}


module.exports = {
    createTape,
    reset,
    createCollection
}
