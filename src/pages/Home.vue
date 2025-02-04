<template>
  <div class="container">
    <div class="first-box" ref="firstBox">
      <img
        src="@/assets/image/Home/01bck.png"
        alt="Header Image"
        class="header-image"
        ref="headerImage"
      />
      <div
        class="faceBox"
        ref="faceBox"
        :class="{ 'faceBox-up': isFaceBoxChange }"
      >
        <div class="face-title">
          <p>中华文化</p>
        </div>
        <div class="face-text">
          <p>
            中华传统文化，如涓涓细流汇聚成河，五千年的智慧结晶，闪耀着先哲的光芒。儒家仁爱、道家自然，诗词歌赋吟咏不尽，传统节日传承千年情谊，宛如一幅水墨画卷，诗意盎然，书写着中华民族的灵魂与梦想。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      isFaceBoxChange: false,
    };
  },
  mounted() {
    this.setupMouseEvents();
  },
  beforeDestroy() {
    this.cleanupMouseEvents();
  },
  methods: {
    setupMouseEvents() {
      const img = this.$refs.headerImage;
      const firstBox = this.$refs.firstBox;
      firstBox.addEventListener("mousemove", this.handleMouseMove);
      firstBox.addEventListener("mouseleave", this.handleMouseLeave);
      firstBox.addEventListener("wheel", this.handleMouseWheel, {
        passive: false,
      });
      this.homeImg = img;
      this.firstBox = firstBox;
    },
    cleanupMouseEvents() {
      firstBox.removeEventListener("mousemove", this.handleMouseMove);
      firstBox.removeEventListener("mouseleave", this.handleMouseLeave, {
        passive: false,
      });
    },
    handleMouseMove(e) {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      // 计算偏移量，可以根据实际需求调整系数以改变晃动强度
      const offsetX = -(mouseX - 0.5) * 20; // X轴上的偏移
      const offsetY = -(mouseY - 0.5) * 20; // Y轴上的偏移

      // 应用变换
      this.homeImg.style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`;
    },
    handleMouseLeave() {
      // 鼠标移出窗口时重置位置
      this.homeImg.style.transform = "translate(-50%, -50%)";
    },
    handleMouseWheel(event) {
      if (this.isFaceBoxChange === false) {
        event.preventDefault(); // 阻止页面滚动
      }
      if (event.deltaY > 0) {
        this.isFaceBoxChange = true;
        // 执行向下滚动的操作
      } else if (event.deltaY < 0) {
        this.isFaceBoxChange = false;
        // 执行向上滚动的操作
      }
    },
  },
};
</script>

<style lang="css" scoped>
.first-box {
    position: relative;
    width: 100vw;
    height: 100vh;
    /* 使用视口单位 */
    overflow: hidden;
}

.header-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: transform 0.1s ease-out;
    height: 102%;
    /* 根据需要调整 */

}

.faceBox {
    width: 100vw;
    height: 200vh;
    position: absolute;
    top: 0;
    left: 0;
    user-select: none; /* 文本不可选中 */
    font-family: KaiTi;
    transition: all 1s ease-in-out;
}

.faceBox-up {
    background-color: #202020;
    opacity: 0.8;
    transform: translateY(-100vh);
}

.face-title {
    width: 100vw;
    height: 100vh;
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */
    display: flex;
    /* background-color: aqua; */

}

.face-title p {

    font-weight: 800;
    font-size: 50px;
    letter-spacing: 20px;
    color: rgb(234, 230, 238);
}

.face-text {
    width: 100vw;
    height: 100vh;
    /* background-color: pink; */
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */
    display: flex;
}

.face-text p {
    width: 40vw;
    /* height: 40vh; */
    word-wrap: break-word;
    font-size: 40px;
    letter-spacing: 10px;
    color: rgb(213, 202, 202);
}
</style>