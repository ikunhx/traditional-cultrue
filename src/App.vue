<template>
  <div id="app">
      
       <!-- <Loading class="Loading"/> -->
    <div class="box">
      <router-view></router-view>
    </div>
    <!-- <FloatBall></FloatBall> -->
    <!-- <CandyMan></CandyMan> -->
    <!-- <Login></Login> -->
    <!-- <SwitchBtn></SwitchBtn> -->
    <!-- <SignUp></SignUp> -->
     
  </div>
</template>

<script>
import Loading from "./components/Loading.vue";
import Login from "./pages/Login.vue";
import CandyMan from "./components/CandyMan.vue";
import FloatBall from "./components/FloatBall.vue";
export default {
  name: "App",
  data() {
    return {
      isLoading: true,
    };
  },

  components: {
    Loading,
    Login,
    CandyMan,
    FloatBall
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
    if (this.$route.path !== '/' + name) {
      this.$router.push({
        name: name,
      });
    }
  },
  },
  mounted() {
    this.$bus.$on("c-home", this.homeShow);
    this.$bus.$on("c-Login", (name) => this.showPage(name));
    this.$bus.$on("c-SignUp", (name) => this.showPage(name));
    this.$bus.$on("c-Cixiu", (name) => this.showPage(name));
    this.$bus.$on("c-Hanfu", (name) => this.showPage(name));
    this.$bus.$on("c-Jingjv", (name) => this.showPage(name));
    this.$bus.$on("c-Rujia", (name) => this.showPage(name));
    this.$bus.$on("c-Zhongyi", (name) => this.showPage(name));

  },
};
</script>

<style>
/* 定义进入和离开的过渡效果 */
*{
  margin: 0;
  padding: 0;
}
</style>
