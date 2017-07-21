<template>
	<div>
		<app-header></app-header>
		<scroller style="flex:1">
			<banner></banner>
			<categories></categories>
			<recommended></recommended>
		</scroller>
	</div>	
</template>

<script>
	import Header from '../components/header.vue'
	import Banner from '../components/banner.vue'
	import Categories from '../components/categories.vue'
	import Recommended from '../components/recommended.vue'
	export default {
		components : {
			'app-header' : Header,
			'banner' : Banner,
			'categories' : Categories,
			'recommended' : Recommended
		}
	}
</script>

<style scoped>

</style>