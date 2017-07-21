<template>
	<div style="flex:1" append="tree">
		<app-header :data="tobepassed" @click="globalTouch"></app-header>
		<scroller @click="globalTouch" style="flex:1">
			<div class="payment-total">
				<text class="payment-total-text">YOU PAY</text>
				<text class="payment-total-price">Rs. 2279</text>
			</div>
			<div class="payment-options">
				<div class="payment-options-text-container">
					<text class="payment-options-text">Payment Options</text>
				</div>
				<div class="payment-options-container">
					<div @click="handleRadio" :ref="index" :id="index" v-for="(item,index) in options" class="option">
						<div class="radio-outer">
							<div :style="{ backgroundColor : item.color }" class="radio"></div>
						</div>
						<text class="option-text">{{item.name}}</text>
					</div>
				</div>
			</div>
			<div class="payment-order-summary">
				<div class="payment-order-summary-text-container">
					<text class="payment-order-summary-text">Order Summary</text>
				</div>
				<div class="payment-order-summary-container">
					<div class="total-cart-value">
						<text class="total-cart-value-text">Total Cart Value</text>
						<text class="total-cart-value-price">Rs. 2079</text>
					</div>
					<div class="delivery-charges">
						<text class="delivery-charges-text">Delivery Charges</text>
						<text class="delivery-charges-price">Rs. 200</text>
					</div>
					<div class="npa">
						<text class="npa-text">Net Payable Amount</text>
						<text class="npa-price">Rs. 2279</text>
					</div>
					<div class="change-order">
						<text class="change-adress">Change Address</text>
						<text class="change-schedule">Change Schedule</text>
					</div>
				</div>
			</div>
		</scroller>
		<div v-if="checkTouch" class="pay-button">
			<text class="pay-button-text">PAY</text>
		</div>	
	</div>
</template>

<script type="text/javascript">
	import Header from '../components/header.vue'
	export default {
		data() {
			return {
				tobepassed : {
					isSub : false,
					checkTouch : false,
					radioFirst : true
				},
				color : "hey",
				options : [	{
								name : "Cash On Delivery",
								color : "white"
							},
							{
								name : "Credit Card",
								color : "white"
							},
							{
								name : "Debit Card",
								color : "white"
							},
							{
								name : "Net banking",
								color : "white"
							}
						  ]
			}
		},
		components : {
			'app-header' : Header
		},
		methods : {
			handleRadio : function(event) {
				// console.log("despacito",event.target);
				this.checkTouch = true;
				if(this.radioFirst == true){
					this.options[event.target.attr.id].color = "red";
				}
				else {
					for(var i=0;i<=this.options.length;i++){
				      if(this.options[i].color == "red")
				      {
				      	this.options[i].color = "white";	
				      }
				      console.log("despacito",event.target.attr);
				      this.options[event.target.attr.id].color = "red";	
			   	   	}
			   	}   	
			},
			globalTouch : function(event){
				console.log(event.target);
			}
		}
	}
</script>

<style type="text/css">
	.payment-total{
		height : 116.66px;
		width: 720px;
		background-color: white;
		flex-direction: row;
		justify-content: space-between;
		/*padding-top: 20px;*/
		/*padding-right: 20px;*/
		padding-left: 30px;
		padding-right: 30px;
		margin-left: 15px;
		box-shadow: 10px rgba(0,0,0,0.12);
		margin-top: 15px;
		align-items: center;
	}

	.payment-total-text{
		text-align: left;
		font-size: 40px;
		flex: 1;
		align-items: center;
		flex-direction: row;
	}

	.payment-total-price{
		text-align: right;
		font-size: 40px;
		flex : 1;
		color: green;
		flex-direction: row;
		align-items: center;
	}

	.payment-options-text-container{
		padding-bottom: 25px;
		padding-left: 45px;
	}

	.payment-options-text{
		font-size: 30px;
		color: #696969;
		padding-top: 10px;
	}

	.payment-options-container{
		height: 466.66px;
		background-color: white;
		flex-direction: column;
		width: 720px;
		margin-left : 15px;
		box-shadow: 10px rgba(0,0,0,0.12);
		margin-bottom: 20px;
	}

	.payment-order-summary-text-container{
		padding-left: 45px;
		padding-top: 15px;
	}

	.payment-order-summary-text{
		font-size: 30px;
		color: #696969;
		padding-bottom: 10px;
	}

	.payment-order-summary{
		padding-bottom: 150px;
	}

	.payment-order-summary-container{
		height: 466.6px;
		background-color: white;
		padding-left: 45px;
		width: 720px;
		margin-left: 15px;
		padding-right: 45px;
		padding-top: 25px;
		padding-bottom: 25px;
		box-shadow: 10px rgba(0,0,0,0.12);
		margin-bottom: 20px;
	}

	.payment-options-cod{
		height: 116.66px;
		flex-direction: row;
		flex: 1;
		padding-left: 45px;
		align-items: center;
	}

	.radio {
		height: 40px;
		width: 40px;
		background-color: red;
		border-radius: 50px;
	}

	.radio-outer{
		height: 60px;
		width: 60px;
		border-style: solid;
		border-width: 5px;
		border-color: red;
		border-radius: 60px;
		justify-content: center;
		align-items: center;
		margin-right: 30px;
	}

	.option{
		height: 116.66px;
		padding-left: 45px;
		flex-direction: row;
		flex : 1;
		border-bottom-style: solid;
		border-bottom-color: lightgrey;
		border-bottom-width : 2px;
		align-items: center;
	}

	.option-text{
		font-size: 40px;
	}

	.total-cart-value{
		margin-bottom: 31.6px;
		flex-direction: row;
		justify-content: space-between;
	}

	.total-cart-value-text{
		font-size: 35px;
	}

	.total-cart-value-price{
		font-size: 35px;
	}

	.delivery-charges{
		margin-bottom: 31.6px;
		flex-direction: row;
		justify-content: space-between;
		padding-bottom: 31.6px;
		border-bottom-width: 1px;
		border-bottom-color: #d3d3d3;
		border-bottom-style: solid
	}

	.delivery-charges-text{
		font-size: 35px;
	}

	.delivery-charges-price{
		font-size: 35px;
	}		

	.npa{
		margin-bottom: 31.6px;
		flex-direction: row;
		justify-content: space-between;
		padding-bottom: 31.6px;
		border-bottom-width: 1px;
		border-bottom-color: #d3d3d3;
		border-bottom-style: solid
	}

	.npa-text{
		font-size: 35px;
		font-weight: bold;
	}

	.npa-price{
		font-size: 35px;
		color: green;
	}

	.change-order{
		flex-direction: row;
		justify-content: space-between;
		padding-bottom: 31.6px;
		padding-left : 20px;
		padding-right: 20px;
		margin-bottom: 20px;
	}

	.change-adress{
		font-size: 35px;
		color: green;
		font-weight: bold;
	}

	.change-schedule{
		font-size: 35px;
		color: green;
		font-weight: bold;
	}

	.pay-button{
		position: absolute;
		width: 400px;
		left: 175px;
		right: 0;
		bottom: 20px;
		padding-top: 20px;
		padding-left: 30px;
		padding-right: 30px;
		padding-bottom: 20px;
		background-color: red;
		border-radius: 50px;
		justify-content: center;
		align-items: center;
		box-shadow: 10px rgba(0,0,0,0.12);
		opacity: 0.9;
	}				

	.pay-button-text{
		font-size: 50px;
		color: white;
	}


</style> 