<template>
	<div id="people-detail-template">
		<router-link to="/">Homepage</router-link>
		<h1><img :src="person.picture" :alt="person.name"> {{ person.name }}</h1>
		<h2>{{ person.company }}</h2>
		<ul>
			<li>Age: {{ person.age }}</li>
			<li>Eye Colour: {{ person.eyeColor }}</li>
			<li>Email: <a :href="'mailto:' + person.email">{{ person.email }}</a></li>
		</ul>
		<h3>Address</h3>
		<p>{{ person.address }}</p>
		<h3>About {{ person.name }}</h3>
		<p>{{ person.about }}</p>
	</div>
</template>

<script>
export default {
	name: 'people-detail-template',
	data () {
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
}
</script>

<style lang="scss">
	.person__item {
		position: relative;
		line-height: 2;
	}

	.person__item::before {
		content: "•";
		position: absolute;
		left: -1rem;
		transition: .2s ease;
		opacity: 0;
		transform: translateX(-.5rem);
	}

	.person__item:hover::before {
		transform: none;
		opacity: 1;
	}

	.person__name {
		display: inline-block;
		min-width: 10rem;
		line-height: 1.6;
	}
</style>