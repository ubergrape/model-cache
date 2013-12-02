
var Model = require('model');
var Cache = require('../');
var should = require('should');

describe('Cache', function () {
	it('should create a static `.get(key)` method', function () {
		var SomeModel = new Model(['prop'])
			.use(Cache('prop'));
		SomeModel.get.should.be.type('function');
	});
	it('should return `undefined` when item is not found', function () {
		var SomeModel = new Model(['prop'])
			.use(Cache('prop'));
		should.not.exist(SomeModel.get('foo'));
	});
	it('should create cache entries automatically', function () {
		var SomeModel = new Model(['prop'])
			.use(Cache('prop'));
		var instance = new SomeModel({prop: 'key', prop2: 'other'});
		SomeModel.get('key').should.equal(instance);
	});
	it('should allow clearing the cache', function () {
		var SomeModel = new Model(['prop'])
			.use(Cache('prop'));
		var instance = new SomeModel({prop: 'key', prop2: 'other'});
		should.exist(SomeModel.get('key'));
		SomeModel.clear();
		should.not.exist(SomeModel.get('foo'));
	});
});
