<template>
  <!-- 模板部分，定义页面的结构 -->
  <div>
    <!-- textarea 用于显示语音转文字的结果，通过 v-model 指令实现数据双向绑定 -->
    <textarea v-model="transcript" rows="4" cols="50"></textarea>
    <!-- 点击按钮调用 startRecording 方法开始录音 -->
    <button @click="startRecording">开始录音</button>
    <!-- 点击按钮调用 stopRecording 方法停止录音 -->
    <button @click="stopRecording">停止录音</button>
  </div>
</template>

<script>
export default {
  // 组件的数据部分
  data() {
    return {
      // 存储 SpeechRecognition 实例
      recognition: null,
      // 存储语音转文字的结果
      transcript: '',
      // 标记是否正在录音
      isRecording: false
    };
  },
  // 组件挂载完成后执行的钩子函数
  mounted() {
    // 获取 SpeechRecognition 构造函数，兼容不同浏览器
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      // 创建 SpeechRecognition 实例
      this.recognition = new SpeechRecognition();
      // 设置识别语言为中文
      this.recognition.lang = 'zh-CN';
      // 设置连续识别
      this.recognition.continuous = true;
      // 不返回临时识别结果
      this.recognition.interimResults = false;

      // 当识别有结果时触发的事件处理函数
      this.recognition.onresult = (event) => {
        // 从事件结果中提取文字信息
        const transcript = Array.from(event.results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join('');
        // 将识别结果赋值给 transcript 数据
        this.transcript = transcript;
      };

      // 当识别结束时触发的事件处理函数
      this.recognition.onend = () => {
        // 标记录音结束
        this.isRecording = false;
      };
    } else {
      // 浏览器不支持语音识别功能时，在控制台输出提示信息
      console.log('浏览器不支持语音识别功能');
    }
  },
  // 组件的方法部分
  methods: {
    // 开始录音的方法
    startRecording() {
      // 当识别实例存在且当前没有在录音时，开始录音
      if (this.recognition && !this.isRecording) {
        this.recognition.start();
        // 标记开始录音
        this.isRecording = true;
      }
    },
    // 停止录音的方法
    stopRecording() {
      // 当识别实例存在且当前正在录音时，停止录音
      if (this.recognition && this.isRecording) {
        this.recognition.stop();
        // 标记录音停止
        this.isRecording = false;
      }
    }
  }
};
</script>    