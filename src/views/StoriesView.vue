<template>
  <div class="stories-view" append="tree">
    <div class="header">
        <div class="search">
            <image class="search-icon" src="http://www.clker.com/cliparts/n/U/H/1/H/u/search-icon-white-one-md.png"></image>
            <text class="app-header-title">Walkins Nearby</text>
        </div>
    </div>
    <div class="scroller">
      <router-view style="flex:1"></router-view>
    </div>
  </div>
</template>

<style type="text/css" scoped>
  
  .stories-view{
    display: flex;
    flex-direction: column;
  }
  .header{
    width: 750px;
  }
  .search{
    height: 110px;
    width: 750px;
    background-color: #1976D2;
    text-align: center;
    color: white;
  }

  .scroller{
    flex: 1;
    width: 750px;
    background-color: lightgrey;
  } 

  .search-icon{
    height: 40px;
    width: 40px;
    position: absolute;
    right: 30px;
    top: 30px;
  }

  .app-header-title{
    position: absolute;
    left: 200px;
    right: 0;
    top: 20px;
    font-size: 50px;
    color: white;
  }

  
</style>