<template>
  <div>
    <router-link to="/elementDemo">{{towhere}}</router-link>
    <h5>尝试连接接口</h5>
  	<div>{{homeData}}</div>
  </div>
</template>
<script>
  import API from '../../apiMapping/api.js';
  export default {
    name:'home',
    data() {
      return {
      	homeData:[],
      	towhere:'组件'
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
      		returnData = eval(returnData)
      		if(returnData.status == 200){
      			self.homeData = returnData.data;
      		}
      	});
      }
    }
  }
</script>


