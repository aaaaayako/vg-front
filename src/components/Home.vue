<template>
  <div class="top contents">
    <section class="title-bg">
      <h1 class="title-bg-inner">
        <div class="section-wrapper">
          <img class="logo-img" src="../assets/vg-logo.png" alt="バレンタインガチャ">
        </div>
      </h1>
    </section>
    <section class="desc-bg">
      <div class="desc-bg-inner">
        <div class="section-wrapper">
          <img class="whats-vg-img" src="../assets/whats-vg.png" alt="what's valentine gacha" width="260" height="58">
          <h2 class="desc-title fwb">バレンタインガチャって？</h2>
          <p class="desc fwb">
            ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要ガチャの概要
          </p>
        </div>
      </div>
    </section>
    <section class="choose-bg">
      <div>
        <img src="../assets/choose.png" alt="choose" width="114" height="24">
        <h2 class="fwb select-text">あなたはどっち？</h2>
        <div class="button--box">
          <a class="link-area boy-box" href="https://join.slack.com/t/valentine-gacha/shared_invite/enQtNTQwNTY0Njk5MDEyLWExYTI1ZTZhZTQxODQyMzI0Yzc0ZDgyZDkzYmZlOGZmOTlkZWNmZmM3YThjNmRhMjY1ZDY0MzdjYTMyZmNmYzk" target="_blank">
            <img src="../assets/btn-boy.png" alt="チョコが欲しい！" width="157" height="225">
          </a>
          <router-link to="/EntryForm" class="link-area girl-box">
            <img src="../assets/btn-girl.png" alt="チョコをあげたい！" width="157" height="225">
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top {
  background-color: #8e5d4b;
  width: 100vw;
  height: 100vh;
}

.logo-img {
  width: 308px;
  height: 154px;
}

.section-wrapper {
  padding: 0 20px;
  min-width: 320px;
  box-sizing: border-box;
}

.title-bg {
  width: 100%;
  background-color: #ffefd1;
}

.title-bg-inner {
  padding: 40px 0;
  max-width: 484px;
  margin: 0 auto;
  position: relative;
}

.title-bg-inner::after {
  content: '';
  width: 176px;
  height: 66px;
  position: absolute;
  bottom: -66px;
  left: -176px;
  background-image: url(../assets/choco-white.png);
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 10;
}

.desc-bg {
  width: 100%;
  background-color: #ffaf9b;
}

.desc-bg-inner {
  padding: 30px 0;
  max-width: 484px;
  margin: 0 auto;
  position: relative;
}

.desc-bg-inner::after {
  content: '';
  width: 176px;
  height: 66px;
  position: absolute;
  bottom: -66px;
  right: -176px;
  background-image: url(../assets/choco-pink.png);
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 10;
}

.whats-vg-img {
  position: relative;
  z-index: 11;
}

.select-text {
  margin: 20px 0 38px;
}

.boy-box {
  position: relative;
}

.boy-box::after {
  content: '';
  width: 112px;
  height: 86px;
  position: absolute;
  top: -43px;
  left: -56px;
  background-image: url(../assets/choco-want-hart.png);
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 10;
}

.girl-box {
  position: relative;
  padding-left: 60px;
}

.girl-box::after {
  content: '';
  width: 112px;
  height: 86px;
  position: absolute;
  top: -43px;
  right: -56px;
  background-image: url(../assets/choco-give-hart.png);
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 10;
}

.choose-bg {
  background-color: #8e5d4b;
  padding: 23px 0;
}

.desc-title {
  padding: 20px 0 26px;
}

.desc {
  line-height: 1.8;
  max-width: 484px;
  margin: 0 auto;
}

.button--box {
  max-width: 486px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 56px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

/* ブラウザ幅が836px以下 */
@media screen and (max-width: 836px) {
.title-bg-inner::after {
  content: '';
  width: 132px;
  height: 42px;
  position: absolute;
  bottom: -42px;
  left: 0px;
  background-image: url(../assets/choco-white.png);
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 10;
}

.desc-bg-inner::after {
  content: '';
  width: 132px;
  height: 42px;
  position: absolute;
  bottom: -42px;
  right: 0px;
  background-image: url(../assets/choco-pink.png);
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 10;
}
}

/* ブラウザ幅が425px以下 */
@media screen and (max-width: 485px) {
.logo-img {
  width: 250px;
  height: 124px;
}

.button--box {
  flex-direction: column;
}

.boy-box {
  margin-top: 30px;
}

.girl-box {
  margin-top: 60px;
  padding-left: 0;
}
}
</style>
