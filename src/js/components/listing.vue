<template>
	<div id="people-listing-template">
		<ul class="people-list">
			<li class="person__item" v-for="person in people">
				<span class="person__name">{{ person.name }}</span>
				<router-link :to="{ name: 'person', params: { id: person.guid }}" class="person__link">View Details</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'people-listing-template',
		data () {
			return {
				people: this.$parent.people
			}
		}
	}
</script>

<style lang="scss">
	.people-list {
		list-style: none;
		margin: 0;
		padding: 0;
	}
</style>