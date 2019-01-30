<template>
  <div class="page-wrapper">
    <div class="contents">
      <div>
        <img src="http://placehold.jp/250x150.png" alt="ロゴ">
      </div>
      <div class="about-vg">
        <h2 class="title">what's バレンタインガチャ</h2>
        <p class="description">バレンタインガチャの概要のテキストが入るよ。ここはプロの心の叫びを思いっきり書きたいね。<br>エモい文章入れてこう！</p>
      </div>
      <router-link to="/EntryForm" class="link-area">
        <div class="box--button">
          <div>チョコが欲しいあなた</div>
          <div>Check！</div>
        </div>
      </router-link>
      <router-link to="/Gacha" class="link-area">
        <div class="box--button">
          <div>チョコをあげたいあなた</div>
          <div>Check！</div>
        </div>
      </router-link>
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
h2 {
  font-size: inherit;
  font-weight: normal;
}

.contents {
  text-align: center;
}

.about-vg {
  padding-bottom: 20px;
}

.title {
  padding: 20px 0;
}

.description {
  line-height: 1.8;
}

.link-area {
  text-decoration: none;
  color: #2c3e50;
  margin: 0 auto;
}

.box--button {
  border: 1px solid #777;
  width: 200px;
  margin: 0 auto 40px;
  padding: 20px;
  text-align: left;
  line-height: 1.8;
}
</style>
