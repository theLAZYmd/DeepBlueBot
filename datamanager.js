const fs = require('fs');

function DataManager(filepath) {
	this.filepath = filepath;
}
DataManager.prototype.getData = function() {
	console.log(this.filepath);
	return JSON.parse(fs.readFileSync(this.filepath, 'utf8'));
};
DataManager.prototype.setData = function(data) {
	fs.writeFileSync(this.filepath, JSON.stringify(data, null, 4));
};

module.exports = DataManager;