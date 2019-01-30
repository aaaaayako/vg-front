<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Result</h2>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'Result',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
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
