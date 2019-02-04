<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'normalize.css';
import store from './store/';

export default {
  name: 'App',
  store,
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

.contents {
  text-align: center;
}

.link-area {
  text-decoration: none;
  color: #2c3e50;
  margin: 0 auto;
}
</style>
