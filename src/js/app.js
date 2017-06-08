'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import PersonDetail from './views/detail.vue';
import PeopleListing from './views/listing.vue';
import PeopleData from './data.json';

Vue.use(VueRouter);

var AppRouter = new VueRouter({
	mode: 'hash',
	base: window.location.href,
	routes: [
		{path: '/', component: PeopleListing},
		{path: '/:id', name: 'person', component: PersonDetail}
	]
});

var App = new Vue({
	el: '#app',
	router: AppRouter,
	data: {
		people: PeopleData
	}
});