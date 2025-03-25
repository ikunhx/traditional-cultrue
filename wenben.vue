<template>
  <div>
    <!-- 用于显示文本的区域 -->
    <div id="answer">{{ displayText }}</div>
    <!-- 点击该按钮暂停文本显示 -->
    <button id="pauseButton" @click="pause">暂停</button>
    <!-- 点击该按钮继续文本显示 -->
    <button id="continueButton" @click="continueDisplay">继续</button>
    <!-- 点击该按钮重置文本显示 -->
    <button id="resetButton" @click="reset">重置</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 要显示的完整文本内容
      answerText: "这是一段测试文本是一段测试文本是一段测试文本是一段测试文本是一段测试文本是一段测试文本是一段测试文本是一段测试文本是一段测试文本是一段测试文本是一段测试文本是一段测试文本是一段测试文本是一段测试文本是一段测试文本是一段测试文本",
      // 当前已经显示的文本内容
      displayText: "",
      // 当前要显示的字符在 answerText 中的索引
      index: 0,
      // 字符显示的时间间隔，单位为毫秒
      speed: 100,
      // 标记是否暂停显示，初始值为 false 表示不暂停
      isPaused: false,
      // 用于存储定时器的变量
      timer: null
    };
  },
  mounted() {
    // 根据文本长度调整速度，如果文本长度超过 100，则将速度调整为 50 毫秒
    if (this.answerText.length > 100) {
      this.speed = 50;
    }
    // 开始显示字符
    this.displayNextCharacter();
  },
  methods: {
    // 显示下一个字符的方法
    displayNextCharacter() {
      // 如果没有暂停且还有字符未显示
      if (!this.isPaused && this.index < this.answerText.length) {
        // 将下一个字符添加到显示文本中
        this.displayText += this.answerText[this.index];
        // 使用 $nextTick 确保 DOM 更新后执行后续操作
        this.$nextTick(() => {
          // 获取所有具有 .char 类的元素
          const charElements = this.$el.querySelectorAll('.char');
          // 设置最后一个字符元素的透明度为 1，使其显示出来
          charElements[charElements.length - 1].style.opacity = 1;
        });
        // 索引加 1，指向下一个字符
        this.index++;
        // 设置一个定时器，在指定的速度后再次调用 displayNextCharacter 方法
        this.timer = setTimeout(() => {
          this.displayNextCharacter();
        }, this.speed);
      }
    },
    // 暂停显示的方法
    pause() {
      // 将暂停标记设置为 true
      this.isPaused = true;
    },
    // 继续显示的方法
    continueDisplay() {
      // 将暂停标记设置为 false
      this.isPaused = false;
      // 调用 displayNextCharacter 方法继续显示字符
      this.displayNextCharacter();
    },
    // 重置显示的方法
    reset() {
      // 将暂停标记设置为 false
      this.isPaused = false;
      // 将索引重置为 0
      this.index = 0;
      // 清空已经显示的文本
      this.displayText = "";
      // 调用 displayNextCharacter 方法重新开始显示字符
      this.displayNextCharacter();
    }
  }
};
</script>

<style scoped>
.char {
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}
</style>    