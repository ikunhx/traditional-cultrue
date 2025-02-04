<template>
    <div :class="['container', { open: isOpen }]">
      <label class="switch">
        <input type="checkbox" v-model="isOpen" @change="handleInput" class="switchBtn"/>
        <span class="slider"></span>
      </label>
    </div>
  </template>
  
  <script>
  export default {
    name:'SwitchBtn',
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      handleInput() {
        // 这里可以根据需要添加额外的逻辑
        // console.log("Switch toggled:", this.isOpen);
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    background-color: #000;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    transition: 0.5s;
    color: #999;
  }
  
  .container.open {
    background-color: #999;
    color: #000;
  }
  
  .switch {
    position: relative;
    display: inline-block;
    height: 40px;
    width: 75px;
    margin: 0px auto;
  }
  
  .switch input {
    opacity: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #202020;
    transition: 0.5s;
    border-radius: 30px;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 30px;
    width: 30px;
    border-radius: 50%;
    left: 10%;
    top: 5px;
    box-shadow: inset 8px -4px 0px 0px #ffd500;
    background: #202020;
    transition: 0.5s;
  }
  
  .switchBtn:checked + .slider {
    background-color: #202020;
  }
  
  .switchBtn:checked + .slider:before {
    transform: translateX(100%);
    box-shadow: inset 15px -4px 0px 15px #ffd500;
  }
  </style>