function createAirport(name, airlinesArr, number) {
  var airport = {
    name: name,
    airlines: airlinesArr,
    availableGates: number,
  }
  return airport;
}

function welcomeGuests(airport) {
  return `Welcome to ${airport.name}!`
}

function landPlanes(airport, planes) {
 if (airport.availableGates >= planes) {
  airport.availableGates -= planes
  return `Success! Current availability is ${airport.availableGates}.`
 } else {
  var overflow = planes - airport.availableGates 
  airport.availableGates = 0
  return `Oh no! Not enough gates available. Current overflow is ${overflow}.`
 }
}

function checkAirlineLocations(allAirports, airlineCarrier) {
  var airportName = [];
    for (var i = 0; i < allAirports.length; i++) {
      if (allAirports[i].airlines.includes(airlineCarrier)) {
        airportName.push(allAirports[i].name)
      }
    }
    return airportName;
  } 


module.exports = { 
  createAirport, 
  welcomeGuests, 
  landPlanes, 
  checkAirlineLocations
};
