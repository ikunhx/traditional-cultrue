<template>
  <div :class="[isChange ? 'box2-c' : 'box2']">
    <div class="shell">
      <div :class="[isChange ? 'form-c' : 'form']">
        <img :src="imgUrl" class="leftImg" @click="handelChange" />
        <h2 :class="[isChange ? 'title-c' : 'title']">LOGIN</h2>
        <div class="form-item">
          <label for="username" :class="[isChange ? 'Label-c' : 'Label']"
            >Username</label
          >
          <div class="input-wrapper">
            <input
              type="text"
              id="username"
              autocomplete="off"
              autocorrect="off"
              autocapitalize="off"
              spellcheck="false"
              data-lpignore="true"
              :class="[isChange ? 'input-c' : 'input']"
              v-model="account"
            />
          </div>
        </div>
        <div class="form-item">
          <label for="password" :class="[isChange ? 'Label-c' : 'Label']"
            >Password</label
          >
          <div class="input-wrapper">
            <input
              :type="passwordType"
              id="password"
              autocomplete="off"
              autocorrect="off"
              autocapitalize="off"
              spellcheck="false"
              data-lpignore="true"
              ref="password"
              :class="[isChange ? 'input-c' : 'input']"
              class="password"
              v-model="password"
            />
            <button type="button" id="eyeball" ref="eye" @click="eyeClick">
              <div :class="[isChange ? 'eye-c' : 'eye']"></div>
            </button>
            <div :id="[isChange ? 'beam-c' : 'beam']" ref="beam"></div>
          </div>
          <div class="form-item">
            <label for="APIKEY" :class="[isChange ? 'Label-c' : 'Label']"
              >APIKEY</label
            >
            <div class="input-wrapper">
              <input
                type="text"
                id="apiKey"
                autocomplete="off"
                autocorrect="off"
                autocapitalize="off"
                spellcheck="false"
                data-lpignore="true"
                :class="[isChange ? 'input-c' : 'input']"
                v-model="apiKey"
                placeholder="选填"
              />
            </div>
          </div>
        </div>
        <button :class="[isChange ? 'submit-c' : 'submit']" @click="signUp">
          Sign up
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import { sign } from 'core-js/core/number';
import axios from "axios";
import Boss from "./Boss.vue";
export default {
  name: "SignUp",
  data() {
    return {
      isChange: false,
      account: "",
      password: "",
      apiKey: "",
    };
  },
  computed: {
    passwordType() {
      return this.isChange ? "text" : "password";
    },
    imgUrl() {
      return this.isChange
        ? require("@/assets/image/Login/left.png")
        : require("@/assets/image/Login/left2.png");
    },
  },
  methods: {
    eyeClick(e) {
      // e.preventDefault();
      this.isChange = !this.isChange;
    },
    handelChange() {
      this.$bus.$emit("c-Login", "Login");
    },
    handleHome() {
      this.$bus.$emit("c-home", "home");
    },
    handleBoss() {
      this.$bus.$emit("c-Boss", "Boss");
    },
    signUp() {
      const Uesr = {
        username: this.account,
        password: this.password,
        apikey: this.apiKey,
      };
      console.log(Uesr);
      if (Uesr.account === "") {
        this.$message.error("账号不能为空");
      } else if (Uesr.password === "") {
        this.$message.error("密码不能为空");
      } else {
        axios
          .post(`${this.$baseUrl}auth/register`, Uesr)
          .then((response) => {
            console.log(response.data.data.admin);

            if (response.data.msg == "该用户已存在") {
              this.$message(response.data.msg);
            } else {
              this.$store.dispatch("setToken", response.data.data.token);
              this.$store.dispatch("setAdmin", response.data.data.admin);
              this.$store.dispatch("setName", "");
              this.$store.dispatch("setAge", "");
              this.$store.dispatch("setHobbit", "");
              this.$store.dispatch("setPhone", "");
              this.$store.dispatch("setAvatarImageUrl", "");
              this.$store.dispatch("setMotto", "");
              this.$store.dispatch("setCity", "");
              if (this.$store.state.admin == '1') {
                this.handleHome();
                console.log(4);
              } else {
                console.log(2);
                console.log(this.$store.state.admin);
                this.handleBoss();
              }
            }
          })
          .catch((error) => {
            this.$message.error(error.message);
          });
      }
    },
  },
  mounted() {
    const root = document.documentElement;
    const beam = this.$refs.beam;

    root.addEventListener("mousemove", (e) => {
      let rect = beam.getBoundingClientRect();
      let mouseX = rect.right + rect.width / 2;
      let mouseY = rect.top + rect.height / 2;
      let rad = Math.atan2(mouseX - e.pageX, mouseY - e.pageY);
      let degrees = rad * (20 / Math.PI) * -1 - 350;
      beam.style.transform = `translateY(-50%) rotate(${degrees}deg)`;
    });
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  transition: 0.2s;
}
.box2 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background-color: white;
}

.Label {
  font-size: 2rem;
  font-family: "优设标题黑";
  color: black;
}
.box2-c {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.9);
}

