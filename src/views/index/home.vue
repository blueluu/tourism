<template>
  <div>
 
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



