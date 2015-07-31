Density of Earth
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Dataset from [Cavendish](https://en.wikipedia.org/wiki/Henry_Cavendish)'s experiments which measure the density of the earth relative to the density of water.

In 1798, [Henry Cavendish](https://en.wikipedia.org/wiki/Henry_Cavendish) conducted experiments to indirectly calculate the [gravitational constant](https://en.wikipedia.org/wiki/Gravitational_constant) in [Newton](https://en.wikipedia.org/wiki/Isaac_Newton)'s [law of universal gravitation](https://en.wikipedia.org/wiki/Newton%27s_law_of_universal_gravitation) between two bodies having mass `m` and `M`.

TODO: insert equation

where `G` is the [gravitational constant](https://en.wikipedia.org/wiki/Gravitational_constant) and `r` is the distance separating the two bodies.

If the earth is modeled as a sphere having radius `R`, [Newton](https://en.wikipedia.org/wiki/Isaac_Newton)'s law may be expressed

TODO: insert equation

where `g` is the acceleration due to gravity and `D` is the earth's density. In which case, the density is inversely proportional to the gravitational constant `G`.

TODO: insert equation


## Installation

``` bash
$ npm install datasets-cavendish-density-of-earth
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var data = require( 'datasets-cavendish-density-of-earth' );
```

#### data

Raw dataset from [Cavendish](https://en.wikipedia.org/wiki/Henry_Cavendish)'s experiments which measure the density of the earth relative to the density of water.

``` javascript
console.log( data );
// returns [ 5.5, 5.61, 4.88, ... ]
```

__Note__: the measurement values are unit-less, as they are relative measures.


#### data.analyzed

When performing his analysis, [Cavendish](https://en.wikipedia.org/wiki/Henry_Cavendish) treated the third value `4.88` as `5.88`. 

``` javascript
console.log( data.analyzed );
// returns [ 5.5, 5.61, 5.88, ... ]
```


#### data.edited

While conducting his measurements, [Cavendish](https://en.wikipedia.org/wiki/Henry_Cavendish) changed his experimental apparatus after the sixth measurement. To remove confounding factors, an edited dataset is included which sets the first `6` values as missing values.

``` javascript
console.log( data.edited );
// returns [ null, null, ..., 5.36, ... ]
```


## Examples

``` javascript
var mean = require( 'compute-mean' ),
	data = require( 'datasets-cavendish-density-of-earth' );

// Remove the missing values from the edited dataset...
for ( var i = 0; i < 6; i++ ) {
	data.edited.shift();
}

// Calculate the sample means of each dataset...
console.log( mean( data ) );
// returns ~5.448 => true value is 5.517

console.log( mean( data.analyzed ) );
// returns ~5.482 => true value is 5.517

console.log( mean( data.edited ) );
// returns ~5.483 => true value is 5.517
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## References

*	Cavendish, Henry. (1798). "Experiments to determine the density of the earth." *Philosophical Transactions of the Royal Society of London*, 88 (Part II), 469-527. Reprinted in A. S. Mackenzie (ed.), *The Laws of Gravitation*, 1900, New York: American.
*	Stigler, Stephen M. (1977), "Do robust estimators work with real data?", *Annals of Statistics*, 5, 1055-1098.



## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Compute.io](https://github.com/compute-io) Authors.


[npm-image]: http://img.shields.io/npm/v/datasets-cavendish-density-of-earth.svg
[npm-url]: https://npmjs.org/package/datasets-cavendish-density-of-earth

[travis-image]: http://img.shields.io/travis/datasets-io/cavendish-density-of-earth/master.svg
[travis-url]: https://travis-ci.org/datasets-io/cavendish-density-of-earth

[codecov-image]: https://img.shields.io/codecov/c/github/datasets-io/cavendish-density-of-earth/master.svg
[codecov-url]: https://codecov.io/github/datasets-io/cavendish-density-of-earth?branch=master

[dependencies-image]: http://img.shields.io/david/datasets-io/cavendish-density-of-earth.svg
[dependencies-url]: https://david-dm.org/datasets-io/cavendish-density-of-earth

[dev-dependencies-image]: http://img.shields.io/david/dev/datasets-io/cavendish-density-of-earth.svg
[dev-dependencies-url]: https://david-dm.org/dev/datasets-io/cavendish-density-of-earth

[github-issues-image]: http://img.shields.io/github/issues/datasets-io/cavendish-density-of-earth.svg
[github-issues-url]: https://github.com/datasets-io/cavendish-density-of-earth/issues
