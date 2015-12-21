var tap = require('tap');
var LightMatrix = require('./helper');

tap.test('Small test!', (t) => {
  var hotline = new LightMatrix(4,4);
  var cmdArray = [`turn on 0,0 through 3,0`, `toggle 2,0 through 2,3`];
  cmdArray.forEach(hotline.bling, hotline);
  t.equal(hotline.lit, 6, "two rows should be on");
  t.end();
});

tap.test('Light the first row', function(t){
  var hotline = new LightMatrix(1000,1000);
  hotline.bling('toggle 0,0 through 999,0');
  t.equal(hotline.lit, 1000, "1000 because the first row is lit");
  t.end();
});

tap.test('All of the lights!', (t) => {
  var hotline = new LightMatrix(1000,1000);
  hotline.bling('turn on 0,0 through 999,999');
  t.equal(hotline.lit, 1000000, "All lights should be on");
  t.end();
});

tap.test('Small newBling test!', (t) => {
  var hotline = new LightMatrix(4,4);
  var cmdArray = [`turn on 0,0 through 3,0`, `toggle 2,0 through 2,3`];
  cmdArray.forEach(hotline.newBling, hotline);
  t.equal(hotline.lit, 7, "form a 4x4 'T'");
  t.equal(hotline.howLit, 12, "form a 4x4 'T' with toggle");
  hotline.newBling('turn on 1,1 through 2,2');
  t.equal(hotline.lit, 9, "Add a square");
  t.equal(hotline.howLit, 16, "Add a square");
  ['turn off 1,1 through 2,2', 'turn off 1,1 through 2,2']
    .forEach(hotline.newBling, hotline);
  t.equal(hotline.lit, 7, "remove some");
  t.equal(hotline.howLit, 10, "remove some");
  t.end();
});

tap.test('newBling One light!', (t) => {
  var hotline = new LightMatrix(1000,1000);
  hotline.newBling('turn on 0,0 through 0,0');
  t.equal(hotline.howLit, 1, "One light turned on");
  t.end();
});

tap.test('newBling All of the lights!', (t) => {
  var hotline = new LightMatrix(1000,1000);
  hotline.newBling('toggle 0,0 through 999,999');
  t.equal(hotline.howLit, 2000000, "All lights level 2");
  t.end();
});
