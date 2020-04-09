import imgur from "../api/imgur"
import qs from "qs"

const state = {
  token: localStorage.getItem("token") || null,
  username: localStorage.getItem("username") || ""
}

const getters = {
  isLoggedIn: ({token}) => !!token,
  username: ({ username }) => username
}

const mutations = {
  setToken(state, token) {
    state.token = token
  },
  setUsername(state, username) {
    state.username = username
  }
}

const actions = {
  logout({ commit }) {
    commit("setToken", null)
    commit("setUsername", "")
    localStorage.removeItem("token")
    localStorage.removeItem("username")
  },
  login() {
    imgur.login()
  },
  finalizeLogin({ commit }) {
    const {access_token: token, account_username: username} = qs.parse(window.location.hash.replace("#", ""))
    commit("setToken", token)
    commit("setUsername", username)
    localStorage.setItem("token", token)
    localStorage.setItem("username", username)
  }
}

export default {
  state, getters, mutations, actions
}