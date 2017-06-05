<template>
	<div class="list-view">
			<list class="main-list" @loadmore="loadMoreData" loadmoreoffset="50">
				<cell v-for="(item,index) in jobsList" v-on:click="takeroute(index)" append="tree">
					<div class="list" append="tree"> 
						<div id="ls" class="list-info">
							<text class="list-title list-data"><image class="list-title-image" src="https://cdn4.iconfinder.com/data/icons/dot/256/suitcase_travel.png"></image>{{item.title}}</text>
							<text class="list-companyName list-data">{{item.companyName}}</text>
							<text v-if="item.phone != '' " class="list-phone list-data">{{item.phone.substring(0,20).match(/[\d, ]/g).join("")}}</text>
							<text v-else class="list-phone list-data">N/A</text>
						</div>
						<text class="list-distance">{{Math.round(item.distance).toFixed(1)}} kms</text>
						<a class="list-apply" :href="item.source">
						<text style="color:#FFFFFF;">Apply</text>
						</a>
					</div>
				</cell>
			</list>
			<div class="loading" v-if="loading" >
		      <text class="loading-text">Loading</text>
		  </div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data : function(){
			return {
				showLoading : 'hide',
				loading: false
			}
		},
		computed : {
			jobsList : function(){
				return this.$root.$data.temp;
			},
			isDataOver : function(){
				return this.$root.$data.isDataOver;
			},
			isActive : function(){
				if (this.showLoading == 'show')
				 	return true;
				else
				 	return false;	
			}
		},
		methods : {
			takeroute : function(index) {
				this.$router.push('/detail/'+index+'');
				console.log(index);
			},
			loadMoreData : function() {
				console.log('Data will be loaded now');
				if(!this.$root.$data.isDataOver){
					this.showLoading = 'show';
					this.loading = true;
					this.$root.$emit('get-next-data');
					// setTimeout(() => {
					// 		this.showLoading = 'hide';
					// },1500)
				}
			},
			doNothing : function(index){
				this.$router.push('/applyhere/'+index+'');
			}
		},
		mounted : function(){
			console.log(this.$root.$el);
		},
		created: function () {
			var self = this;
			this.$root.$data.bus.$on("data-fetched", function () {
				console.log("Data is Fetched....!");
				self.loading = false;
			})
		}
	} 
</script>

<style type="text/css">
	.list-view {
		height: 100%;
	}

	.loading {
	  width: 750px;
	  height: 120px;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	}
	.loading-text {
	  margin: auto;
	  text-align: center;
	  font-size: 40px;
	  color: #BBB;
	}

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
		width: 530px;
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
		color: #ffffff;
	}
	.list-apply:active{
		background-color: #1566b6;
	}
	.loading {
	    justify-content: center;
	}
	
    .indicator {
	   	margin-left: 335px;
	   	margin-right: 335px;
	   	height: 60px;
	   	width: 60px;
	    text-align: center;
	    color: #1976D2;
    }

</style>









