const fs = require('fs');
fs.readdir(__dirname, (err, files) => {
	if (err) throw err;
	console.log(files);
});