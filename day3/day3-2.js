var readinput = require('../readinput');
var santasLilHelper = require('./helper.js');
var uniq = require('lodash.uniq');

var santasLocation = {houses:{'0,0':1}, currentLocation:'0,0', visitedLocations: 1};
var roboLocation = {houses:{'0,0':1}, currentLocation:'0,0', visitedLocations: 1};

readinput(3).then((input) => {
  input.split('').filter((val, index)=>{return index % 2 !== 0;})
                 .forEach((val)=>{santasLilHelper.updateLocation(val, santasLocation);});
  
  input.split('').filter((val, index)=>{return index % 2 === 0;})
                 .forEach((val)=>{santasLilHelper.updateLocation(val, roboLocation);});

  console.log(`Santa visited ${santasLocation.visitedLocations} locations`);
  console.log(`RoboSanta visited ${roboLocation.visitedLocations} locations`);

  var uniqueHouses = uniq(
    Object.keys(santasLocation.houses)
    .concat(Object.keys(roboLocation.houses))
  ).length;

  console.log(`Together, they visited ${uniqueHouses} houses`);
});
