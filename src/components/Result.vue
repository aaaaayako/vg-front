<template>
  <div class="page-wrapper">
    <div class="contents">
      <p class="prize-winner">{{ fullName }}さんの当選者はこの人！</p>
      <p class="frame">{{ prizeWinner }}さん</p>
      <p class="slack-desc">さあ、当選者にはslackをもう送っているよ！<br>早速やりとりを初めてね</p>
      <router-link to="/" class="top-button">Home</router-link>
    </div>
  </div>
</template>

<script>
import store from '../store/';

export default {
  name: 'Result',
  computed: {
    prizeWinner() {
      return store.getters.prizeWinner;
    },
    fullName() {
      return store.getters.fullName;
    },
  },
  methods: {
    post() {
      this.$store.dispatch('post', store.getters.fullName);
    },
  },
  beforeMount() {
    this.post();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-weight: normal;
}

.prize-winner {
  padding: 20px 0;
}

.frame {
  border: 1px solid #2c3e50;;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center
}

.slack-desc {
  width: 220px;
  margin: 40px auto;
  line-height: 1.8;
}

.top-button {
  width: 100px;
  height: 40px;
  border: 1px solid #2c3e50;;
  border-radius: 4px;
  text-decoration: none;
  color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.top-button:hover {
  color: #fff;
  background-color: #2c3e50;;
}
</style>
