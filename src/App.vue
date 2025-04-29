<template>
  <div id="app">
    <Loading class="Loading" v-once />
    <div class="box">
      <router-view></router-view>
    </div>
    <!-- <div class="box" v-if="type === '0'">
      <Boss></Boss>
    </div> -->
    <div class="box" v-if="type === 'isClose'">
      <CandyMan></CandyMan>
    </div>
    <!-- <FloatBall></FloatBall> -->

    <!-- <Login></Login> -->
    <!-- <SwitchBtn></SwitchBtn> -->
    <!-- <SignUp></SignUp> -->
  </div>
</template>

<script>
import axios from "axios";
import Loading from "./components/Loading.vue";
import Login from "./pages/Login.vue";
import CandyMan from "./components/CandyMan.vue";
import FloatBall from "./components/FloatBall.vue";
import Boss from "./pages/Boss.vue";
export default {
  name: "App",
  data() {
    return {
      isLoading: true,
      type: "",
      isClose: false,
      currentTimestamp: "",
      currentTimestamp2: "",
      intervalId: null, // 用于存储定时器的 ID，方便后续清除
    };
  },
  beforeDestroy() {
    this.isClose = true;
  },
  components: {
    Loading,
    Login,
    CandyMan,
    FloatBall,
    // Boss,
  },
  methods: {
    homeShow(name) {
      if (this.$route.path !== "/home" && this.$router.path !== "/") {
        console.log(name);
        this.$router.push({
          name: name,
        });
        console.log("####");
      }
    },

    showPage(name) {
      console.log(name);
      if (this.$route.path !== "/" + name) {
        this.$router.push({
          name: name,
        });
      }
    },
    testUseTime() {
      const time={
        useTime:1
      }
      axios
        .post(`${this.$baseUrl}auth/time`, time, {
          headers: {
            token: `${this.$store.state.token}`,
          },
        })
        .then((response) => {
          console.log("使用时间已成功发送到后端");
        })
        .catch((error) => {
          console.error("发送使用时间到后端时出错");
        });
    },
  },
  mounted() {
    if (this.$store.state.token !== "") {
      this.intervalId = setInterval(this.testUseTime, 60000);
    }
    this.$bus.$on("c-home", this.homeShow);
    this.$bus.$on("c-Login", (name) => this.showPage(name));
    this.$bus.$on("c-SignUp", (name) => this.showPage(name));
    this.$bus.$on("c-Cixiu", (name) => this.showPage(name));
    this.$bus.$on("c-Hanfu", (name) => this.showPage(name));
    this.$bus.$on("c-Jingjv", (name) => this.showPage(name));
    this.$bus.$on("c-Rujia", (name) => this.showPage(name));
    this.$bus.$on("c-Zhongyi", (name) => this.showPage(name));
    this.$bus.$on("c-Center", (name) => this.showPage(name));
    this.$bus.$on("c-City", (name) => this.showPage(name));
    this.$bus.$on("c-Boss", (name) => this.showPage(name));

    this.type = this.$store.state.admin;
    this.currentTimestamp = Date.now();
  },
  beforeDestroy() {
    window.removeEventListener("unload", this.testUseTime);
  },
};
</script>

<style>
/* 定义进入和离开的过渡效果 */
* {
  margin: 0;
  padding: 0;
}
</style>
