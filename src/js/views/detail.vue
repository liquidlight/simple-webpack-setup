<template>
	<transition name="slide-left" mode="out-in">
		<div id="people-detail-template">
			<router-link to="/">◂ back to listing</router-link>
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
	</transition>
</template>

<script>
export default {
	name: 'people-detail-template',
	props: ['people'],
	data () {
		const route = this.$route;
		return {
			person: this.people.find(person => person.guid == route.params.id)
		};
	}
}
</script>

<style lang="scss">
</style>