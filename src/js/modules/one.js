'use strict';

import two from './two';

const One = (function(two){
	console.log('Module 1');
	console.log('Importing value from module 2: ' + two.twoPointOne() )
})(two);

module.exports = One;