<template>
  <div>{{homeData}}</div>
</template>
<script>
  import API from '../../apiMapping/api.js';
  export default {
    name:'home',
    data() {
      return {
      	homeData:[]
      }
    },
    created(){
    	this.getContent();
    },
    methods:{
      getContent(){
      	let url = API.index;
        let host = process.env.API_HOST || 'ewatch.okayapps.com';
        let baseUrl = 'https://' + host + '/ecoapi';
        url = baseUrl + url;
      	this.$ajax.post(url,{},function(data){
      		console.log(data);
      		this.homeData = data;
      	})
      }
    }
  }
</script>


