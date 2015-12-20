var crypto = require('crypto');

module.exports.getHash = function getHash(input) {
  var md5 = crypto.createHash('md5');
  md5.update(input, 'utf8');
  return md5.digest('hex');
};

module.exports.checkHash = function checkHash(hash, check) {
  return hash.indexOf(check) === 0;
};