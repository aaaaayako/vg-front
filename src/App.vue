<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'normalize.css';

export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.page-wrapper {
  padding: 20px;
  max-width: 375px;
  margin: 50px auto;
}
</style>
