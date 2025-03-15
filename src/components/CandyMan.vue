<template>
  <div class="box2">
    <h1 class="title">真的要卸载吗？</h1>
    <div class="face">
      <div class="eyeBox">
        <div class="eye-container">
          <div class="eye left-eye">
            <div class="pupil left-pupil"></div>
          </div>
          <div class="eye right-eye">
            <div class="pupil right-pupil"></div>
          </div>
        </div>
      </div>
      <div class="tuoyuan1"></div>
      <div class="tuoyuan2"></div>
      <div class="mouth">
        <div class="tooth"></div>
        <div class="tongue"></div>
      </div>
    </div>
    <button class="no">取消</button>
    <button class="yes">确认</button>
  </div>
</template>

<script>
export default {
  name: "CandyMan",
  mounted() {
    this.setupEventListeners();
  },
  methods: {
    setupEventListeners() {
      const box2 = this.$el;
      const eyes = box2.querySelectorAll(".eye");
      const mouth = box2.querySelector(".mouth");
      const eyeBox = box2.querySelector(".eyeBox");
      const tuoyuan1 = box2.querySelector(".tuoyuan1");
      const tuoyuan2 = box2.querySelector(".tuoyuan2");
      const face = box2.querySelector(".face");

      const lerp = (start, end, t) => start * (1 - t) + end * t;

      box2.onpointerenter = (e) => {
        setTimeout(() => {
          mouth.style.transition = "none";
          eyeBox.style.transition = "none";
          tuoyuan1.style.transition = "none";
          tuoyuan2.style.transition = "none";
          face.style.transition = "none";
        }, 300);
        this.updateMouthBorderRadius(e);
      };

      box2.onpointermove = (e) => {
        if (e.target.closest(".box2") === box2) {
          this.updatePupilPosition(e);
          this.updateFaceColor(e);
          this.updateMouthBorderRadius(e);
        }
      };

      box2.onpointerleave = () => {
        // 恢复所有样式
        mouth.style.transition = "border-radius .3s, transform .1s";
        eyeBox.style.transition = ".3s";
        tuoyuan1.style.transition = ".3s";
        tuoyuan2.style.transition = ".3s";

        eyes.forEach((eye) => {
          const pupil = eye.querySelector(".pupil"); // 获取当前眼睛的瞳孔
          if (eye.classList.contains("left-eye")) {
            // 如果是左眼，设置左瞳孔的初始位置
            pupil.style.transform = "translate(10px, 10px)";
          } else if (eye.classList.contains("right-eye")) {
            // 如果是右眼，设置右瞳孔的初始位置
            pupil.style.transform = "translate(-10px, -10px)";
          }
        });
        // 恢复嘴巴的border-radius
        mouth.style.borderRadius = "10px 10px 100px 100px";

        // 恢复eyeBox、tuoyuan1、tuoyuan2和mouth的位置
        eyeBox.style.transform = "translateY(0px)";
        tuoyuan1.style.transform = "translateY(0px)";
        tuoyuan2.style.transform = "translateY(0px)";
        mouth.style.transform = "translateY(0px)";

        // 恢复tuoyuan1和tuoyuan2的透明度
        tuoyuan1.style.opacity = 1;
        tuoyuan2.style.opacity = 1;

        // 恢复face的背景颜色
        face.style.background = `
          radial-gradient(circle, #fae079 30%, #e9c36b 100%)
        `;
      };

      this.updatePupilPosition = (e) => {
        eyes.forEach((eye) => {
          const pupil = eye.querySelector(".pupil");
          const eyeRect = eye.getBoundingClientRect();
          const eyeCenterX = eyeRect.left + eyeRect.width / 2;
          const eyeCenterY = eyeRect.top + eyeRect.height / 2;

          const dx = (e.clientX - eyeCenterX) / eyeRect.width;
          const dy = (e.clientY - eyeCenterY) / eyeRect.height;

          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 0.9;
          const clampedDistance = Math.min(distance, maxDistance);

          const angle = Math.atan2(dy, dx);
          const pupilX =
            Math.cos(angle) *
            clampedDistance *
            (eyeRect.width / 2 - pupil.offsetWidth / 2);
          const pupilY =
            Math.sin(angle) *
            clampedDistance *
            (eyeRect.height / 2 - pupil.offsetHeight / 2);

          pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
        });
      };

      this.updateMouthBorderRadius = (e) => {
        const boxRect = box2.getBoundingClientRect();
        const boxWidth = boxRect.width;
        const boxHeight = boxRect.height;

        const mouseX = e.clientX - boxRect.left;
        const mouseY = e.clientY - boxRect.top;

        const distanceToBottomLeft = Math.sqrt(
          mouseX * mouseX + (boxHeight - mouseY) * (boxHeight - mouseY)
        );
        const distanceToBottomRight = Math.sqrt(
          (boxWidth - mouseX) * (boxWidth - mouseX) +
            (boxHeight - mouseY) * (boxHeight - mouseY)
        );

        const ratio =
          distanceToBottomLeft / (distanceToBottomLeft + distanceToBottomRight);

        const borderRadiusTopLeft = lerp(10, 60, ratio);
        const borderRadiusTopRight = lerp(10, 60, ratio);
        const borderRadiusBottomLeft = lerp(100, 20, ratio);
        const borderRadiusBottomRight = lerp(100, 20, ratio);
        const facePX = lerp(0, 15, ratio);

        mouth.style.borderRadius = `
          ${borderRadiusTopLeft}px 
          ${borderRadiusTopRight}px 
          ${borderRadiusBottomRight}px 
          ${borderRadiusBottomLeft}px
        `;
        eyeBox.style.transform = `translateY(${facePX}px)`;
        tuoyuan1.style.transform = `translateY(${facePX}px)`;
        tuoyuan2.style.transform = `translateY(${facePX}px)`;
        mouth.style.transform = `translateY(${facePX}px)`;
      };

      this.updateFaceColor = (e) => {
        const boxRect = box2.getBoundingClientRect();
        const boxWidth = boxRect.width;
        const boxHeight = boxRect.height;

        const mouseX = e.clientX - boxRect.left;
        const mouseY = e.clientY - boxRect.top;

        const distanceToBottomRight = Math.sqrt(
          (boxWidth - mouseX) ** 2 + (boxHeight - mouseY) ** 2
        );
        const maxDistance = Math.sqrt(boxWidth ** 2 + boxHeight ** 2);
        let ratio = 1 - distanceToBottomRight / maxDistance;

        if (ratio < 0.35) {
          face.style.background = `
            radial-gradient(circle, #fae079 30%, #e9c36b 100%)
          `;
        } else {
          const adjustedRatio = (ratio - 0.35) / (1 - 0.35);
          const opacity = Math.min(adjustedRatio, 1);
          const tuoyuanOpcity = 1 - opacity;
          tuoyuan1.style.opacity = tuoyuanOpcity;
          tuoyuan2.style.opacity = tuoyuanOpcity;
          face.style.background = `
            linear-gradient(to bottom, rgba(93, 155, 104, ${opacity}), rgba(93, 155, 104, 0)) 0 0/100% 80% no-repeat,
            radial-gradient(circle, #fae079 30%, #e9c36b 100%)
          `;
        }
      };
    },
  },
};
</script>

