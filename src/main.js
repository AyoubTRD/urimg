import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from "./store"

import { Plugin } from "vue-fragment"

import AuthHandler from "./views/AuthHandler"
import Home from "./views/Home";
import Gallery from "./views/Gallery";

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Plugin)

const router = new VueRouter({
  mode: "history",
  routes: [
    {path: "/oauth/callback", component: AuthHandler},
    {path: "/", component: Home},
    {path: "/gallery", component: Gallery}
  ]
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
