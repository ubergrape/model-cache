
module.exports = function (prop) {
	return function (Model) {
		var cache = Object.create(null);
		Model.on('construct', function (instance, initial) {
			var key = initial[prop];
			cache[key] = instance;
		});
		Model.get = function (key) {
			return cache[key];
		};
		Model.clear = function () {
			cache = Object.create(null);
		};
	};
};

