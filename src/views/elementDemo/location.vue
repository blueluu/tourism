<template>
  <div id="location">
      <p id="demo" @click="getLocation">点击这个按钮，获得您的坐标：</p>
      <div class="btn">获取定位</div>
      <div>{{sthtosay}}</div>
  </div>
</template>
<script>
export default {
  data(){
    return {
        location:'',
        sthtosay:'貌似也不支持地理定位'
    }
  },
  created(){

  },
  methods:{
    getLocation(){
        var self = this;
        if(navigator.geolocation){
            self.location = navigator.geolocation.getCurrentPosition();
        }else{
            self.location = "该浏览器不支持Geolocation";
        }
    }
  }
}
</script>
<style>
#location{
    margin-left:250px;
}
.btn{
    width: 100px;
    height: 30px;
    border-radius: 3px;
    border: 1px solid #f02928;
    text-align: center;
    line-height: 30px;
}
</style>


