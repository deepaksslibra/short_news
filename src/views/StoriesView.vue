<template>
  <div class="stories-view" append="tree">
    <div id="header" class="header">
        <div ref="searchBar" id="searchBar" class="search">
            <div class="search-container" @click="onSearchClick">
              <image class="search-icon" src="http://www.clker.com/cliparts/n/U/H/1/H/u/search-icon-white-one-md.png"></image>
            </div>
            <text class="app-header-title">Walkins Nearby</text>
        </div>
        <input ref="inputBar" id="inputBar" @input="handleInput" v-model="inputVal" v-if="search" class="input" type="text" placeholder="search.."></input>
        <div v-if="search"  class="search-back-container" @click="hideSearch">
          <image class="search-back" src="https://uploader-assets.s3.ap-south-1.amazonaws.com/black-icon.png"></image>
        </div>
        <div v-if="search && cross" class="search-cross-container" @click="handleCrossClick"> 
          <image  class="search-cross" src="https://image.flaticon.com/icons/png/128/59/59836.png"></image>
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
  }

  .search-container{
    position: absolute;
    right: 40px;
    top: 10px;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 40px;
  }

  .search-container:active{
    background-color: #1566b6;
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
    height: 40px;
    width: 40px;
    z-index: 1000;
  }

  .search-back-container{
    position: absolute;
    top: 15px;
    left: 5px;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 40px;
  }

  .search-back-container:active{
    background-color: #cfcfcf;
  }

  .search-cross{
    height: 30px;
    width: 30px;
    z-index: 1000; 
  }

  .search-cross-container {
    position: absolute;
    top :  20px;
    right: 15px;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 40px; 
  }

  .search-cross-container:active{
    background-color: #cfcfcf;
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
        timeout : null,
        isActive : false,
      }
    },
    methods : {
      hideSearch : function(event){
        console.log(" despacito is ",this.$refs.inputBar);
        this.$refs.inputBar.blur();
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
      onSearchClick : function() {
        this.search = true;
        this.isActive = true;
        var myVar = setInterval(function(){ myTimer() }, 100);
        var self = this;
        function myTimer() {
            if(self.$refs.inputBar){
              console.log(" despacito is ",self.$refs.inputBar);
              self.$refs.inputBar.focus();
              clearInterval(myVar);
            }
        }
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