<template>
	<div>
		<!-- <scroller> -->
			<list append='tree'>
				<cell v-for="(item,index) in jobsList" v-on:click="takeroute(index)" append="tree">
					<div class="list"> 
						<div id="ls" class="list-info">
							<text class="list-title list-data"><image class="list-title-image" src="https://cdn4.iconfinder.com/data/icons/dot/256/suitcase_travel.png"></image>{{item.title}}</text>
							<text class="list-companyName list-data">{{item.companyName}}</text>
							<text v-if="item.phone != '' " class="list-phone list-data">{{item.phone.substring(0,20).match(/[\d, ]/g).join("")}}</text>
							<text v-else class="list-phone list-data">N/A</text>
						</div>
						<text class="list-distance">{{Math.round(item.distance).toFixed(1)}} kms</text>
						<a v-on:click="doNothing(index)" class="list-apply">Apply</a>
					</div>
				</cell>
				<loading @loading="loadMoreData" :display="showLoading">
				  <text class="refresh-arrow" style="text-align: center; color:rgb(238, 162, 54)">Load more</text>

				  <loading-indicator style="height:60;width:60;color:#3192e1"></loading-indicator>
				</loading>
			</list>
		<!-- </scroller>	 -->
	</div>
</template>

<script type="text/javascript">
	export default {
		data : function(){
			return {
				showLoading : 'hide',
				canShowLoading: false
			}
		},
		computed : {
			jobsList : function(){
				return this.$root.$data.temp;
			},
			isDataOver : function(){
				return this.$root.$data.isDataOver;
			}
		},
		methods : {
			takeroute : function(index) {
				this.$router.push('/detail/'+index+'');
				console.log(index);
			},
			loadMoreData : function() {
				console.log('Data will be loaded now');
				if(!this.$root.$data.isDataOver)
				this.showLoading = 'show';
				this.canShowLoading = true;
				var self = this;
				setTimeout(() => {
					if(!this.$root.$data.isDataOver){
						this.$root.$emit('get-next-data');
						// this.showLoading = false;	
					}
					else{
						console.log("Data is over");
						self.showLoading = 'hide';
					}
				}, 1500)
			},
			doNothing : function(index){
				this.$router.push('/applyhere/'+index+'');
			}
		},
		mounted : function(){
			console.log(this.$root.$el);
		}
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

	.refresh-view {
	  height: 120px;
	  width: 750px;
	  display: -ms-flex;
	  display: -webkit-flex;
	  display: flex;
	  -ms-flex-align: center;
	  -webkit-align-items: center;
	  -webkit-box-align: center;
	  align-items: center;
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
	.loading {
	    justify-content: center;
	}
	.indicator {
	    color: #888888;
	    margin-top: 20px;
	    margin-bottom: 20px;
	    text-align: center;
	    height: 80px;
	    width: 80px;
	    margin-left: 335px;
	    margin-right: 335px;
    }
</style>









