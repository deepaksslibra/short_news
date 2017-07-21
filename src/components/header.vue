<template>
	<div class="header-container">
		<div class="app-header">
			<text class="header-page">{{pageName}}</text>
			<image v-if="isMenu" class="header-left header-icon" src="https://uploader-assets.s3.ap-south-1.amazonaws.com/menu.png"></image>
			<image v-else class="header-left header-icon" src="https://uploader-assets.s3.ap-south-1.amazonaws.com/Arrow_Back-128.png"></image>
			<image @click="$router.push('/cart/')"  v-if="isCart" class="header-cart header-icon" src="https://uploader-assets.s3.ap-south-1.amazonaws.com/cart.png"></image>
			<image v-if="isHeaderSearch" class="header-search header-icon" src="https://uploader-assets.s3.ap-south-1.amazonaws.com/search.png"></image>
		</div>	
		
		<!--Sub-header Part Goes Here if there is a subheader-->
	
		<div v-if="subAlter" class="app-subheader">
			<div class="subheader-search">
				<image class="subheader-search-img" src="http://www.iconsdb.com/icons/preview/red/active-search-xxl.png"></image>
			</div>
			<image class="subheader-sort" src="https://uploader-assets.s3.ap-south-1.amazonaws.com/sort.png"></image>
			<image class="subheader-filter" src="https://uploader-assets.s3.ap-south-1.amazonaws.com/flter.png"></image>
		</div>
	
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				// pageName : "HOME",
				isCart : true,
			}
		},
		computed : {
			isHeaderSearch : function(){
				if(this.subheader)
					return false
				else
					return true
			},
			isMenu : function(){
				if(!this.data){
					return true
				}
				else{
					return this.data.isMenu
				}
			},
			pageName : function(){
				if(!this.data){
					return "HOME"
				}
				else{
					return this.data.name
				}
			},
			subAlter : function(){
				if(!this.data){
					return true
				}
				else{
					return this.data.isSub
				}
			}
		},
		props : ['data']
	}
</script>

<style>
	.header-container {
		width: 750px;
	}

	.app-header{
		display: flex;
		height: 116.66px;
		width: 750px;
		background-color: #EC1838;
		flex-direction: row;
	}

	.header-left{
		left: 33.33px;
		top: 33.3px;
		bottom: 33.33px;
	}

	.header-icon{
		height: 50px;
		width: 50px;
		position: absolute;
	}

	.header-cart{
		right: 33.33px;
		top : 33.33px;
		bottom: 33.33px;
	}

	.header-search{
		right: 108.33px;
		top : 33.33px;
		bottom: 33.33px;
	}

	.header-page{
		position: absolute;
		left : 108.33px;
		font-family: 'Lato', sans-serif;
		font-size: 45px;
		color: white;
		top : 33.33px;
		bottom: 33.33px;
		text-transform: uppercase;
	}

	.app-subheader{
		height: 	91.66px;
		display: flex;
		width: 750px;
		background-color: #EC1838;
		flex-direction: row;
	}

	.subheader-search {
		height: 54.16px;
		width : 500px;
		left : 33.33px;
		top : 18.75px;
		bottom: 18.75px;
		background-color: white;
		border-radius: 50px;
	}

	.subheader-search-img{
		position: absolute;
		height: 30px;
		top : 12.08px;
		bottom: 12.08px;
		right : 12.08px;
		width: 30px;
	}

	.subheader-sort{
		height: 50px;
		width: 50px;
		position: absolute;
		right: 108.33px;
		top : 18.75px;
		bottom : 18.75px;
	}

	.subheader-filter {
		height: 50px;
		width: 50px;
		position: absolute;
		right: 33.33px;
		top : 18.75px;
		bottom : 18.75px;	
	}

</style>