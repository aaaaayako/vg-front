<template>
  <div class="result-container contents">
    <div class="contents-container">
      <div class="result-wrapper">
        <div class="frame">
          <ul>
            <li v-for="(person, index) in prizeWinner" class="prize-winner" :key="index">{{ person }}さん</li>
          </ul>
        </div>
        <p class="slack-desc">さあ、当選者にはslackをもう送っているよ！<br>早速やりとりを初めてね♡</p>
        <a v-bind:href="channelUrl" class="top-button link-area">slackへ</a>
        <router-link to="/" class="top-button link-area">topへ</router-link>
      </div>
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
    channelUrl() {
      return store.getters.createdChannelUrl;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul, li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.result-container {
  margin: 0 auto;
  color: #412929;
}

.result-wrapper {
  padding: 60px;
}

.frame {
  border: 4px solid #ffaf9b;
  border-radius: 20px;
  max-width: 384px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 52px 0 26px;
  position: relative;
}

.frame::after {
  content: '';
  width: 170px;
  height: 52px;
  position: absolute;
  top: -26px;
  left: 50%;
  margin-left: -85px;
  background-image: url(../assets/prize-winner-hart.png);
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 10;
}

.prize-winner {
  font-size: 24px;
  font-weight: bold;
}

.slack-desc {
  max-width: 358px;
  margin: 40px auto;
  line-height: 1.8;
  font-size: 16px;
}

.top-button {
  background-color: #8e5d4b;
  border-radius: 12px;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  width: 314px;
  height: 46px;
  margin: 20px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
