# Model-cache

A cache for Swatinem/model

[![Build Status](https://travis-ci.org/Swatinem/model-cache.png?branch=master)](https://travis-ci.org/Swatinem/model-cache)
[![Coverage Status](https://coveralls.io/repos/Swatinem/model-cache/badge.png?branch=master)](https://coveralls.io/r/Swatinem/model-cache)
[![Dependency Status](https://gemnasium.com/Swatinem/model-cache.png)](https://gemnasium.com/Swatinem/model-cache)

## Installation

    $ component install Swatinem/model-cache

## Cache(property)

Creates a cache for this model based on `property`.

## .clear()

Clears the cache

## new Model()

This will automatically add the new instance to the cache.

## .get(key)

Returns the cached object or undefined.

## Usage

```js
var Model = require('model');
var Cache = require('model-cache');

var User = new Model(['name', 'email'])
	.use(Cache('email'));

// this creates a cache entry automatically:
new User({name: 'Foo Bar', email: 'foo@bar'});

// get the instance from the cache:
var instance = User.get('foo@bar');

```

## License

  MIT

