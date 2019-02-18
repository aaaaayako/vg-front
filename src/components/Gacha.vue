<template>
  <div class="entry-form-container contents">
    <div class="contents-container">
      <div class="gif-wrapper">
        <img src="../assets/giphy.gif" alt="ガチャアニメーション" width="400" height="300">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gacha',
  data() {
    return { time: 4 };
  },
  created() {
    setInterval(() => { this.time -= 1; }, 1000);
  },
  watch: {
    time(limit) {
      if (limit <= 0) {
        this.$router.push('/Result');
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-weight: normal;
}

.gif-wrapper {
  padding: 80px 0;
}
</style>
