<template>
  <div id="app">
    <!-- <Loading class="Loading"/> -->
    <div class="box">
      <router-view></router-view>
    </div>
    <!-- <Login></Login> -->
    <!-- <SwitchBtn></SwitchBtn> -->
    <!-- <SignUp></SignUp> -->
     
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
    showPage(name) {
    console.log(name);
    if (this.$route.path !== '/' + name) {
      this.$router.push({
        name: name,
      });
    }
  },
    // LoginShow(name) {
    //   if(this.$route.path!=='/Login'){
    //     this.$router.push({
    //       name: name,
    //     });
    //   }
    // },
    // SignUpShow(name) {
    //   if(this.$route.path!=='/SignUp'){
    //     this.$router.push({
    //       name: name,
    //     });
    //   }
    // },
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
