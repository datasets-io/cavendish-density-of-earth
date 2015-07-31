/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	data = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'datasets-cavendish-density-of-earth', function tests() {

	it( 'should export an array', function test() {
		expect( data ).to.be.an( 'array' );
		assert.strictEqual( data.length, 29 );
	});

	it( 'should export auxiliary datasets', function test() {
		expect( data.analyzed ).to.be.an( 'array' );
		assert.strictEqual( data.analyzed.length, 29 );

		expect( data.edited ).to.be.an( 'array' );
		assert.strictEqual( data.edited.length, 29 );
	});

	it( 'should export an edited dataset whose first six values are `null` to account for change of experimental apparatus', function test() {
		var d = data.edited,
			len = d.length,
			i;

		for ( i = 0; i < len; i++ ) {
			if ( i < 6 ) {
				assert.isNull( d[ i ] );
			} else {
				assert.isNumber( d[ i ] );
			}
		}
	});

});
