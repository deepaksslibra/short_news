<template>
  <div class="stories-view" append="tree">
    <div class="header">
        <div id="searchBar" class="search">
            <image class="search-icon" src="http://www.clker.com/cliparts/n/U/H/1/H/u/search-icon-white-one-md.png" @click="showSearch"></image>
            <text class="app-header-title">Walkins Nearby</text>
        </div>
<!--         <div v-if="search" class="search-inputOverlay">
            <input class="input" type="text" placeholder="search.."></input>
        </div> -->
        <input @input="handleInput" v-model="inputVal" v-if="search" class="input" type="text" placeholder="search.."></input>
        <image v-if="search" @click="hideSearch" class="search-back" src="https://uploader-assets.s3.ap-south-1.amazonaws.com/black-icon.png"></image>
        <image @click="handleCrossClick" v-if="search && cross" class="search-cross" src="https://image.flaticon.com/icons/png/128/59/59836.png"></image>
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
    right: 40px;
    margin-right: 30px; 
    margin-left: 30px;
    margin-top: 30px;
    margin-bottom: 30px;
    top: 2px;
  }

  .app-header-title{
    position: absolute;
    left: 200px;
    right: 200px;
    top: 20px;
    font-size: 50px;
    color: white;
  }

  .input{
    width: 750px;
    height: 110px;
    top: 0px;
    left: 0px;
    background-color: white;
    position: absolute;
    z-index: 999;
    padding-left: 125px;
    font-size: 45px;
    padding-right: 125px;
  }

  .search-inputOverlay{
    position: absolute;
    z-index: 10000;
    width: 750px;
    height: 110px;
  }

  .search-back{
    position: absolute;
    top: 6px;
    left: 5px;
    height: 40px;
    width: 40px;
    z-index: 1000;
    margin-right: 30px; 
    margin-left: 30px;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .search-cross{
    position: absolute;
    top: 10px;
    right: 40px;
    height: 30px;
    width: 30px;
    z-index: 1000;
    margin-right: 30px; 
    margin-left: 30px;
    margin-top: 30px;
    margin-bottom: 30px;    
  }
  
</style>


<script type="text/javascript">
  export default {
    data : function() {
      return {
        search : false,
        cross : false,
        isCrossClicked : false,
        inputVal : "",
        timeout : null
      }
    },
    methods : {
      showSearch : function(){
        console.log("search Clicked !!!");
        this.search = true;
      },
      hideSearch : function(){
        this.search = false;
        if(this.inputVal!='')
        this.$root.$emit('get-query-data','')
      },
      handleInput : function(event) {
        var eve = event;
        var self = this;
        clearTimeout(this.timeout);
        console.log(eve.value);
        if(eve.value.length > 0) {
          this.cross = true;
        }
        else {
          this.cross = false;
        }
        this.timeout = setTimeout(function () {
            console.log('Input Value:',eve.value);
            if(eve.value.length!=0)
            self.$root.$emit('get-query-data',eve.value)
            else
            self.$root.$emit('get-query-data','')  
        }, 700);

      },
      handleCrossClick : function() {
        this.cross = false;
        this.isCrossClicked = true;
        // this.handleInput();
        this.inputVal = '';
        this.$root.$emit('get-query-data','')
      }
    },
    mounted : function() {
      if(this.$root.$data.currentSearchTerm.length>0){
        if(this.$root.$data.redirectFromDetail)
        {
          this.search = true;
          this.inputVal = this.$root.$data.currentSearchTerm;
        }
      }
    },
    destroyed : function() {
      this.$root.$data.currentSearchTerm = this.inputVal;
    }
  } 
</script>