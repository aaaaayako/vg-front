import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    fullName: '',
    chocoNumber: 1,
    prizeWinner: [],
    createdChannelUrl: '',
  },

  getters: {
    fullName(state) {
      return state.fullName;
    },
    chocoNumber(state) {
      return state.chocoNumber;
    },
    prizeWinner(state) {
      return state.prizeWinner;
    },
    createdChannelUrl(state) {
      return state.createdChannelUrl;
    },
  },

  mutations: {
    setFullName(state, payload) {
      state.fullName = payload.fullName;
    },
    setChocoNumber(state, payload) {
      state.chocoNumber = payload.chocoNumber;
    },
    setPrizeWinner(state, payload) {
      state.prizeWinner = payload.data.name;
      state.createdChannelUrl = payload.data.url;
    },
  },

  actions: {
    doUpdate({ commit }, { fullName }) {
      commit('setFullName', { fullName });
    },
    doUpdateNum({ commit }, { chocoNumber }) {
      commit('setChocoNumber', { chocoNumber });
    },
    post({ commit }, { fullName, chocoNumber }) {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: JSON.stringify({ name: fullName, number: parseInt(chocoNumber, 10) }),
        url: 'https://r17eo472bg.execute-api.ap-northeast-1.amazonaws.com/dev/users/random',
      };
      axios(options).then((res) => {
        if (res.status === 200) {
          commit('setPrizeWinner', res);
        } else {
          throw new Error('レスポンスエラー');
        }
      }).catch((error) => {
        console.log(error);
      });
    },
  },
});

export default store;
