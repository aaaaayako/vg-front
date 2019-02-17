<template>
  <div class="entry-form-container contents">
    <div class="contents-container">
      <div class="entry-form-wrapper">
        <h1>
          <img src="../assets/choco-presenter-title.png" alt="チョコをあげたい！あなた" width="240" height="106">
        </h1>
        <p class="choco-presenter-desc">とっても親切なあなた・・・<br>あなたの事を教えてね♡</p>
        <label for="full-name">フルネーム</label>
        <input @input="doUpdate" id="full-name" class="input-name" placeholder="ex) 荒川涼太">
        <router-link to="/Gacha" class="link-area">
          <div class="entry-button">
            ガチャを回す
          </div>
        </router-link>
      </div>
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
.entry-form-container {
  margin: 0 auto;
  color: #412929;
}

.entry-form-wrapper {
  padding: 60px;
  margin: 0 auto;
}

.choco-presenter-desc {
  line-height: 1.7;
  padding: 44px 0;
}

.entry-button {
  background-color: #8e5d4b;
  border-radius: 12px;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  width: 314px;
  height: 46px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-name {
  margin: 12px 0 20px;
  padding: 0 20px;
  font-size: 14px;
  width: 314px;
  height: 46px;
  border: 1px solid #b4b4b4;
  border-radius: 12px;
  text-align: center;
  box-sizing: border-box;
}
</style>
