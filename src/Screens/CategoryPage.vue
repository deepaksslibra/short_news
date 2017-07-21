<template>
	<div style="flex:1">
		<app-header></app-header>
		<viewpager   primaryColor="#ffffff" tabMode="scrollable" tabSelectedTextColor="#EC1838" 	tabSelectedIndicatorColor="#EC1838" tabBaseTextColor="#d3d3d3">
			<mypageitem v-for="(item,index) in categories" :key="item.name" :title="item.name" style="background-color: #FFF; position: absolute; top: 0; bottom: 0;">
				<scroller style="flex:1">
					<recommended append="node"></recommended>
				</scroller>	
			</mypageitem>

			<!-- <mypageitem title="Page 2" style="background-color: #FFF; position: absolute; top: 0; bottom: 0;">
				<text>Page 2</text>
			</mypageitem>
		
			<mypageitem title="Page 3" style="background-color: #FFF; position: absolute; top: 0; bottom: 0;">
				<text>Page 3</text>
			</mypageitem>
			<mypageitem title="Page 4" style="background-color: #FFF; position: absolute; top: 0; bottom: 0;">
				<text>Page 4</text>
			</mypageitem>
			<mypageitem title="Page 5" style="background-color: #FFF; position: absolute; top: 0; bottom: 0;">
				<text>Page 5</text>
			</mypageitem>
			<mypageitem title="Page 6" style="background-color: #FFF; position: absolute; top: 0; bottom: 0;">
				<text>Page 6</text>
			</mypageitem>
			<mypageitem title="Page 7" style="background-color: #FFF; position: absolute; top: 0; bottom: 0;">
				<text>Page 7</text>
			</mypageitem>
			<mypageitem title="Page 8" style="background-color: #FFF; position: absolute; top: 0; bottom: 0;">
				<text>Page 8</text>
			</mypageitem>
			<mypageitem title="Page 9" style="background-color: #FFF; position: absolute; top: 0; bottom: 0;">
				<text>Page 9</text>
			</mypageitem>
			<mypageitem title="Page 10" style="background-color: #FFF; position: absolute; top: 0; bottom: 0;">
				<text>Page 10</text>
			</mypageitem> -->
		</viewpager>
	</div>		
</template>

<script type="text/javascript">
	import Header from '../components/header.vue'
	import Recommended from '../components/recommended.vue'
	export default{
		data() {
			return {
				tobepassed : {
					name : this.$route.params.name,
					isMenu : false,
					isactive : true,
				},
				categories : [
								{ name : "Tv", imgUrl : "https://uploader-assets.s3.ap-south-1.amazonaws.com/tv.png",color:"#ff0000",border : "8px"},
								{ name : "Oven", imgUrl : "https://uploader-assets.s3.ap-south-1.amazonaws.com/oven.png",color:"#000000",border : "0px"},
								{ name : "Washing Machine", imgUrl : "https://uploader-assets.s3.ap-south-1.amazonaws.com/washing%20machine.png",color:"#000000",border : "0px"},
								{ name : "Fridge", imgUrl : "https://uploader-assets.s3.ap-south-1.amazonaws.com/fridge.png",color:"#000000",border : "0px"},
								{ name : "Tv", imgUrl : "https://uploader-assets.s3.ap-south-1.amazonaws.com/tv.png",color:"#000000",border : "0px"},
								{ name : "Oven", imgUrl : "https://uploader-assets.s3.ap-south-1.amazonaws.com/oven.png",color:"#000000",border : "0px"},
								{ name : "Washing Machine", imgUrl : "https://uploader-assets.s3.ap-south-1.amazonaws.com/washing%20machine.png",color:"#000000",border : "0px"},
								{ name : "Fridge", imgUrl : "https://uploader-assets.s3.ap-south-1.amazonaws.com/fridge.png",color:"#000000",border : "0px"},
								{ name : "Tv", imgUrl : "https://uploader-assets.s3.ap-south-1.amazonaws.com/tv.png",color:"#000000",border : "0px"},
								{ name : "Oven", imgUrl : "https://uploader-assets.s3.ap-south-1.amazonaws.com/oven.png",color:"#000000",border : "0px"},
								{ name : "Washing Machine", imgUrl : "https://uploader-assets.s3.ap-south-1.amazonaws.com/washing%20machine.png",color:"#000000",border : "0px"},
								{ name : "Fridge", imgUrl : "https://uploader-assets.s3.ap-south-1.amazonaws.com/fridge.png",color:"#000000",border : "0px"},
								{ name : "Tv", imgUrl : "https://uploader-assets.s3.ap-south-1.amazonaws.com/tv.png",color:"#000000",border : "0px"},
								{ name : "Oven", imgUrl : "https://uploader-assets.s3.ap-south-1.amazonaws.com/oven.png",color:"#000000",border : "0px"},
								{ name : "Washing Machine", imgUrl : "https://uploader-assets.s3.ap-south-1.amazonaws.com/washing%20machine.png",color:"#000000",border : "0px"},
								{ name : "Fridge", imgUrl : "https://uploader-assets.s3.ap-south-1.amazonaws.com/fridge.png",color:"#000000",border : "0px"},
							 ],
			}
		},
		components : {
			'app-header' : Header,
			'recommended' : Recommended
		},
		methods: {
		    back: function () {
		      this.$router.back()
		    },
		    dothis : function(event) {
		      console.log(event.target);
		      for(var i=0;i<=this.categories.length;i++){
			      if(this.categories[i].color == "#ff0000")
			      {
			      	this.categories[i].color = "#000000";	
			        this.categories[i].border = "0px";
			      }
			      console.log("despacito",event.target);
			      this.categories[event.target.attr.id].color = "#ff0000";	
		      	  this.categories[event.target.attr.id].border = "8px"; 	
		   	   }
		    },
		    swipe : function(){
		    	console.log("swipe detected");
		    }
			
		},

	}
</script>

<style>
	.slider-sub-text{
		padding-top: 20px;
		padding-left: 20px;
		padding-right: 20px;
		/*padding-bottom: 10px;*/
		font-size: 30px;
		text-align: center;
		color: #b0b0b0;
		border-bottom-style: solid;
		border-bottom-color : red;
		height: 70px;
	}
	
	.scroller{
	  flex-direction : row;
	  height: 80px;
	}
	
	.slider-sub{
	  display : flex;
	  flex-direction : row;
	  align-items : center;
	  /*height : 100px;*/
	  background-color : white;
	  box-shadow: 3px rgba(0,0,0,0.12);

	}
	
	.slider-padding{
		padding-left: 20px;
		padding-right: 20px;
		padding-bottom: 10px;
	}
	.swipe{
		display: flex;
		flex: 1;
		background-color: lightgrey;
	}
</style>