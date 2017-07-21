<template>
    <verticalpager primaryColor="#000000" statusBarColor="#191919">
      <pageitem style="background-color: #fff; position: absolute; top: 0; bottom: 0;">
	      <div class="pager-items">
		      <image class="image-i" src="http://sim02.in.com/4fc598f2c9f2c0cdc5e0decc188d8d10_ft_xl.jpg"></image>
		      <text class="text">This</text>
		  </div>
      </pageitem>
      <pageitem style="background-color: #fff; position: absolute; top: 0; bottom: 0;">
	      <div class="pager-items">
		      <image class="image-i" src="http://sim02.in.com/4fc598f2c9f2c0cdc5e0decc188d8d10_ft_xl.jpg"></image>
		      <text class="text">This</text>
		  </div>
      </pageitem>
    </verticalpager>
</template>

<script> 

  module.exports = {  
      data: {
      	lists: ["This", "Is", "An", "Example", "ListView", "That", "You", "Can", "Scroll", ".", "It", "Shows", "How", "Any", "Scrollable", "View", "Can", "Be", "Included", "As", "A", "Child", "Of", "SlidingUpPanelLayout"]
      },
      methods: {
      }
  }
</script>

<style>
	.pager-items {
		flex:1;
		width: 750px;

	}
	.image-i {
	   height: 400px;
	   width: 750px;
	}
	.text {
	  color: #000000;
	  font-size: 35px;
	  height: 400px;
	  width: 750px;
	  padding: 10px;
	  margin-top: 20px;
	}
</style>