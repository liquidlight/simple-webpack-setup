var Vue = require('vue');

var PeopleDetail = Vue.extend({
	template: '#people-detail-template',
	data: function() {
		var person;
		for (var i = 0; i < this.$parent.people.length; i++) {
			if(this.$parent.people[i].guid == this.$route.params.id) {
				person = this.$parent.people[i];
				break;
			}
		}
		
		return {
			person: person
		}
	}
});

module.exports = PeopleListing;