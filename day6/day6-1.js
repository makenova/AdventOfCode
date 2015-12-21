var readinput = require('../readinput');
var LightMatrix = require('./helper');

var hotline = new LightMatrix(1000, 1000);

readinput(6).then((input) => {
  input.split('\n').forEach(hotline.bling, hotline);
  console.log(`That can only mean one thing. ${hotline.lit} LIT!`);
});
