<template>
  <div id="app">
    <!-- <Loading class="Loading"/> -->
    <div class="box">
      <router-view></router-view>
    </div>
    <!-- <Login></Login> -->
    <!-- <SwitchBtn></SwitchBtn> -->
    <!-- <SignUp></SignUp> -->
     <!-- test -->
  </div>
</template>

<script>
import Loading from "./components/Loading.vue";
import Login from "./pages/Login.vue";
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
    LoginShow(name) {
      if(this.$route.path!=='/Login'){
        this.$router.push({
          name: name,
        });
      }
    },
    SignUpShow(name) {
      if(this.$route.path!=='/SignUp'){
        this.$router.push({
          name: name,
        });
      }
    },
  },
  mounted() {
    this.$bus.$on("c-home", this.homeShow);
    this.$bus.$on("c-Login", this.LoginShow);
    this.$bus.$on("c-SignUp", this.SignUpShow);

  },
};
</script>

<style>
/* 定义进入和离开的过渡效果 */
</style>
