import Vue from "vue";
import App from "./App.vue";

import Vuetify from "vuetify";
Vue.use(Vuetify);

import VueRouter from "vue-router";
Vue.use(VueRouter);

import routes from "./routes";

Vue.config.productionTip = false;

const router = new VueRouter({
  routes // short for `routes: routes`
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
