// src/store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import persistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    topRightOffset: 0,
    topLeftOffset: 0,
    avatar:'',    
    token:'',
    admin:'',
    name:'',
    age:'',
    hobbit:'',
    motto:'',
    phone:'',
    avatarImageUrl:'',
    city:''






  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setAdmin(state, admin) {
      state.admin = admin;
    },
    setTopRightOffset(state, topRightOffset) {
      state.topRightOffset = topRightOffset;
    },
    setTopLeftOffset(state, topLeftOffset) {
      state.topLeftOffset = topLeftOffset;
    },
    setName(state, name) {
      state.name = name;
    },
    setAge(state, age) {
      state.age = age;
    },
    setHobbit(state, hobbit) {
      state.hobbit = hobbit;
    },
    setPhone(state, phone) {
      state.phone = phone;
    },
    setAvatarImageUrl(state, avatarImageUrl) {
      state.avatarImageUrl = avatarImageUrl;
    },
    setMotto(state, motto) {
      state.motto = motto;
    },
    
    setCity(state, city) {
      state.city = city;
    },
    
  },
  actions: {
  
    setToken({ commit }, token) {
      commit('setToken', token);  // 提交 mutation
    },
    setAdmin({ commit }, admin) {
      commit('setAdmin', admin);  // 提交 mutation
    },
    setTopRightOffset({ commit }, topRightOffset) {
      commit('setTopRightOffset', topRightOffset);  // 提交 mutation
    },
    setTopLeftOffset({ commit }, topLeftOffset) {
      commit('setTopLeftOffset', topLeftOffset);  // 提交 mutation
    },
    setName({ commit }, name) {
      commit('setName', name);  // 提交 mutation
    },
    setAge({ commit }, age) {
      commit('setAge', age);  // 提交 mutation
    },
    setHobbit({ commit }, hobbit) {
      commit('setHobbit', hobbit);  // 提交 mutation
    },
    setPhone({ commit }, phone) {
      commit('setPhone', phone);  // 提交 mutation
    },
    setAvatarImageUrl({ commit }, avatarImageUrl) {
      commit('setAvatarImageUrl', avatarImageUrl);  // 提交 mutation
    },
    setMotto({ commit }, motto) {
      commit('setMotto', motto);  // 提交 mutation
    },
    setCity({ commit }, city) {
      commit('setCity', city);  // 提交 mutation
    },
    

  },
  plugins: [persistedState()],
  getters: {
    getToken: (state) => state.token,
    getAdmin: (state) => state.admin,
    getTopRightOffset: (state) => state.topRightOffset,
    getTopLeftOffset: (state) => state.topLeftOffset,
    setName: (state) => state.name,
    setAge: (state) => state.age,
    setHobbit: (state) => state.hobbit,
    setPhone: (state) => state.phone,
    setMotto: (state) => state.motto,
    setAvatarImageUrl: (state) => state.avatarImageUrl,
    setCity: (state) => state.city,
  },
});