<template>
  <div class="">
    <div class="contents">
      <div class="title-bg">
        <img src="../assets/vg-logo.png" alt="バレンタインガチャ" width="224" height="108">
      </div>
      <div class="about-vg desc-bg">
        <img src="../assets/whats-vg.png" alt="what's valentine gacha" width="206" height="45">
        <p class="fwb">バレンタインガチャって？</p>
        <p class="description fwb">バレンタインガチャの概要のテキストが入るよ。<br>
        ここはプロの心の叫びを思いっきり書きたいね。<br>
        エモい文章入れてこう！
        </p>
      </div>
      <div class="choose-bg">
        <img src="../assets/choose.png" alt="choose" width="114" height="24">
        <p class="fwb">あなたはどっち？</p>
        <div class="button--box">
          <a href="https://slack.com/signin" class="link-area" target="_blank">
            <img src="../assets/btn_boy.png" alt="チョコが欲しい！" width="157" height="225">
          </a>
          <router-link to="/EntryForm" class="link-area">
            <img src="../assets/btn_girl.png" alt="チョコをあげたい！" width="157" height="225">
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title-bg {
  background-color: #ffefd1;
  padding: 32px 0 26px;
  position: relative;
}
.title-bg::after {
  content: '';
  width: 124px;
  height: 42px;
  position: absolute;
  bottom: -42px;
  left: 0;
  background-image: url(../assets/choco-white.png);
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 100;
}

.desc-bg {
  background-color: #ffaf9b;
  padding: 23px 0;
  position: relative;
}

.desc-bg::after {
  content: '';
  width: 124px;
  height: 42px;
  position: absolute;
  bottom: -42px;
  right: 0;
  background-image: url(../assets/choco-pink.png);
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 100;
}

.choose-bg {
  background-color: #6a3906;
  padding: 23px 0;
}

.about-vg {
  padding-bottom: 20px;
}

.description {
  line-height: 1.8;
}

.button--box {
  width: 376px;
  margin: 0 auto;
  display: flex;
}

</style>
