const X = 'x', Y = 'y';

function getX(location) {
  return parseInt(location.substring(0,location.indexOf(',')));
}

function getY(location) {
  return parseInt(location.substring(location.indexOf(',')+1));
}

function setX(xDimension, location) {
  return `${xDimension},${getY(location)}`;
}

function setY(yDimension, location) {
  return `${getX(location)},${yDimension}`;
}

function updateXY (dimension, direction, santasLocation) {
  var currentLocation = santasLocation.currentLocation;
  var value = (dimension === Y) ?
    getY(currentLocation) :
    getX(currentLocation);
  
  (direction > 0) ? value++ : value--;

  currentLocation = (dimension === Y) ?
    setY(value, currentLocation) :
    setX(value, currentLocation);

  santasLocation.currentLocation = currentLocation;

  if (santasLocation.houses[currentLocation] === undefined){
    santasLocation.houses[currentLocation] = 1;
    santasLocation.visitedLocations++;
  } else {
    santasLocation.houses[currentLocation]++;
  }
}

module.exports.updateLocation = function updateLocation (direction, santasLocation) {
  switch(direction){
    case '>':
      updateXY(X, 1, santasLocation);
      break;
    case '<':
      updateXY(X, -1, santasLocation);
      break;
    case '^':
      updateXY(Y, 1, santasLocation);
      break;
    case 'v':
      updateXY(Y, -1, santasLocation);
      break;
  }
};
