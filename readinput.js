var fs = require('fs');
var request = require('request').defaults({jar: true});

module.exports = readInput;

function readInput(dayNo) {
  var p = new Promise((resolve, reject)=>{
    checkCache(dayNo, (data)=>{
      if (data) {
        return resolve(data);
      }
      var url = `http://adventofcode.com/day/${dayNo}/input`;
      var cookie = request.cookie(`session=${process.env.ADVENTOFCODESESSIONID}`);
      var jar = request.jar();
      jar.setCookie(cookie, url);

      var reqObj = {
        url: url,
        jar: jar
      };

      request.get(reqObj, (err, res, body) =>{
        if (err) return reject(err);
        addToCache(dayNo, body.trim(), (err)=>{
          if (err) return reject(err);
          return resolve(body.trim());
        });
      });
    });

  });
  return p;
}

function checkCache (dayNo, callback) {
  var filePath = `${__dirname}/cache/${dayNo}`;
  fs.stat(filePath, (err, stat)=>{
    if (!err){
      fs.readFile(filePath, 'utf8', (err, data)=>{
        return callback(data);
      });
    } else {
      return callback(null); // Intentionally swallow err ... wot!?!
    }
  });
}

function addToCache (dayNo, data, callback) {
  fs.writeFile(`${__dirname}/cache/${dayNo}`, data, (err)=>{
    if (err) return callback(err);
    return callback(null);
  });
}
