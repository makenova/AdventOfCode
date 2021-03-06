var readinput = require('../readinput');
var helper = require('./helper');

readinput(5).then((input) => {
  var strings = input.split('\n');

  var niceStrings = strings.filter((string=>{
    return helper.isNiceString(string);
  }));

  console.log(`There are ${niceStrings.length} nice strings out of ${strings.length} strings`);
});
