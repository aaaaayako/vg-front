<template>
  <div class="entry-form-container contents">
    <div class="contents-container">
      <div class="entry-form-wrapper">
        <h1>
          <img src="../assets/choco-presenter-title.png"
          alt="チョコをあげたい！あなた"
          width="240"
          height="106">
        </h1>
        <p class="choco-presenter-desc">とっても親切なあなた・・・<br>あなたの事を教えてね♡</p>
        <div>
          <label for="full-name">フルネーム</label>
          <input @input="doUpdate" id="full-name" class="input-text" placeholder="ex) 荒川涼太">
        </div>
        <div>
          <label for="choco-number">余っているチョコの数</label>
          <div class="select-num">
            <select v-model="selectedNum" id="choco-number" class="input-text">
              <option class="option" v-for="n in 100" :value="n" :key="n">{{ n }}</option>
            </select>
          </div>
        </div>
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
  data() {
    return {
      selectedNum: 1,
    };
  },
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
  font-size: 16px;
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

.input-text {
  margin: 12px 0 20px;
  padding: 0 20px;
  font-size: 14px;
  width: 314px;
  height: 46px;
  border: 1px solid #b4b4b4;
  border-radius: 12px;
  text-align: center;
  box-sizing: border-box;
  background-color: #fff;
}

select {
  width: 400px;
  text-align-last: center;
  -webkit-appearance: none;
  -webkit-border-radius: 0px;
  border-radius: 12px;
  position: relative;
}

select:hover {
  cursor: pointer;
}

.select-num {
  position: relative;
}

.select-num::after {
  content: '';
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #412929;
  position: absolute;
  top: 32px;
  right: 56px;
  z-index: 10;
}
</style>
