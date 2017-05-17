<template>
	<div>
		<scroller>
			<div v-for="item in jobsList">
				<div class="list"> 
					<div class="list-info">
						<text class="list-title list-data"><image class="list-title-image" src="https://cdn4.iconfinder.com/data/icons/dot/256/suitcase_travel.png"></image>{{item.title}}</text>
						<text class="list-companyName list-data">{{item.companyName}}</text>
						<text v-if="item.phone != '' " class="list-phone list-data">{{item.phone.substring(0,20).match(/[\d, ]/g).join("")}}</text>
						<text v-else class="list-phone list-data">N/A</text>
					</div>
				<text class="list-distance">{{Math.round(item.distance).toFixed(1)}} kms</text>
				<text class="list-apply">Apply</text>
				</div>

			</div>
		</scroller>	
	</div>
</template>

<script type="text/javascript">
	export default {
		computed : {
			jobsList : function(){
				return this.$root.$data.temp;
			},
		},

	} 
</script>

<style type="text/css">
	.list{
		display: flex;
		flex-direction: row;
		padding-left: 20px;
		padding-right: 20px;
		padding-bottom: 10px;
		padding-top: 10px;
	}
	.list-info{
		width: 710px;
		padding: 20px;
		background-color: white;
	}
	.list-data{
		width: 578px;
		padding: 5px;
		font-size: 30px;
	}
	.list-distance{
		position: absolute;
		top: 40px;
		right: 40px;
		font-size: 30px;
	}
	.list-apply{
		position: absolute;
		bottom: 40px;
		right: 40px;
		font-size: 30px;
		padding-left: 25px;
		padding-right: 25px;
		padding-top: 15px;
		padding-bottom: 15px;
		background-color: #1976D2;
		color: white;
	}
</style>









