function createVampire(name, pet, thirsty, ouncesDrank) {
  var vampire = {
    name: name,
    pet: pet || "bat",
    thirsty: true,
    ouncesDrank: 0
  }
  return vampire;
}

function encounterDeliciousVictim(vampire) {
  if (vampire.thirsty === true) {
    return "I WANT TO SUCK YOUR BLOOD!";
  } else
  return "No thanks, I am too full.";
}

function drink(vampire) {
  vampire.ouncesDrank += 10;
  if (vampire.ouncesDrank >= 50) {
    vampire.thirsty = false;
    vampire.ouncesDrank = 50;
  } 
  return vampire;
}

function inquirePlace(locations, location) {
  var response = `No, I have never been to ${location}.`
  for (var i = 0; i < locations.length; i++) {
    if (locations[i] === location) {
    return `Yes, I have spent some time in ${location}.`
    }
  }
return response;
}

function findBatLovers(vampire) {
  var batLover = []
  for (var i = 0; i < vampire.length; i++) {
    if (vampire[i].pet === "bat") {
      batLover.push(vampire[i].name)
    }
  }
  return batLover;
}

module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
}