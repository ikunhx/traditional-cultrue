<template>
    <div class="loading-number" :class="{ 'fade-out': !isLoading }" v-if="isLoading">
      <div class="number-container">
        <span :style="{ color: textColor }" class="text">{{ getGanZhi(progress) }}</span>
      </div>
      <div class="poem">
        <img class="img1" src="@/assets/image/App/left.png">
        <p>
          干支轮转纪时岁，六甲循环启岁华
        </p>
        <img class="img2" src="@/assets/image/App/right.png">
      </div>
    </div>
  </template>
  
  <script>
export default {
  name: "Loading",
  data() {
    return {
      isLoading: true,
      progress: 0,
      textColor: "#ff7e5f", // 初始颜色
      gan: ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"],
      zhi: [
        "子",
        "丑",
        "寅",
        "卯",
        "辰",
        "巳",
        "午",
        "未",
        "申",
        "酉",
        "戌",
        "亥",
      ],
    };
  },
  mounted() {
    this.startProgressAnimation();
  },
  methods: {
    startProgressAnimation() {
      const interval = setInterval(() => {
        if (this.progress >= 60) {
          clearInterval(interval);
          // 增加一个延迟来保持在 "癸亥"
          setTimeout(() => {
            this.isLoading = false;
          }, 700); // 停留 0.5 秒
          return;
        }
        this.progress += 1;

        // 更新颜色
        this.updateTextColor();
      }, 70); // 调整时间间隔以改变动画速度
    },
    updateTextColor() {
      // 颜色变化逻辑，这里使用简单的 RGB 循环变化
      const hue = (this.progress * 3.6) % 360; // 将进度转换为色调值
      this.textColor = `hsl(${hue}, 100%, 50%)`; // 使用 HSL 颜色模型
    },
    getGanZhi(num) {
      // 计算天干地支组合
      const ganIndex = (num - 1) % 10;
      const zhiIndex = (num - 1) % 12;
      return `${this.gan[ganIndex]}${this.zhi[zhiIndex]}`;
    },
  },
};
</script>
  
  <style>
.loading-number {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #202020;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  user-select: none; /* 文本不可选中 */
  transition: opacity 0.7s ease-in-out; /* 添加淡入淡出过渡 */
  opacity: 1;
}

.number-container {
}
.text {
  transition: all 0.1s ease-in-out;
  font-family: kaiti;
  letter-spacing: 40px;
  font-size: 4em;
   font-weight: 400;
 /* margin-top: 50vh;
  margin-left: 50vw;
  transform: translate(-50%,-50%); */
}
.poem {
  position: absolute;
  color: #fff;
  display: flex;
  top:55vh
}
.poem p {
  font-size: 2vw;
  letter-spacing: 20px;
  margin-left: 20px;
  font-weight: 200;
  font-family: 'Courier New', Courier, monospace;
  
}
.poem img{
    width: 2vw;
    height: 4vh;
    /* margin-top: 2vh; */
}
.img2{
    margin-top: 7vh;
}
</style>