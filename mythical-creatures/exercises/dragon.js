function createDragon(name, rider, temperment) {
  var dragon = {
    name: name,
    rider: rider,
    temperment: temperment,
    timesEaten: 0,
    hungry: true

  }
  return dragon;
}

function greetRider(dragon) {
  return `Hi, ${dragon.rider}!`;
}

 function eat(dragon) {
  dragon.timesEaten += 1
  if (dragon.timesEaten  > 2) {
    dragon.hungry = false;
  }
  return dragon;
 }

 function findFireBreathers(dragon) {
  var fireBreathers = []
  for (var i = 0; i < dragon.length; i++) {
    if (dragon[i].temperment === "aggressive" ) {
      fireBreathers.push(dragon[i])
    }
  }
  return fireBreathers;
}

module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
}