<template>
	<div id="indexDemo">
		<h4>html5 拖放功能</h4>
    <div>
      <p>可以尝试将图片拖拽到方框里</p>
      <div class="box1"></div>
      <img id="drag1" src="../../assets/eg_dragdrop_w3school.gif" alt="just a picture" draggable="true">
    </div>
	</div>
</template>
<script>
	export default{
    name:'drag',
    data(){
      return{}
    },
    created(){

    },
    methods:{
      allowDrop(ev){
        console.log(1);
        ev.preventDefault();
      },
      drag(ev){
        console.log(2);
        ev.dataTransfer.setData("Text",ev.target.id);
      },
      drop(ev){
        console.log(3);
        ev.preventDefault();
        var data=ev.dataTransfer.getData("Text");
        ev.target.appendChild(document.getElementById(data));
      }
    }
  }
</script>
<style>
  .box1{
    width:200px;
    height:100px;
    border:1px solid black;
    margin:20px 0;
  }
	#indexDemo{
		margin-left:250px;
	}
	.el-row {
		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","Microsoft YaHei",Arial,sans-serif;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>