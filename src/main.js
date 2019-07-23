import Vue from "vue";

import App from "./App.vue";

import Vuetify from "vuetify";
import "material-design-icons-iconfont/dist/material-design-icons.css";
Vue.use(Vuetify, {
  iconfont: "md"
});

import VueRouter from "vue-router";
Vue.use(VueRouter);

import VueClipboard from "vue-clipboard2";
Vue.use(VueClipboard);

import routes from "./routes";

Vue.config.productionTip = false;

const router = new VueRouter({
  routes // short for `routes: routes`
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
