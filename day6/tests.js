var tap = require('tap');
var helper = require('./helper');

t.equal(helper.howManyLit(helper.hitTheLights(1, ['0,0', '999,999'])), 1000, "1000 because the first row is lit");
