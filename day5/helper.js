module.exports.isNiceString = function isNiceString(string) {
  return has3vowels(string) &&
    twoInARow(string) &&
    noBadStrings(string);
};

module.exports.isNewNiceString = function isNewNiceString(string) {
  return pairTwice(string) && repeateOneBetween(string);
};

function has3vowels (string) {
  var vowels = 'aeiou';
  var vowelCount  = 0;
  vowels.split('').forEach((vowel) => {
    for(var i = 0; i < string.length; i++) {
      if (vowel === string[i])
        vowelCount++;
    }
  });

  return vowelCount >= 3;
}

function twoInARow (string) {
  var isTrue = false;
  string.split('').reduce((old, newV) => {
    if(old === newV) {
      isTrue = true;
    }
    return newV;
  },'');
  return isTrue;
}

function noBadStrings (string) {
  return string.indexOf('ab') === -1 &&
  string.indexOf('cd') === -1 &&
  string.indexOf('pq') === -1 &&
  string.indexOf('xy') === -1;
}

function pairTwice (string) {
  var pair = '';
  var isTrue = false;

  for (var i = 0, len = string.length; i < len; i++) {
    pair = `${string[i]}${string[i+1]}`;
    isTrue = string.substring(i+2).indexOf(pair) >= 0;
    if (isTrue) break;
  }

  return isTrue;
}

function repeateOneBetween (string) {
  var isTrue = false;

  for(var i = 0, len = string.length; i < len; i++){
    isTrue = string[i] === string[i+2];
    if (isTrue) break;
  }

  return isTrue;
}
