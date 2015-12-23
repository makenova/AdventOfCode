var fs = require('fs');
var request = require('request').defaults({jar: true});

module.exports = readInput;

function readInput(dayNo) {
  return new Promise((resolve, reject)=>{
    checkCache(dayNo)
    .then((data) => { return resolve(data); })
    .catch( (err)=>{
      console.log(err, 'cache miss');
      var url = `http://adventofcode.com/day/${dayNo}/input`;
      var cookie = request.cookie(`session=${process.env.ADVENTOFCODESESSIONID}`);
      var jar = request.jar();
      jar.setCookie(cookie, url);

      var reqObj = { url: url, jar: jar };

      request.get(reqObj, (err, res, body) =>{
        if (err) return reject(err);
        addToCache(dayNo, body.trim(), (err)=>{
          if (err) return reject(err);
          return resolve(body.trim());
        });
      });
    });
  });
}

function checkCache (dayNo, callback) {
  return new Promise((resolve, reject)=>{
    var filePath = `${__dirname}/cache/${dayNo}`;
    fs.stat(filePath, (err, stat)=>{
      if (err) reject(err);
      else{
        fs.readFile(filePath, 'utf8', (err, data)=>{
          if (err) reject(err);
          else resolve(data);
        });
      }
    });
  });
}

function addToCache (dayNo, data, callback) {
  fs.writeFile(`${__dirname}/cache/${dayNo}`, data, (err)=>{
    if (err) return callback(err);
    return callback(null);
  });
}
