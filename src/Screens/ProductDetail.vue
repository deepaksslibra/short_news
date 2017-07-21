<template>
	<div class="wrapper">
		<app-header></app-header>
		<scroller class="scroller">
			<banner></banner>
			<!-- <div v-for="n in 100"><text>Hey</text></div> -->
			<!-- <div class="product-info"> -->
				<div class="product-card">
					<text class="product-name">{{product.name}}</text>
					<div class="product-rest">
						<div class="product-rest-left">
							<text class="product-current-price">Rs.{{product.currentPrice}}</text>
							<text class="product-og-price">{{product.ogPrice}}</text>
						</div>	
						<div class="product-rest-right">
							<text class="product-availability">{{product.availability}}</text>
						</div>	
					</div>
				</div>
			<!-- </div>	 -->
				<div class="product-color-card">
					<text class="available-colors">Available Colors</text>
					<div class="color-holder">
						<div v-bind:style="{ backgroundColor: item }" class="color-block" v-for="item in product.colors"></div>
					</div>
				</div>
				<div class="product-size-card">
					<text class="available-sizes">Available Sizes</text>
					<div class="sizes-holder">
						<div class="size-block" v-for="item in product.sizes"><text>{{item}}</text></div>
					</div>
				</div>
				<div class="product-quantity">
					<div class="quanity-placeholder"><text class="quantity-text">Quantity</text></div>
					<div class="quantity-button-holder">
						<div class="quantity-button">
							<div class="quantity-minus qbc"><text style="color:white">-</text></div>
							<div class="quantity-number qbn"><text>1</text></div>
							<div class="quantity-plus qbc"><text style="color:white">+</text></div>
						</div>
					</div>
				</div>
				<div class="product-d">
					<text class="textual">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</text>
				</div>
		</scroller>	
	</div>	
</template>

<script type="text/javascript">
	import Header from '../components/header.vue'
	import Banner from '../components/banner.vue'
	export default {
		data() {
			return {
				product : {
					name : "Voltas 155 CY 1.2 Ton 5 Star Split AC (White)",
					currentPrice : "999",
					ogPrice : "1299",
					availability : "Out of Stock",
					colors : ["red","green","blue","white"],
					sizes : ["S","M","L","XL"],
					quantity : 1,
					detail : "Lorem Ipsum "
				}
			}
		},
		components :{
			'app-header' : Header,
			'banner' : Banner 
		}
	}
</script>


<style type="text/css">
	/*.wrapper{
		flex: 1;
		background-color: blue;
	}*/
	.product-card {
		width: 720px;
		background-color: white;
		box-shadow: 3px rgba(0,0,0,0.3);
		display: flex;
		height: 200px;
		flex-direction: column;
		padding-left: 33.33px;
		padding-right: 33.33px;
		padding-top: 33.33px;
		padding-bottom: 33.33px;
		margin-left: 15px;
		margin-top: 15px;
		height: 200px;
	}

	.scroller{
		display: flex;
		flex: 1;
	}

	.product-name{
		display: flex;
		flex-direction: row;
		flex : 1;
		font-size: 30px;
	}

	.product-info{
		flex: 1;
		display: flex;
		background-color: yellow;
		width: 750px;
		flex-direction: column;
	}

	.product-rest{
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.product-rest-left{
		flex-direction: row;
		flex : 1;
		align-items: center;
	}

	.product-rest-right {
		flex-direction: row;
		flex: 1;
		text-align: center;
		justify-content: center;
		align-items: center;
	}	

	.product-current-price{
		font-size: 50px;
		margin-right: 20px;
	}

	.product-og-price{
		font-size: 30px;
		color: red;
		text-decoration: line-through;
	}	

	.product-availability{
		font-size: 30px;
		color : red;
	}

	.product-color-card {
		width: 720px;
		background-color: white;
		box-shadow: 3px rgba(0,0,0,0.3);
		display: flex;
		flex-direction: column;
		padding-left: 33.33px;
		padding-right: 33.33px;
		padding-bottom: 20px;
		padding-top: 20px;
		margin-left: 15px;
		margin-top: 15px;
		height: 200px;
	}

	.available-colors{
		font-weight: bold;
		font-size: 30px;
		padding-bottom: 20.px;
	}

	.color-holder{
		display: flex;
		flex-direction: row;
		padding-top: 10px;
		padding-bottom: 10px;
		width: 750px;
	}

	.color-block{
		height : 80px;
		width: 80px;
		border-style : solid;
		border-width: 2px;
		border-color: grey;
		margin-right: 30px;
	}

	.product-size-card {
		width: 720px;
		background-color: white;
		box-shadow: 3px rgba(0,0,0,0.3);
		display: flex;
		flex-direction: column;
		padding-left: 33.33px;
		padding-right: 33.33px;
		padding-bottom: 20px;
		padding-top: 20px;
		margin-left: 15px;
		margin-top: 15px;
		height: 200px;
	}

	.available-sizes{
		font-weight: bold;
		font-size: 30px;
		padding-bottom: 20.px;
	}

	.sizes-holder{
		display: flex;
		flex-direction: row;
		padding-top: 10px;
		padding-bottom: 10px;
		width: 750px;
	}

	.size-block{
		height : 80px;
		width: 80px;
		border-style : solid;
		border-width: 2px;
		border-color: grey;
		margin-right: 30px;
		text-align: center;
		justify-content: center;
		align-items: center;
		font-size: 30px;
		color: grey;
	}

	.product-quantity{
		width: 720px;
		background-color: white;
		box-shadow: 3px rgba(0,0,0,0.3);
		display: flex;
		flex-direction: row;
		padding-left: 33.33px;
		padding-right: 33.33px;
		padding-bottom: 20px;
		padding-top: 20px;
		margin-left: 15px;
		margin-top: 15px;
		height: 133px;
	}
	
	.quantity-placeholder{
		flex : 4;
		align-items: center;
		flex-direction: row;
	}

	.quantity-button-holder{
		flex : 6;
		flex-direction: row;
		justify-content: flex-end;
	}

	.quantity-text{
		font-size: 60px;
	}

	.quantity-button {
		flex-direction: row;
	}

	.qbc{
		height : 80px;
		width: 80px;
		border-style : solid;
		border-width: 2px;
		border-color: grey;
		margin-right: 30px;
		text-align: center;
		justify-content: center;
		align-items: center;
		font-size: 30px;
		color: white;
		background-color: grey;
		margin-right: 0px;
	}
	.qbn{
		height : 80px;
		width: 100px;
		border-style : solid;
		border-width: 2px;
		border-color: grey;
		margin-right: 30px;
		text-align: center;
		justify-content: center;
		align-items: center;
		font-size: 30px;
		color: grey;
		background-color: white;
		margin-right: 0px;
	}

	.quantity-minus {
		border-bottom-left-radius: 50px;
	    border-top-left-radius: 50px
	}

	.quantity-plus{
		border-bottom-right-radius: 50px; 
	    border-top-right-radius: 50px
	}

	.detailed{
		width: 750px;
		height: 500px;
		background-color: white;
		display: flex;
		flex: 1;
	}
	.pc{
		font-size: 60px;
		color: white;
	}

	.product-d{
		width: 720px;
		background-color: red;
		box-shadow: 3px rgba(0,0,0,0.3);
		display: flex;
		flex-direction: column;
		flex: 1;
		padding-left: 33.33px;
		padding-right: 33.33px;
		padding-bottom: 200px;
		padding-top: 20px;
		margin-left: 15px;
		margin-top: 15px;
	}

</style>