<style scoped>


.box2 {
  width: 550px;
  height: 550px;
  display: flex;
  background-color: palegoldenrod;
  justify-content: center;
  align-items: center;
  position: relative;
}

.face {
  width: 225px;
  height: 225px;
  border-radius: 50%;
  border: #e9c36b 2px solid;
  transition: 0.5s;
  background: radial-gradient(circle, #fae079 30%, #e9c36b 100%);
  box-shadow: 0 0 5px 0 rgba(250, 176, 3, 0.8);
  position: relative;
}

.mouth {
  width: 100px;
  height: 50px;
  padding-top: 2px;
  background-color: #a93332;
  border-radius: 10px 10px 100px 100px;
  border: none;
  transition: border-radius 0.3s, transform 0.1s;
  will-change: border-radius, transform;
  overflow: hidden;
  position: absolute;
  bottom: 31px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}

.mouth:hover {
  border-radius: 60px 60px 20px 20px;
}

.tooth {
  width: 15px;
  height: 7.5px;
  border-radius: 1px 1px 3px 3px;
  background-color: #fff;
  float: right;
  margin-right: 30px;
}

.tongue {
  width: 50px;
  height: 30px;
  background-color: #89292a;
  border-radius: 20px 20px 5px 5px;
  float: left;
  margin-left: 10px;
  margin-top: 15px;
}

.tuoyuan1,
.tuoyuan2 {
  width: 40px;
  height: 20px;
  background-color: #f2b07ea8;
  border: 2px solid #f2b07eb3;
  border-radius: 50% / 50%;
  position: absolute;
  transition: 0.3s;
}

.tuoyuan1 {
  left: 25px;
  top: 120px;
}

.tuoyuan2 {
  right: 25px;
  top: 120px;
}

.eyeBox {
  position: absolute;
  top: 77px;
  left: 53px;
  z-index: 99;
  transition: 0.3s;
}

.eye-container {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.eye {
  width: 50px;
  height: 50px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: box-shadow 0.2s ease-out;
}

.left-eye {
  margin-right: 10px;
}

.right-eye {
  margin-left: 10px;
}

.left-pupil {
  transform: translate(10px, 10px);
}

.right-pupil {
  transform: translate(-10px, -10px);
}

.pupil {
  width: 20px;
  height: 20px;
  background-color: #432210;
  border-radius: 50%;
  position: relative;
  transition: transform 0.2s ease-out;
}

.title {
  position: absolute;
  top: 0px;
  left: 10px;
}

.yes,
.no {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 30px;
  width: 50px;
  letter-spacing: 3px;
  font-family: "Courier New", Courier, monospace;
  font-weight: 700;
  background-color: rgb(167, 58, 58);
  border: none;
  border-radius: 5px;
}

.no {
  left: 0;
  background-color: palegreen;
}
</style>