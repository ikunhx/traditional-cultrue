<template>
  <div class="box" ref="box">
    <div class="box1">
      <p>
        <span> &nbsp;&nbsp;京剧 </span>
        又称平剧、京戏等，中国国粹之一，是中国影响力最大的戏曲剧种，分布地以北京为中心，遍及全国各地。
        清代乾隆五十五年起，原在南方演出的三庆、四喜、春台、和春
        等多以安徽籍艺人为主的四大徽班陆续进入北京，
        与来自湖北的汉调艺人合作，同时接受了昆曲、秦腔的部分剧目、曲调和表演方法，又吸收了一些地方民间曲调，
        通过不断的交流、融合，最终形成京剧。
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;京剧在文学、表演、音乐、舞台美术等各个方面都有一套规范化的艺术表现形式。
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;京剧的唱腔属板式变化体，以二簧（也作“二黄”）、西皮为主要声腔。
        京剧伴奏分文场和武场两大类，文场以胡琴为主奏乐器，武场以打击乐伴奏为主（鼓板、大锣、铙钹、小锣）。
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;京剧的角色分为生、旦、净、丑、杂、武、流等行当，后三行已不再立专行。京剧现在的角色分为生、旦、净、丑四种。
        各行当都有一套表演形式。唱、念、做、打的技艺各具特色。京剧以历史故事为主要演出内容，传统剧目约有一千三百多个，
        常演的在三四百个以上。
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;京剧流播全国，影响甚广，有“国剧”之称。以梅兰芳命名的京剧表演体系被视为东方戏剧表演体系的代表，为世界三大表演体系之一。
        京剧是中华民族传统文化的重要表现形式，其中的多种艺术元素被喻作中国传统文化的象征符号。
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;2006年5月京剧被国务院批准列入第一批国家级非物质文化遗产名录。
        2010年被列入联合国教科文组织非物质文化遗产名录人类非物质文化遗产代表名录。
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;京剧舞台艺术在文学、表演、音乐、唱腔、锣鼓、化妆、脸谱等各个方面，
        通过无数艺人的长期舞台实践，构成了一套互相制约、相得益彰的格律化和规范化的程式。
        它作为创造舞台形象的艺术手段是十分丰富的，而用法又是十分严格的。
        不能驾驭这些程式，就无法完成京剧舞台艺术的创造。
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;由于京剧在形成之初，便进入了宫廷，使它的发育成长不同于地方剧种。
        要求它所要表现的生活领域更宽，所要塑造的人物类型更多，对它的技艺的全面性、完整性也要求得更严，
        对它创造舞台形象的美学要求也更高。
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;当然，同时也相应地使它的民间乡土气息减弱，
        纯朴、粗犷的风格特色相对淡薄。因而，它的表演艺术更趋于虚实结合的表现手法，
        最大限度地超脱了舞台空间和时间的限制，以达到“以形传神，形神兼备”的艺术境界。
        表演上要求精致细腻，处处入戏；唱腔上要求悠扬委婉，声情并茂；
        武戏则不以火爆勇猛取胜，而以“武戏文唱”见佳。
      </p>
      <span class="sb">&nbsp;</span>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "Jingjv",
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

.box {
  background-image: url("@/assets/image/Home/jj-bgp.jpg");
  background-size: cover;
  /* height: 100vh; */
  line-height: 50px;
  width: 100vw;
  padding-top: 500px;
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
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.sb {
  display: block;
  height: 250px;
}
</style>