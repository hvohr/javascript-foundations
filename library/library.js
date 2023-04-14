
function issueCard(name, age, numBooksCheckedOut) {
  var libraryCard = {
    name: name,
    age: age,
    numBooksCheckedOut: 0,
    isChild: false
  }
  if (libraryCard.age < 12) {
    libraryCard.isChild = true
  }
  return libraryCard;
}

function searchByAuthor(collection, author) {
  var array = [];
  for (var i = 0; i < collection.length; i++) {
    if (collection[i].author === author) {
      array.push(collection[i])
    }
  }
  if (array.length === 0) {
    return 'No book found for search criteria'
  }
  return array
}

module.exports = {
  issueCard,
  searchByAuthor
};