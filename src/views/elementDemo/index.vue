<template>
	<div>
		<h4>开始写组建</h4>
		<h5>Layout 布局</h5>
	<el-row>
	  <el-col :span="24"><div class="grid-content bg-purple-dark">就离开家了</div></el-col>
	</el-row>
	<el-row>
	  <el-col :span="12"><div class="grid-content bg-purple">有一回合</div></el-col>
	  <el-col :span="12"><div class="grid-content bg-purple-light">婆婆看哦</div></el-col>
	</el-row>
	<el-row>
	  <el-col :span="8"><div class="grid-content bg-purple">回复价格</div></el-col>
	  <el-col :span="8"><div class="grid-content bg-purple-light">固元膏不加班机会</div></el-col>
	  <el-col :span="8"><div class="grid-content bg-purple">亏欧哦</div></el-col>
	</el-row>
	<el-row>
	  <el-col :span="6"><div class="grid-content bg-purple el-icon-caret-right">就会看看和吧</div></el-col>
	  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
	  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
	</el-row>
	<el-row>
	  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
	  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
	  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
	</el-row>


	<el-button type="primary" icon="edit"></el-button>
	<el-button type="primary" icon="share"></el-button>
	<el-button type="primary" icon="delete"></el-button>
	<el-button type="primary" icon="search">搜索</el-button>
	<el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
	</div>
</template>
<script>
	
</script>
<style>
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