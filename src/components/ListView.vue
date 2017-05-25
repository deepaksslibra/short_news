<template>
			<list class="main-list" @loadmore="loadMoreData" loadmoreoffset="50" append='tree'>
				<cell v-for="(item,index) in jobsList" v-on:click="takeroute(index)" append="tree">
					<div class="list"> 
						<div id="ls" class="list-info">
							<text class="list-title list-data"><image class="list-title-image" src="https://cdn4.iconfinder.com/data/icons/dot/256/suitcase_travel.png"></image>{{item.title}}</text>
							<text class="list-companyName list-data">{{item.companyName}}</text>
							<text v-if="item.phone != '' " class="list-phone list-data">{{item.phone.substring(0,20).match(/[\d, ]/g).join("")}}</text>
							<text v-else class="list-phone list-data">N/A</text>
						</div>
						<text class="list-distance">{{Math.round(item.distance).toFixed(1)}} kms</text>
						<text class="list-apply" v-on:click="doNothing(index)">Apply</text>
					</div>
				</cell>
				<loading class="loading" :display="showLoading">
			      <loading-indicator class="indicator" :display="showLoading"></loading-indicator>
			    </loading>
			</list>
</template>

<script type="text/javascript">
	export default {
		data : function(){
			return {
				showLoading : 'hide',
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
				if(!this.$root.$data.isDataOver){
				this.showLoading = 'show';
				}
				setTimeout(() => {
					if(!this.$root.$data.isDataOver){
						this.$root.$emit('get-next-data');
						this.showLoading = 'hide';
					}
					else{
						console.log("Data is over");
						this.showLoading = 'hide';	
					}
				},1500)
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
	   	margin-left: 335px;
	   	margin-right: 335px;
	   	height: 60px;
	   	width: 60px;
	    text-align: center;
	    color: #1976D2;
    }
    .tex-indicator {
    color: #1976D2;
    font-size: 42px;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
	  }
</style>









