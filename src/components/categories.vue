<template>
	<div class="categories-container">

	<!-- When categories <= 4 -->	

		<div v-if="category_type_1">
		
		</div>

	<!-- When categories > 4 -->	

		<div v-else>
			<div class="categories">
				<div class="categories-header">
					<text class="category-title">Categories</text>
				</div>
				<scroller class="scroller" scroll-direction="horizontal">
					<div v-for="item in categories" class="container">
						<div @click="$router.push('/categories/'+item.name+'')" class="scroller-image-container">
							<image class="scroller-image" :src="item.imgUrl"></image>
						</div>	
						<text class="scroller-text">{{item.name}}</text>
					</div>
				</scroller>
			</div>		
		</div>
	</div>	
</template>

<script type="text/javascript">
	export default{
		data() {
			return {
				numberOfCategories : '7',
				categories : [
								{ name : "Tv", imgUrl : "https://uploader-assets.s3.ap-south-1.amazonaws.com/tv.png"},
								{ name : "Oven", imgUrl : "https://uploader-assets.s3.ap-south-1.amazonaws.com/oven.png"},
								{ name : "Washing Machine", imgUrl : "https://uploader-assets.s3.ap-south-1.amazonaws.com/washing%20mach			ine.png"},
								{ name : "Fridge", imgUrl : "https://uploader-assets.s3.ap-south-1.amazonaws.com/fridge.png"},
								{ name : "Tv", imgUrl : "https://uploader-assets.s3.ap-south-1.amazonaws.com/tv.png"},
								{ name : "Oven", imgUrl : "https://uploader-assets.s3.ap-south-1.amazonaws.com/oven.png"},
								{ name : "Washing Machine", imgUrl : "https://uploader-assets.s3.ap-south-1.amazonaws.com/washing%20machine.png"},
								{ name : "Fridge", imgUrl : "https://uploader-assets.s3.ap-south-1.amazonaws.com/fridge.png"},
								{ name : "Tv", imgUrl : "https://uploader-assets.s3.ap-south-1.amazonaws.com/tv.png"},
								{ name : "Oven", imgUrl : "https://uploader-assets.s3.ap-south-1.amazonaws.com/oven.png"},
								{ name : "Washing Machine", imgUrl : "https://uploader-assets.s3.ap-south-1.amazonaws.com/washing%20machine.png"},
								{ name : "Fridge", imgUrl : "https://uploader-assets.s3.ap-south-1.amazonaws.com/fridge.png"},
								{ name : "Tv", imgUrl : "https://uploader-assets.s3.ap-south-1.amazonaws.com/tv.png"},
								{ name : "Oven", imgUrl : "https://uploader-assets.s3.ap-south-1.amazonaws.com/oven.png"},
								{ name : "Washing Machine", imgUrl : "https://uploader-assets.s3.ap-south-1.amazonaws.com/washing%20machine.png"},
								{ name : "Fridge", imgUrl : "https://uploader-assets.s3.ap-south-1.amazonaws.com/fridge.png"},
							 ],
				// methods : {
				// 	takeroute : function(name){
							
				// 	}
				// }			 
			}
		}
	}
</script>

<style scoped>
	.scroller{
		flex-direction: row;
	}

	.container {
		padding-left: 12.5px;
		padding-right: 12.5px;
		padding-top: 20px;
		padding-bottom: 20px;
		background-color: #EC1838;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.categories {
		height: 250px;
		background-color: #EC1838;
		box-shadow: 3px rgba(0,0,0,0.12);
	}

	.category-title{
		padding-bottom: 10px;
		padding-top: 20px;
		margin-left-left: 20px;
		font-size: 30px;
		color: #dddddd;
		border-bottom-style: solid;
		border-bottom-color: lightgrey;
		border-bottom-width: 2px;
		width: 180px;
	}

	.scroller-image-container {
		height: 95.8px;
		width: 95.8px;
		background-color: white;
		margin-left: 12.5px;
		margin-right: 12.5px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 47.8px;
	}
	.scroller-text {
		text-align: center;
		font-size: 25px;
		color: white;
		padding-top: 10px;
	}

	.scroller-image {
		width: 55.8px;
		height: 55.8px;
		z-index: 10;
	}

	.categories-header {
		padding-left: 20px;
	}
</style>
	