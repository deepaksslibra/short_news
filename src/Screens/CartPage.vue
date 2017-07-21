<template>
	<div style="flex:1" append="tree">	
		<app-header></app-header>
		<div class="cart-total">
			<div class="total-message"><text class="total-message-text">20 items in the cart</text></div>
			<div class="total-count"><text class="total-count-text">Amount: Rs.22790</text></div>
		</div>	
		<scroller class="scroller" style="flex:1">
			<div class="product-list">
				<div v-for="n in 10" class="cart-product" append="tree">
					<div class="cart-product-info">
						<div class="cart-product-left"> 
							<text class="cart-product-brand">VOLTAS</text>
							<text class="cart-product-name">Voltas 155 CY 1.2 Ton 5 Star Split AC(White)</text>
							<div class="cart-product-price">
								<text class="cart-product-op">Rs.20000</text>
								<text class="cart-product-sp">29999</text>
							</div>
						</div>
						<div class="cart-product-right">
							<image  class="cart-product-image" src="http://images.samsung.com/is/image/samsung/p5/uk/pcd/ha/rt43h5321.png?$ORIGIN_PNG$"></image>
						</div>
					</div>	
					<div class="cart-product-down">
						<div class="cart-product-down-left">
							<text class="cart-product-remove">Remove  x</text>
							<div class="cart-product-down-colorHolder">	
								<text class="cart-product-down-colorText">Colour : </text>
								<div class="cart-product-down-colorBox"></div>
							</div>
							<text class="cart-product-down-size">Size : M</text>
						</div>
						<div class="cart-product-down-right">
								<div class="quantity-button-holder">
									<div class="quantity-button">
										<div class="quantity-minus qbc"><text style="color:white">-</text></div>
										<div class="quantity-number qbn"><text>1</text></div>
										<div class="quantity-plus qbc"><text style="color:white">+</text></div>
									</div>
								</div>
						</div>				
					</div>
				</div>
			</div>	
		</scroller>
		<div class="checkout-button">
			<text class="checkout-text">CHECKOUT</text>
		</div>
	</div>
</template>

<script scoped>
	import Header from '../components/header.vue'
	export default {
		data() {
			return {

			}
		},
		components: {
			'app-header' : Header
		}
	}
</script>

<style type="text/css">
		.scroller{
			flex-direction: column;
			width: 750px;
			background-color: white;
			padding-top: 20px;
		}
		.cart-total{
		    width: 720px;
		    height: 116.66px;
		    margin-left: 15px;
		    margin-right: 15px;
		    margin-bottom: 8.33px;
		    margin-top: 8.33px;
		    flex-direction: row;
		    justify-content: center;
		    padding-top: 25px;
		    padding-left: 25px;
		    padding-right: 25px;
		    padding-bottom: 25px;
		    background-color: #FFFFFF;
		    box-shadow: 3px rgba(0,0,0,0.12);
		}

		.product-list{
			padding-bottom: 200px;
		}

		.total-message{
			flex: 6;
			flex-direction: row;
			justify-content: center;
			align-items: center;
		}
		.total-count{
			flex : 4;
			justify-content: center;
			align-items: center;
		}
		.total-message-text{
			font-size: 40px;
		}
		.total-count-text{
			font-size : 30px;
		}
		.cart-product{
			/*height: 300px;*/
			width: 720px;
			margin-left: 15px;
			background-color: #ffffff;
			padding-top: 25px;
		    padding-left: 25px;
		    padding-right: 25px;
		    padding-bottom: 25px;
			box-shadow: 4px rgba(0,0,0,0.12);
			flex-direction: column;
			margin-top: 25px;
		}

		.cart-product-info{
			flex-direction: row;
		}
		.cart-product-left{
			flex: 7;
			flex-direction: column;
			align-items: flex-start;
		}
		.cart-product-right{
			flex: 3;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			background-color: #d3d3d3;
			padding-top: 25px;
			padding-bottom: 25px;
		}	

		.cart-product-image{
			height: 100px;
			width: 100px;
		}

		.cart-product-brand{
			font-size :  21px;
			padding-bottom: 10px;
		}

		.cart-product-name{
			font-size: 35px;
			padding-bottom: 10px;
		}

		.cart-product-op{
			font-size: 35px;
			font-weight: bold;
			padding-right: 30px;
			padding-bottom: 10px;
		}

		.cart-product-cp{
			font-size: 21px;
			color : red;
			text-decoration: line-through;
		}

		.cart-product-price{
			flex-direction: row;
		}

		.cart-product-down{
			display: flex;
			flex-direction: row;
			flex : 1;
			padding-top: 20px;
		}

		.cart-product-down-left{
			flex : 7;
			flex-direction: row;
			justify-content: space-between;
			align-items:  center;
		}

		.cart-product-down-right{
			flex : 3;
			flex-direction: row;
			justify-content: center;
		}

		.cart-product-down-colorBox{
			height: 40px;
			width: 40px;
			background-color: orange;
		}

		.cart-product-down-colorText{
			font-size: 30px;
		}

		.cart-product-down-size{
			font-size: 30px;
			padding-right: 20px;
		}

		.cart-product-down-colorHolder{
			flex-direction: row;
			align-items: center;
		}

		.cart-product-remove{
			color:  red;
			font-size: 30px;
			font-weight: bold;
		}

		.card-button-down-right{
			align-items: center;
			justify-content: center;
			flex-direction: row;
		}

		.quantity-text{
			font-size: 60px;
		}

		.quantity-button {
			flex-direction: row;
		}

		.qbc{
			height : 70px;
			width: 60px;
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
			height : 70px;
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

		.checkout-button{
			width: 400px;
			position: absolute;
			left: 175px;
			bottom: 50px;
			background-color: red;
			height: 100px;
			flex-direction: row;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 50px;
		}

		.checkout-text{
			color: white;
			font-size: 55px;
			box-shadow: 4px rgba(0,0,0,0.12);
		}
</style>