<template>
	
	<div>
		<web class="webview" :src="current.source"></web>
	</div>

</template>

<script type="text/javascript">
	
export default {
	data : function(){
		return {
			url : this.$route.params.jobId
		}
	},
	computed : {
		current : function() {
			return this.$root.$data.temp[this.url]
		}
	},
}

</script>

<style scoped>
	.webview {
		flex: 1;
	}
</style>