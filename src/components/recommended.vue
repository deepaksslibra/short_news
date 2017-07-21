<template>
	<div class="rec-container">
	  <div class="rec-heading">
	  		<text class="rec-heading-text" style="font-size:25px;text-align:left;">Recommendations</text>
	  </div>
	  <!-- <list class="list"> -->
	    <div class="cell" v-for="item in lists">
	      <div class="panel">
	        <div @click="$router.push('/product/'+item.productName+'')" class="panel-left">
	        	<text class="product-name">{{item.productName}}</text>
	        	<text class="product-description">{{item.productDescription}}</text>
	        	<text class="product-price">{{item.productPrice}}</text>
	        </div>
	        <div class="panel-right">
	        	<image class="product-image" :src="item.src"></image>
	        </div>
	      </div>
	    </div>
	  <!-- </list> -->
	</div>  
</template>
<script>
  export default {
    data () {
      return {
        lists: [
        	{
        		productName : "Voltas Ac",
        		productDescription : "Lorem Ipsum",
        		productPrice : "Rs. 20000",
        		src : "http://www.lg.com/in/images/window-ac/lwa6cp1f/gallery/medium.jpg"
        	},
        	{
        		productName : "Voltas Fan",
        		productDescription : "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
        		productPrice : "Rs. 2000",
        		src : "https://www.compareprix.in/images/resizeimages/product/128/Orient%20Summer%20King%20Glossy%201400mm%203%20Blade%20Ceiling%20Fan%20large.jpeg?v=72"
        	},
        	{
        		productName : "Lg Tv",
        		productDescription : "Lorem Ipsum",
        		productPrice : "Rs. 10000",
        		src : "https://www.android.com/static/2016/img/devices/tvs/transparent/sony-bravia_1x.png"
        	},
        	{
        		productName : "Lg Fridge",
        		productDescription : "Lorem Ipsum",
        		productPrice : "Rs. 15000",
        		src : "http://images.samsung.com/is/image/samsung/p5/uk/pcd/ha/rt43h5321.png?$ORIGIN_PNG$"
        	},
        	{
        		productName : "Lg Oven",
        		productDescription : "Lorem Ipsum",
        		productPrice : "Rs. 15000",
        		src : "http://www.homedepot.com/hdus/en_US/DTCCOMNEW/fetch/Category_Pages/Appliances/Cooking/wall-oven.jpg"
        	},
        	{
        		productName : "Lg Fridge",
        		productDescription : "Lorem Ipsum",
        		productPrice : "Rs. 15000",
        		src : "http://images.samsung.com/is/image/samsung/p5/uk/pcd/ha/rt43h5321.png?$ORIGIN_PNG$"
        	},
          {
            productName : "Lg Fridge",
            productDescription : "Lorem Ipsum",
            productPrice : "Rs. 15000",
            src : "http://images.samsung.com/is/image/samsung/p5/uk/pcd/ha/rt43h5321.png?$ORIGIN_PNG$"
          },
          {
            productName : "Lg Fridge",
            productDescription : "Lorem Ipsum",
            productPrice : "Rs. 15000",
            src : "http://images.samsung.com/is/image/samsung/p5/uk/pcd/ha/rt43h5321.png?$ORIGIN_PNG$"
          },{
            productName : "Lg Fridge",
            productDescription : "Lorem Ipsum",
            productPrice : "Rs. 15000",
            src : "http://images.samsung.com/is/image/samsung/p5/uk/pcd/ha/rt43h5321.png?$ORIGIN_PNG$"
          },
          {
            productName : "Lg Fridge",
            productDescription : "Lorem Ipsum",
            productPrice : "Rs. 15000",
            src : "http://images.samsung.com/is/image/samsung/p5/uk/pcd/ha/rt43h5321.png?$ORIGIN_PNG$"
          }
        ]
      }
    }
  }
</script>
<style scoped>
  /*s*/
  .panel {
    width: 720px;
    height: 175px;
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
  .panel-left{
  	flex: 7;
  	flex-direction: column;
  	justify-content: space-between;
  }
  .panel-right{
  	flex: 3;
  	flex-direction: column;
  	justify-content: center;
  	align-content: center;
  }
  .product-image{
  	height: 150px;
  	width: 150px;
  }

  .product-name{
  	font-size: 29.166px;
  	color: #696969;
  }

  .product-description {
  	font-size: 25px;
  	color: #696969;
  }

  .product-price{
  	font-size: 29.166px;
  	color: #2a2a2a;
  }

  .rec-heading{
  	height: 66.66px;
  	display: flex;
  	flex-direction: column;
  	justify-content: center;
  	align-items: flex-start;
  	background-color: #ededed;
  	padding-left: 45px;
  }
  .rec-heading-text{
  	font-size: 25px;
	color: #939393;
	font-weight: bold;
  }

  .rec-container{
  	background-color: #ededed;
  }

</style>
