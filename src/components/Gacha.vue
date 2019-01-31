<template>
  <div class="page-wrapper">
    <div class="contents">
      <div>
        <p>{{ time }}</p>
        <img src="../assets/giphy.gif" alt="ガチャアニメーション" width="250" height="150">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gacha',
  data() {
    return { time: 3 };
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
</style>
