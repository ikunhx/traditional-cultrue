// src/store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import persistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    topRightOffset: 0,
    topLeftOffset: 0,
    avatar:'http://localhost:8080/img/ai.d3e17c3d.gif',    
    token:'',
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setTopRightOffset(state, topRightOffset) {
      state.topRightOffset = topRightOffset;
    },
    setTopLeftOffset(state, topLeftOffset) {
      state.topLeftOffset = topLeftOffset;
    },
    
  },
  actions: {
  
    setToken({ commit }, token) {
      commit('setToken', token);  // 提交 mutation
    },
    setTopRightOffset({ commit }, topRightOffset) {
      commit('setTopRightOffset', topRightOffset);  // 提交 mutation
    },
    setTopLeftOffset({ commit }, topLeftOffset) {
      commit('setTopLeftOffset', topLeftOffset);  // 提交 mutation
    },
    

  },
  plugins: [persistedState()],
  getters: {
    getToken: (state) => state.token,
    getTopRightOffset: (state) => state.topRightOffset,
    getTopLeftOffset: (state) => state.topLeftOffset,
  },
});