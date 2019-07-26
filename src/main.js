import Vue from "vue";

import App from "./App.vue";

import vuetify from "./plugins/vuetify";

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
  vuetify,
  render: h => h(App)
}).$mount("#app");
