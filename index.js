/* vim: set shiftwidth=2 tabstop=2 noexpandtab textwidth=80 wrap : */
"use strict";

module.exports = function (prop) {
	return function (Model) {
		var cache = Model._cache = Object.create(null);
		Model.on('construct', function (instance, initial) {
			var key = initial[prop];
			cache[key] = instance;
		});
		Model.get = function (key) {
			return cache[key];
		};
		Model.clear = function (key) {
			if (typeof key !== 'undefined')
				delete cache[key];
			else
				cache = Model._cache = Object.create(null);
		};
	};
};

