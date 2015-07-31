'use strict';

var mean = require( 'compute-mean' ),
	data = require( './../lib' );

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
