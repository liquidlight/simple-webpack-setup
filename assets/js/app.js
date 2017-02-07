
import Vue from 'vue';
import liquidCompoment from './views/components/liquid';

var vm = new Vue({
	el: '#app',
	data: {
		name: 'Kitty'
	},
	components: {
		'liquid': liquidCompoment
	}
});