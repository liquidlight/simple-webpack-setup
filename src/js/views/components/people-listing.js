var Vue = require('vue');

var PeopleListing = Vue.extend({
	template: '#people-listing-template',
		data: function() {
		return {
			people: this.$parent.people
		}
	}
});

module.exports = PeopleListing;