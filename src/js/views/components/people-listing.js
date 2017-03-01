import Vue from 'vue';

let PeopleListing = Vue.extend({
	template: '#people-listing-template',
		data: function() {
		return {
			people: this.$parent.people
		}
	}
});

export default PeopleListing;