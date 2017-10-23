<template>
  <div>
    <router-link to="/elementDemo">{{towhere}}</router-link>
    <div class="back"><router-link to="/">{{back}}</router-link></div>
    <h5>尝试连接接口</h5>
    <h5>v-for 、 v-if练习</h5>
    <div v-for="(item,index) in homeData.data.cultureList" v-if="item.hits!=12">
      {{key}}.{{item.address}}
    </div>
  </div>
</template>
<script>
  import API from '../../apiMapping/api.js';
  export default {
    name:'home',
    data() {
      return {
      	homeData:{},
      	towhere:'组件',
        back:'主页'
      }
    },
    created(){
    	this.getContent();
    },
    methods:{
      getContent(){
      	let self = this;
      	let url = this.$store.state.baseUrl + API.index;
      	this.$ajax.post(url,{}).then(function(returnData){
      		// 返回的本来就是对象
      		if(returnData.status == 200){
      			self.homeData = returnData.data;
      		}
      	});
      }
    }
  }
</script>
<style>
.back{
  text-align: left;
}
</style>



