// src/store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import persistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // userName: '', // 用户信息存储在这里
    // token:'',
  },
  mutations: {
    // setUser(state, userName) {
    //   state.userName = userName;
    // },
    
  },
  actions: {
  
    // setToken({ commit }, token) {
    //   commit('setToken', token);  // 提交 mutation
    // },
    

  },
  plugins: [persistedState()],
  getters: {
    // getToken: (state) => state.token,
  },
});