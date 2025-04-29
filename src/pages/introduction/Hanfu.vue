<template>
  <div class="container" ref="container">
    <div class="box1">
      <p>
        <span> &nbsp;&nbsp;汉服 </span>
        &nbsp;&nbsp;&nbsp;是反映儒家礼典服制的文化总和，贯穿西周到明朝的儒家书史体系《礼记》、
        《后汉书·舆服下》、《晋书·舆服》、《宋书·礼五》、《南齐书·舆服》、
        《魏书·礼志四之四第十三》、《隋书·礼仪七》、《旧唐书·舆服》、《新唐书·车服》、
        《宋史·舆服》、《明史·舆服》，通过祭服、朝服、公服、常服以及配饰体现出来。
        汉服文化从三皇五帝延续（清代被迫中断），通过连绵不断的继承完善着自己
        汉服文化是一个非常成熟并自成体系的千年文化。在当代，
        汉服文化正在通过汉服运动这一民间文化运动形式逐渐复兴。
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;中国又称『华夏』，这一名称的由来就与汉服有关。中华天朝重衣冠礼仪。
        《周易·系辞下》曰“是以自天佑之，吉无不利，黄帝、尧、舜垂衣裳而天下治，
        盖取诸乾坤。”周公制周礼而治天下，被儒家尊为圣人。周礼通过《仪礼》、《周礼》、
        《礼记》的服章和仪式表现出来，因而衣冠、礼仪往往用来代指文明，汉服是礼仪的载体。
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;汉服自西周的衣裳、皮弁服、褘衣、鞠衣、袒衣、袴褶、襌衣、褠衣、
        裲裆等服制开始，历经几千年的继承，在大唐《开元礼》中得到了充分展现和体系化，
        按功能分为冕服、朝服、公服、常服。大唐制，天子衣服，有大裘冕、衮冕、
        鷩冕、毳冕、希冕、玄冕、通天冠、武弁、黑介帻、白纱帽、平巾帻、白帢，
        凡十二等。公之服，自衮冕而下如王之服；侯伯之服，自鷩冕而下如公之服；
        子男之服，自毳冕而下如侯伯之服；孤之服，自冕而下如子男之服；卿大夫之服
        ，自玄冕而下如孤之服；士之服，自皮弁而下如大夫之服。其斋服有玄端素端。
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;汉服是汉族的礼仪文化的必要组成部分。
        周礼的礼典分为五礼八纲，五礼包括：吉礼、凶礼、宾礼、军礼、嘉礼；
        八纲包括：冠礼、婚礼、丧礼、祭礼、乡礼、射礼、朝礼、聘礼。
        冠礼和婚礼是嘉礼的核心。祭礼即吉礼。
      </p>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "Hanfu",
  mounted() {
    this.$nextTick(() => {
      const chatContainer = this.$refs.container;
      if (chatContainer) {
        chatContainer.scrollTop = 0;
        console.log(chatContainer.scrollTop);
      }
    });
    // 添加按键监听事件
    window.addEventListener("keydown", this.handleKeyDown);
  },
  beforeDestroy() {
    // 移除按键监听事件，避免内存泄漏
    window.removeEventListener("keydown", this.handleKeyDown);
  },
  methods: {
    handleKeyDown(event) {
      if (event.key === "Backspace") {
        this.$router.back();
      }
    },
  },
};
</script>
  
  <style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: kaiTi;
}

.container {
  background-image: url("@/assets/image/Home/hf-bgp.jpg");
  background-size: cover;
  width: 100vw;
  line-height: 50px;
  padding-top: 600px;
  padding-left: 200px;
  padding-bottom: 200px;
}

.box1 span {
  font-size: 50px;
}
.box1 span:hover {
  color: brown;
}

.box1 p {
  font-size: 30px;
  transition: all 0.2s;
}
.box1 p:hover {
  font-size: 31px;
  color: brown;
}

.box1 {
  width: 900px;
}

.sb {
  display: block;
  height: 500px;
}
</style>