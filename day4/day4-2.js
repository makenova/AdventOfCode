var readinput = require('../readinput');
var helper = require('./helper');

readinput(4).then((input) => {
  var i = 0;
  for (i;;i++){
    if (helper.checkHash(helper.getHash(`${input}${i}`), '000000'))
      break;
  }
  console.log(`This is the number that satisfies the hash ${i}`);
});