var readinput = require('../readinput');
var helper = require('./helper');

readinput(5).then((input) => {
  var strings = input.split('\n');

  var niceStrings = strings.filter((string=>{
    return helper.isNewNiceString(string);
  }));

  console.log(`There are ${niceStrings.length} new nice strings out of ${strings.length} strings`);
});
