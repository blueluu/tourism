<template>
  <!-- <div class="hello"> -->
    <div>
    <el-row class="tac">
  <el-col :span="8">
    <h5>带 icon</h5>
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-submenu index="1" class="html5style">
        <template slot="title"><i class="el-icon-message"></i>html5 学习之旅</template>
        <el-menu-item-group>
          <el-menu-item index="1"><router-link to="/elementDemo">拖放</router-link></el-menu-item>
          <el-menu-item index="2"><router-link to="/GeolocationDemo">地理定位</router-link></el-menu-item>
          <el-menu-item index="3"><router-link to="/Webworker">web worker</router-link></el-menu-item>
          <el-menu-item index="4">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
    </el-menu>
  </el-col>
    </el-row>
    <!-- <router-link to="/eleindex">{{ msg2 }}</router-link> -->
    <router-view/>
  </div>
    
  <!-- </div> -->
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      msg1: '我是模仿饿了么来的',
      msg2: '开启饿了么之旅'
    }
  },
  methods:{
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.el-menu{
  position:fixed;
  top:0;
  left:0;
  width:230px;
  height:100%;
  padding-top:30px;
}
.html5style{
  display:block;
  margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
