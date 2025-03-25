<template>
  <div :class="['box', { open: isOpen }]">
    <div class="switchBox">
      <label class="switch">
        <input type="checkbox" v-model="isOpen" @change="handleInput" class="switchBtn"/>
        <span class="slider"></span>
      </label>
    </div>
    <div class="login">
      <div :class="['card', { open: isOpen }]">
        <div :class="['owl', { 'owl-close': isOwlClose }]">
          <div class="eyes"></div>
          <div class="arm-up-right"></div>
          <div class="arm-up-left"></div>
          <div class="arm-down-left"></div>
          <div class="arm-down-right"></div>
        </div>
        <div class="content">
          <div class="item">
            <img
              class="icon"
              src="@/assets/image/Login/account.png"
              alt="account icon"
            />
            <input type="text" placeholder="account" v-model="account"/>
          </div>
          <div class="item">
            <img
              class="icon"
              src="@/assets/image/Login/pwd.png"
              alt="password icon"
            />
            <input
              type="password"
              placeholder="password"
              @focus="onFocus"
              @blur="onBlur"
              v-model="password"
            />
          </div>
         
          <div class="item">
            <button class="loginBtn" @click="login">登录</button>
            <button class="signBtn" @click="handleChange">注册</button>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>
  
  <script>
import axios from 'axios';
// import vueConfig from 'vue.config';
export default {
  name: "Login",
  data() {
    return {
      isOwlClose: false,
      isOpen: false,
      account:'',
      password:'',
    };
  },
  methods: {
    onFocus() {
      this.isOwlClose = true;
    },
    onBlur() {
      this.isOwlClose = false;
    },
    handleChange(){
      this.$bus.$emit("c-SignUp",'SignUp')
    },
    
    handleInput() {
        // 这里可以根据需要添加额外的逻辑
        // console.log("Switch toggled:", this.isOpen);
      },
      login(){
        const formData={
          account:this.account,
          password:this.password,
        }
        console.log(formData);
        if(formData.account===''){
          this.$message.error('账号不能为空');
        }
        else if(formData.password===''){
          this.$message.error('密码不能为空');
        }else{
          axios
          .post(
            `${this.$baseUrl}user/login`,
            formData,
          )
          .then((response) => {
            this.$store.dispatch("setToken", response.data.data.token);
            this.$message(response.message);
          })
          .catch((error) => {
            this.$message.error(error.message);
           
          });
        }
       
      }
  },
  // beforeDestroy
};
</script>
  
<style scoped>
.box{
  height: 100vh;
  width: 100vw;
}
.login {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
    /* margin: 100px; */
    
    
}


.card {
    position: relative;
    padding: 30px;
    width: 400px;
    border-radius: 10px;
    box-shadow: 0 0 6px #dddddd;
}
.card::after {
  content: "";
  position: absolute;
  top: 79%;
  left: 0;
  height: 180px;
  width: 100%;
  background-color: #fff;
  filter: blur(2em);
  opacity: .7;
  transform: perspective(3.5em) rotateX(35deg) scale(1.6, 0.8);
  transition: all 0.83s;
}
.card.open::after {
  transition: all 0.83s;
  content: "";
  position: absolute;
  top: 65%;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #111111;
  filter: blur(2em);
  opacity: .7;
  transform: perspective(3.5em) rotateX(35deg) scale(1.6, 0.8);
}
.content .item {
    display: flex;
    position: relative;
    padding: 10px 0;
}

.content .icon {
    position: absolute;
    left: 8px;
    top: 20px;
    width: 20px;
    height: 20px;
}

.content .code {
    height: 40px;
}

.content input {
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    height: 40px;
    outline: 0;
    padding-left: 35px;
    width: 100%;
}

.content input::input-placeholder {
    color: #a8abb2 !important;
}

input::-webkit-input-placeholder {
    color: #a8abb2;
}

input::-moz-placeholder {
    color: #a8abb2;
}

input::-moz-placeholder {
    color: #a8abb2;
}

input::-ms-input-placeholder {
    color: #a8abb2;
}

.content button {
    width: 60%;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.1s;
    padding: 8px 15px;
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    margin-top: 5px;
  }

.content button:hover {
    background-color: rgba(64, 160, 255, 0.7);
}

.content button:active {
    background-color: rgba(64, 160, 255, 0.8);
}

.loginBtn{
  margin-right: 15px;
}
.signBtn{
  margin-left: 15px;
}
.owl {
    position: absolute;
    top: -82px;
    left: 50%;
    width: 116px;
    height: 92px;
    background-size: 116px 92px;
    margin-left: -64px;
    cursor: pointer;
    background-image: url('@/assets/image/Login/face.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.owl .eyes {
    width: 100%;
    height: 100%;
    opacity: 0;
    background-image: url('@/assets/image/Login/eye.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transition: 0.1s ease-out 0s;
}

.owl .arm-up-right {
    width: 51px;
    height: 41px;
    position: absolute;
    bottom: 10px;
    right: 5px;
    z-index: 2;
    background-position: 0 25px;
    opacity: 0;
    background-image: url('@/assets/image/Login/arm-up-right.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transform: translateX(57px) scale(0.8);
    transform-origin: 0 40px;
    transition: background-position 0.3s ease-out,
        transform 0.3s ease-out, opacity 0s linear 0.2s;
}

.owl .arm-up-left {
    position: absolute;
    bottom: 10px;
    left: -3px;
    width: 52px;
    height: 41px;
    z-index: 2;
    background-position: 0 25px;
    opacity: 0;
    transform: translateX(-34px) scale(0.8);
    transform-origin: 0 40px;
    background-image: url('@/assets/image/Login/arm-up-left.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transition: background-position 0.3s ease-out,
        transform 0.3s ease-out, opacity 0s linear 0.2s;
}

.owl .arm-down-left {
    position: absolute;
    bottom: 2px;
    left: -34px;
    width: 43px;
    height: 25px;
    z-index: 1;
    transition: 0.3s ease-out;
    background-image: url('@/assets/image/Login/arm-down-left.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.owl .arm-down-right {
    position: absolute;
    bottom: 1px;
    right: -40px;
    width: 43px;
    height: 26px;
    z-index: 1;
    transition: 0.3s ease-out;
    background-image: url('@/assets/image/Login/arm-down-right.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.owl-close .eyes {
    opacity: 1;
    transition: 0.1s ease-out 0.2s;
}

.owl-close .arm-up-right {
    background-position: 0 0;
    opacity: 1;
    transform: scale(1);
    transition: background-position 0.3s ease-out,
        transform 0.3s ease-out;
}

.owl-close .arm-up-left {
    transform: scale(1);
    background-position: 0 0;
    opacity: 1;
    transition: background-position 0.3s ease-out,
        transform 0.3s ease-out;

}

.owl-close .arm-down-left {
    transform: translateX(40px) scale(0) translateY(-10px);
}

.owl-close .arm-down-right {
    transform: translateX(-32px) scale(0) translateY(-8px);
}

/* ------------------------------------ */
.box {
    background-color: #000;
     height: 100vh;
    width: 100vw;
    transition: 0.5s;
    color: #ccc;
    position: relative;
    background-image: url("@/assets/image/Login/1jpg.jpg");
    background-size: cover;
  }
  
  .box.open {
    background-color: #ccc;
    color: #000;
    background-image: url("https://pic.52112.com/180717/JPG-180717_331/qrJmTIiHDY_small.jpg");
    background-size: cover;
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
  .switchBox{
position: absolute;
top: 5vh;
right: 6vw;
  }
</style>