var tap = require('tap');
var helper = require('./helper');

tap.test('Old Nice String', function (t) {
  t.ok(helper.isNiceString('ugknbfddgicrmopn'), "is nice because it has at least three vowels (u...i...o...), a double letter (...dd...), and none of the disallowed substrings");
  t.ok(helper.isNiceString('aaa'), "is nice because it has at least three vowels and a double letter, even though the letters used by different rules overlap.");
  t.equal(helper.isNiceString('jchzalrnumimnmhp'), false, "is naughty because it has no double letter");
  t.equal(helper.isNiceString('haegwjzuvuyypxyu'), false, "is naughty because it contains the string xy");
  t.equal(helper.isNiceString('dvszwmarrgswjxmb'), false, "is naughty because it contains only one vowel");
  t.end();
});

tap.test('New Nice String', function (t){
  t.ok(helper.isNewNiceString('qjhvhtzxzqqjkmpb'), 'is nice because is has a pair that appears twice (qj) and a letter that repeats with exactly one letter between them (zxz).');
  t.ok(helper.isNewNiceString('xxyxx'), 'is nice because it has a pair that appears twice and a letter that repeats with one between, even though the letters used by each rule overlap.');
  t.equal(helper.isNewNiceString('uurcxstgmygtbstg'), false, 'is naughty because it has a pair (tg) but no repeat with a single letter between them');
  t.equal(helper.isNewNiceString('ieodomkazucvgmuy'), false, 'is naughty because it has a repeating letter with one between (odo), but no pair that appears twice');
  t.end();
});
