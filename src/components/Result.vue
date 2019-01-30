<template>
  <div class="page-wrapper">
    <div class="contents">
      <p>{{ fullName }}</p>
      <router-link to="/">Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Result',
  computed: {
    fullName() {
      return this.$store.getters.fullName;
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
