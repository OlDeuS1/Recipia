const fs = require('fs');
const path = require('path');

function readJSON(relPath) {
	const p = path.join(__dirname, '..', relPath);
	const raw = fs.readFileSync(p, 'utf8');
	return JSON.parse(raw);
}

module.exports = { readJSON };
