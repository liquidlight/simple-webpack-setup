'use strict';

const two = require('./two');

const One = (function(two){
	console.log('Module 1');
	console.log('Importing value from module 2: ' + two.twoPointOne() )
})(two);

module.exports = One;