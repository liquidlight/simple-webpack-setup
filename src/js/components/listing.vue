<template>
	<transition name="slide-right" mode="out-in">
		<div id="people-listing-template">
			<transition name="fade" mode="out-in">

			<ul class="people-list">
				<li class="person__item" v-for="person in people">
					<span class="person__name">{{ person.name }}</span>
					<router-link :to="{ name: 'person', params: { id: person.guid }}" class="person__link">View Details ▸</router-link>
				</li>
			</ul>
			</transition>
		</div>
	</transition>
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
	.person__name {
		display: inline-block;
		min-width: 10rem;
		line-height: 1.6;
	}
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
</style>