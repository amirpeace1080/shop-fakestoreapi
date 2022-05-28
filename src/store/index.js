import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Promise from 'core-js/features/promise'

Vue.use(Vuex)

const mainurl = "https://fakestoreapi.com";

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token") || "",
    cart: [],
  },
  getters: {
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
  },
  mutations: {
    set(state, [variable, value]) {
      state[variable] = value;
    },
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, token) {
      state.status = "success";
      state.token = token;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
    },
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: `${mainurl}/auth/login`, data: user, method: 'POST' })
          .then(resp => {
            const token = resp.data.token
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            commit('auth_success', token)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.clear();
            delete axios.defaults.headers.common['Authorization']
            reject(err)
          })
      })
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        commit('logout')
        localStorage.clear();
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    },
    products({ commit }) {
      return new Promise((resolve, reject) => {
        axios({
          url: `${mainurl}/products`,
          method: "GET",
        })
          .then((resp) => {
            commit("auth_success", resp.data.data);
            resolve(resp);
          })
          .catch((err) => {
            if (err.response.status == 401) {
              localStorage.removeItem("token");
              delete axios.defaults.headers.common["Authorization"];
            }
            reject(err);
          });
      });
    },
    productItem({ commit }, {id}) {
      return new Promise((resolve, reject) => {
        axios({
          url: `${mainurl}/products/${id}`,
          method: "GET",
        })
          .then((resp) => {
            commit("auth_success", resp.data.data);
            resolve(resp);
          })
          .catch((err) => {
            if (err.response.status == 401) {
              localStorage.removeItem("token");
              delete axios.defaults.headers.common["Authorization"];
            }
            reject(err);
          });
      });
    },
  },
  modules: {
  }
})
