<template>
    <div class="ball-box">
      <!-- 悬浮球 -->
      <div
        class="float-ball"
        :style="{ left: ballLeft + 'px', top: ballTop + 'px' }"
        @mousedown="startDrag"
        @mouseenter="handleHover"
        @mouseleave="handleLeave"
        @click.stop="expand"
        :class="{ hover: isHover, dragging: isDragging }"
      >
        <i
          :class="[expanded ? 'fa fa-times' : 'fa fa-plus', 'icon']"
          id="plus"
        ></i>
      </div>
  
      <!-- 菜单 -->
      <div
        class="menu"
        id="menu"
        :style="{
          left: menuLeft + 'px',
          top: ballTop + 'px',
          transform: `scale(${expanded ? 3 : 0})`,
        }"
      >
        <span><i class="fa fa-microphone"></i></span>
        <span><i class="fa fa-user" @click="changePage('Login')"></i></span>
        <span><i class="fa fa-video-camera"></i></span>
        <span><i class="fa fa-envelope"></i></span>
        <span><i class="fa fa-camera"></i></span>
        <span><i class="fa fa-home" @click="changePage('home')"></i></span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        ballLeft: 0,
        ballTop: 50,
        isDragging: false,
        startX: 0,
        startY: 0,
        isHover: false,
        showPopup: false,
        ballWidth: 60, // 悬浮球宽度
        expanded: false,
        isAttached: false, // 是否吸附
        attachedSide: null, // 吸附的边（left 或 right）
      };
    },
    mounted() {
      this.autoPosition(); // 初始化位置
    },
    computed: {
      menuLeft() {
        // 菜单的 left 值根据吸附状态调整
        if (this.attachedSide === "left") {
          return 0; // 左侧吸附时完全弹出
        } else if (this.attachedSide === "right") {
          return document.documentElement.clientWidth - this.ballWidth; // 右侧吸附时完全弹出
        }
        return this.ballLeft; // 未吸附时跟随悬浮球
      },
    },
    methods: {
      startDrag(e) {
        this.isDragging = true;
        this.expanded = false; // 拖动时收起菜单
        this.startX = e.clientX - this.ballLeft;
        this.startY = e.clientY - this.ballTop;
  
        // 禁用文字选择
        document.body.classList.add("no-select");
  
        document.addEventListener("mousemove", this.onDrag);
        document.addEventListener("mouseup", this.endDrag);
      },
  
      onDrag(e) {
  if (!this.isDragging) return;

  // 实时更新位置
  this.ballLeft = e.clientX - this.startX;
  this.ballTop = e.clientY - this.startY;

  // 如果 expanded 为 true，则不限制边界
  if (!this.expanded) {
    this.checkBoundary();
  }
},
  
      endDrag() {
        this.isDragging = false;
        document.body.classList.remove("no-select");
  
        // 移除事件监听
        document.removeEventListener("mousemove", this.onDrag);
        document.removeEventListener("mouseup", this.endDrag);
  
        // 松开鼠标后检查是否需要吸附
        this.checkEdgeAttachment();
      },
  
      checkBoundary() {
  // 如果 expanded 为 true（menu 放大到 3 倍），则不限制边界
  if (this.expanded) return;

  const viewportWidth = document.documentElement.clientWidth;
  const viewportHeight = document.documentElement.clientHeight;

  // 限制悬浮球不超出视口
  this.ballLeft = Math.max(
    0,
    Math.min(this.ballLeft, viewportWidth - this.ballWidth)
  );
  this.ballTop = Math.max(
    0,
    Math.min(this.ballTop, viewportHeight - this.ballWidth)
  );
},
  
      checkEdgeAttachment() {
  // 如果 expanded 为 true（menu 放大到 3 倍），则不执行吸附逻辑
  if (this.expanded) return;

  const viewportWidth = document.documentElement.clientWidth;
  const tolerance = 1; // 允许的误差范围

  // 判断 left 是否为 0
  if (Math.abs(this.ballLeft) <= tolerance) {
    this.ballLeft = -this.ballWidth * 0.7; // 吸附到左侧边缘，露出30%
    this.isAttached = true;
    this.attachedSide = "left";
  }
  // 判断 right 是否为 0（即 left + width == viewportWidth）
  else if (
    Math.abs(this.ballLeft + this.ballWidth - viewportWidth) <= tolerance
  ) {
    this.ballLeft = viewportWidth - this.ballWidth * 0.3; // 吸附到右侧边缘，露出30%
    this.isAttached = true;
    this.attachedSide = "right";
  } else {
    this.isAttached = false;
    this.attachedSide = null;
  }
},
  
      handleHover() {
        if (!this.isDragging) {
          this.isHover = true;
          // 吸附状态下鼠标覆盖时完全弹出
          if (this.isAttached) {
            if (this.attachedSide === "left") {
              this.ballLeft = 0; // 左侧吸附时完全弹出
            } else if (this.attachedSide === "right") {
              this.ballLeft = document.documentElement.clientWidth - this.ballWidth; // 右侧吸附时完全弹出
            }
          }
        }
      },
  
      handleLeave() {
  this.isHover = false;

  // 如果 expanded 为 true（menu 放大到 3 倍），则不恢复部分隐藏
  if (this.expanded) return;

  // 吸附状态下鼠标离开时恢复部分隐藏
  if (this.isAttached) {
    if (this.attachedSide === "left") {
      this.ballLeft = -this.ballWidth * 0.7; // 左侧吸附时隐藏70%
    } else if (this.attachedSide === "right") {
      this.ballLeft = document.documentElement.clientWidth - this.ballWidth * 0.3; // 右侧吸附时隐藏70%
    }
  }
},
  
expand(e) {
  e.stopPropagation();
  this.expanded = !this.expanded;

  // 如果 expanded 为 true，取消吸附状态
  if (this.expanded) {
    this.isAttached = false;
    this.attachedSide = null;
  } else {
    // 如果 expanded 为 false，重新检查吸附状态
    this.checkEdgeAttachment();
  }
},
  
autoPosition() {
  // 如果 expanded 为 true（menu 放大到 3 倍），则不执行吸附逻辑
  if (this.expanded) return;

  // 初始化位置在左侧边缘
  this.ballLeft = -this.ballWidth * 0.7; // 露出30%
  this.isAttached = true;
  this.attachedSide = "left";
},
      changePage(name){
        this.$bus.$emit("c-"+name,name)
        this.expanded = !this.expanded;
      }
    },
  };
  </script>
  
  <style scoped>
   @import '@/assets/css/font-awesome.min.css'; 
  /* @font-face {
    font-family: 'FontAwesome';
    src: url('@/assets/font/fontawesome-webfont.eot?v=4.7.0');
    src: url('@/assets/font/fontawesome-webfont.eot?#iefix&v=4.7.0') format('embedded-opentype'),
         url('@/assets/font/fontawesome-webfont.woff2?v=4.7.0') format('woff2'),
         url('@/assets/font/fontawesome-webfont.woff?v=4.7.0') format('woff'),
         url('@/assets/font/fontawesome-webfont.ttf?v=4.7.0') format('truetype'),
         url('@/assets/font/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular') format('svg');
    font-weight: normal;
    font-style: normal;
}
.fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}
.fa-microphone:before {
    content: "\f130"
}

.fa-microphone-slash:before {
    content: "\f131"
}
.fa-user:before {
    content: "\f007"
}
.fa-group:before,
.fa-users:before {
    content: "\f0c0"
}
.fa-video-camera:before {
    content: "\f03d"
}
.fa-envelope:before {
    content: "\f0e0"
}
.fa-camera:before {
    content: "\f030"
}
.fa-home:before {
    content: "\f015"
} */

  .float-ball {
    position: fixed;
    border-radius: 50%;
    cursor: grab;
    z-index: 9999;
    background-color: gray;
    text-align: center;
    height: 60px;
    width: 60px;
    margin: auto;
    transition: 0.7s;
  }
  
  .fa-plus {
    font-size: 59px;
    color: white;
    display: block;
    margin-top: 20px;
    transition: 0.7s;
  }
  
  .icon {
    font-size: 39px;
    color: white;
    display: block;
    margin-top: 13px;
    transition: 0.7s;
  }
  
  .menu {
    position: fixed;
    background-color: #fff;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    z-index: 9998; /* 确保在 float-ball 下方 */
    transition: 0.7s;
    transform-origin: center; /* 缩放时以中心为基准 */
  }
  
  span {
    display: inline-block;
    position: absolute;
    font-size: 10px;
    color: #bbbbbb;
  }
  
  span:nth-child(1) {
    top: 2px;
    left: 27px;
  }
  
  span:nth-child(2) {
    top: 14px;
    left: 48px;
  }
  
  span:nth-child(3) {
    top: 34px;
    left: 44px;
  }
  
  span:nth-child(4) {
    top: 44px;
    left: 26px;
  }
  
  span:nth-child(5) {
    top: 34px;
    left: 7px;
  }
  
  span:nth-child(6) {
    top: 14px;
    left: 5px;
  }
  
  span:hover {
    color: #fc0781;
  }
  
  .float-ball.hover {
    background: #ed5a65;
    cursor: pointer;
  }
  
  .float-ball.dragging {
    cursor: grabbing;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }
  
  .popup {
    position: absolute;
    left: 60px;
    top: 0;
    width: 200px;
    padding: 10px;
    background: white;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    pointer-events: none;
  }
  
  /* 禁用文字选择 */
  .no-select {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
  
  .ball-box {
    position: relative;
  }
  </style>