.Label-c {
  font-size: 2rem;
  font-family: "优设标题黑";
  color: white;
}
.shell {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("@/assets/image/Login/1jpg.jpg");
  background-size: cover;
}
.form {
  transform: translate3d(0, 0, 0);
  padding: 50px;
  border: 20px solid black;
  border-radius: 10px;
  box-shadow: 10px 10px 10px #00000065;
  position: relative;
}
.form-c {
  position: relative;
  transform: translate3d(0, 0, 0);
  padding: 50px;
  border: 20px solid rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 10px 10px 10px #00000065;
}
.form > * + * {
  margin-top: 15px;
}
.form-item > * + * {
  margin-top: 0.5rem;
}
.form-c > * + * {
  margin-top: 15px;
}
.form-item-c > * + * {
  margin-top: 0.5rem;
}
.title {
  font-size: 4rem;
  margin: 0;
  font-family: "优设标题黑";
  color: black;
}
.title-c {
  margin: 0;
  font-size: 4rem;
  font-family: "优设标题黑";
  color: white;
}

label:focus,
input:focus,
button:focus {
  outline-offset: 2px;
}

label::-moz-focus-inner,
input::-moz-focus-inner,
button::-moz-focus-inner {
  border: none;
}

#password button,
label,
input {
  color: black;
}

button {
  border: none;
}
.submit {
  cursor: pointer;
  width: 100%;
  margin: 20px 0 0 2px;
  padding: 0.75rem 1.25rem;
  color: white;
  background-color: black;
  box-shadow: 4px 4px 0 rgba(30, 144, 255, 0.2);
  font-size: 2rem;
  font-family: "优设标题黑";
}
.submit-c {
  cursor: pointer;
  width: 100%;
  margin: 20px 0 0 2px;
  padding: 0.75rem 1.25rem;
  color: rgba(0, 0, 0, 0.9);
  background-color: white;
  box-shadow: 4px 4px 0 rgba(30, 144, 255, 0.2);
  font-size: 2rem;
  font-family: "优设标题黑";
  color: black;
}
.submit:active {
  transform: translateY(1px);
}
.input-wrapper {
  position: relative;
}

input {
  padding: 0.75rem 4rem 0.75rem 0.75rem;
  width: 100%;
  border: 2px solid transparent;
  border-radius: 0;
  /* 设置背景颜色为透明 */
  background-color: transparent;
  box-shadow: inset 0 0 0 2px black, inset 6px 6px 0 rgba(30, 144, 255, 0.2),
    3px 3px 0 rgba(30, 144, 255, 0.2);
  -webkit-appearance: none;
  font-size: 2rem;
  font-family: "优设标题黑";
  color: black;
}
input:focus {
  outline-offset: 1px;
}
.input-c {
  padding: 0.75rem 4rem 0.75rem 0.75rem;
  width: 100%;
  border-radius: 0;
  box-shadow: inset 0 0 0 2px black;
  border: 2px dashed white;
  font-size: 2rem;
  font-family: "优设标题黑";
  color: white;
}
.input-c:focus {
  outline: none;
  border-color: rgb(255, 255, 145);
  font-size: 2rem;
  font-family: "优设标题黑";
  color: white;
}
.password {
  color: black;
}
.password:focus {
  color: black;
}
#eyeball {
  --size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  position: absolute;
  top: 50%;
  right: 0.75rem;
  border: none;
  background-color: transparent;
  transform: translateY(-50%);
}
#eyeball:active {
  transform: translateY(calc(-50% + 1px));
}
.eye {
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid black;
  border-radius: calc(1.25rem / 1.5) 0;
  transform: rotate(45deg);
}
.eye-c {
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid white;
  border-radius: calc(1.25rem / 1.5) 0;
  transform: rotate(45deg);
}
.eye:before,
.eye:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  border-radius: 100%;
}
.eye-c:before,
.eye-c:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  border-radius: 100%;
}
.eye:before {
  width: 35%;
  height: 35%;
  background-color: black;
}
.eye-c:before {
  width: 35%;
  height: 35%;
  background-color: white;
}
.eye:after {
  width: 65%;
  height: 65%;
  border: 2px solid black;
  border-radius: 100%;
}
.eye-c:after {
  width: 65%;
  height: 65%;
  border: 2px solid white;
  border-radius: 100%;
}
#beam {
  position: absolute;
  top: 50%;
  right: 1.75rem;
  clip-path: polygon(100% 50%, 100% 50%, 0 0, 0 100%);
  width: 100vw;
  height: 25vw;
  z-index: 1;
  mix-blend-mode: multiply;
  transition: transform 200ms ease-out;
  transform-origin: 100% 50%;
  /* transform: translateY(-50%) rotate(var(--beamDegrees, 0)); */
  pointer-events: none;
}
#beam-c {
  position: absolute;
  top: 50%;
  right: 1.75rem;
  clip-path: polygon(100% 50%, 100% 50%, 0 0, 0 100%);
  width: 100vw;
  height: 25vw;
  z-index: 1;
  mix-blend-mode: multiply;
  transition: transform 200ms ease-out;
  transform-origin: 100% 50%;
  /* transform: translateY(-50%) rotate(var(--beamDegrees, 0)); */
  pointer-events: none;
  background: rgb(255, 255, 145);
}
.leftImg {
  position: absolute;
  width: 10%;
  top: 5%;
  right: 5%;
  cursor: pointer;
}
</style>