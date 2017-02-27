import Vue from 'vue';

Vue.component('people-listing', {
    template: '#people-listing-template',
    data: function() {
        return {
            people: this.$parent.people
        }
    }
});
