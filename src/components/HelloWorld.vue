<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ msg1 }}</h2>
    <router-link to="/eleindex">{{ msg2 }}</router-link>
  </div>
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
</style>
