import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    itau: {},
  },
  mutations: {
    authSuccess(state, data) {
      state.itau = data; // eslint-disable-line
    }
  },
  actions: {
    login({ commit }, user) {
      const url = `${process.env.API_URL}/itau`;
      return axios.post(url, user)
        .then(response => commit('authSuccess', response.data));
    }
  },
  getters: {
    itauData: state => state.itau
  }
});
