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
  font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "メイリオ", sans-serif;
  font-weight: 500;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-color: #8e5d4b;
  height: 100%;
}

.fwb {
  font-weight: bold;
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

h1, h2 {
  font-size: 100%;
  margin: 0;
  padding: 0;
}
</style>
