<template>
  <div class="page-wrapper">
    <div class="contents">
      <input @input="doUpdate" class="input-name" placeholder="本名入れてね">
      <router-link to="/Gacha" class="link-area">
        <div class="entry-button">
          ガチャを回す
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EntryForm',
  computed: {
    fullName() {
      return this.$store.getters.fullName;
    },
  },
  methods: {
    doUpdate(event) {
      this.$store.dispatch('doUpdate', event.target.value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.entry-button {
  border: 1px solid #777;
  width: 250px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  border-radius: 4px;
}

.input-name {
  margin: 20px 0;
  padding: 0 20px;
  font-size: 14px;
  width: 250px;
  height: 40px;
  border: 2px solid #777;
  border-radius: 4px;
}
</style>
