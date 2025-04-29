<template>
  <div class="container" ref="container">
    <div class="box1">
      <p>
        <span> &nbsp;&nbsp;儒家文化 </span>
        是以儒家学说为指导思想的文化流派，为历代儒客信众推崇。
        儒家学说为春秋时期孔丘所创，倡导血亲人伦、现世事功、修身存养、道德理性，
        其中心思想是恕、忠、孝、悌、勇、仁、义、礼、智、信。
        儒家学说经历代统治者的推崇，二千余年而不变，经历了孔子后学的传承和发展。
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;孔子(前551-前479)，名丘，字仲尼。兄弟中排行第二，中国春秋后期鲁国人。
        但他一生大部分时间都是从事教育，相传所收弟子多达三千人，贤人七十二人，
        教出不少有知识有才能的学生。
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;孔子为春秋末期思想家、教育家，儒学学派的创始人，
        任鲁国司寇，后携弟子周游列国，最终返鲁，专心执教。在世时已被誉为“天纵之圣”、
        “天之木铎”、“千古圣人”，是当时社会上最博学者之一，并且被后世尊为“至圣“、万世师表。
        因父母曾为生子而祷于尼丘山，故名丘，曾修《诗》、《书》，定《礼》
        、《乐》，序《周易》，作《春秋》。
        孔子的思想及学说对后世产生了极其深远的影响。
      </p>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "Rujia",
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
  background-image: url("@/assets/image/Home/rj-bgp.png");
  background-size: cover;
  height: 100vh;
  /* width: 100vw; */
  line-height: 50px;
  padding-top: 150px;
  background-position: center;
}

.box1 span {
  font-size: 40px;
}
.box1 span:hover {
  color: brown;
}

.box1 p {
  font-size: 25px;
  transition: all 0.2s;
}
.box1 p:hover {
  font-size: 26px;
  color: brown;
}

.box1 {
  width: 900px;
  /* margin-top: 150px; */
  margin-left: auto;
  margin-right: auto;
}
</style>