var readinput = require('../readinput');
var santasLilHelper = require('./helper.js');

var santasLocation = {houses:{'0,0':1}, currentLocation:'0,0', visitedLocations: 1};

readinput(3).then((input) => {
  input.split('').forEach((direction) => {
    santasLilHelper.updateLocation(direction, santasLocation);
  });
  console.log(`Santa visited ${santasLocation.visitedLocations} locations`);
});
