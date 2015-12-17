// http://adventofcode.com/day/3/input

var request = require('request').defaults({jar: true});

function readInput(dayNo) {
	var p = new Promise((resolve, reject)=>{

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
			return resolve(body.trim());
		});

	});

	return p;
}

module.exports = readInput;