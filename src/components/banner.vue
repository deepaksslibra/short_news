<template>
  <div>
    <slider class="slider" interval="4500" @change="onchange">
      <div class="frame" v-for="img in imageList">
        <image class="banner-image" resize="cover" :src="img.src"></image>
        <text class="banner-category">{{img.title}}</text>
        <text class="banner-description">{{img.subtitle}}</text>
      </div>
      <indicator class="indicator"></indicator>
    </slider>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        imageList: [
          { title: 'Green Banner', subtitle : 'This is Green Banner Downloaded From Internet', src: 'http://www.mill.prevenge.com/Troll/Contents_of_Troll_zip_Archive/MYTH/TEXTURES/bungie%20textures/Dark%20Grass%203.gif'},
          { title: 'Red Banner', subtitle : 'This is Red Banner Downloaded From Internet', src: 'http://orig00.deviantart.net/8998/f/2014/286/e/6/imvu_cherry_hair_texture_by_inyctophobia-d82qe3y.jpg'},
          { title: 'Blue Banner', subtitle : 'This is Blue Banner Downloaded From Internet', src:'http://static1.grsites.com/archive/textures/dblue/dblue166.jpg'},
          { title: 'Brown Banner', subtitle : 'This is Brown Banner Downloaded From Internet', src: 'http://www.simonoc.com/images/artwork/tpmedieval/woodplank_1a.gif'}
        ]
      }
    },
    methods: {
      onchange (event) {
        console.log('changed:', event.index)
      }
    }
  }
</script>

<style scoped>
  .banner-image {
    width: 750px;
    height: 334px;  
  }
  .slider {
    width: 750px;
    height: 334px;
  }
  .banner-category {
    position: absolute;
    bottom: 80px;
    width: 750px;
    color: #FFFFFF;
    font-size: 25px;
    text-align: center;
    color : rgb(255,0,0);
  }
  .banner-description {
    position: absolute;
    bottom: 50px;
    width: 750px;
    color: #dddddd;
    font-size: 18px;
    text-align: center;
  }
  .frame {
    width: 750px;
    height: 334px;
    position: relative;
  }
  .indicator {
    position: absolute;
    width: 750px;
    height: 320px;
    top: 160px;
    left: 0px;
    itemColor: #666666;
    itemSelectedColor: #ffffff;
    itemSize : 10px;
  }
</style>
