import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import  './utils/mqaxios'
import 'animate.css'
import './apis'

Vue.config.productionTip = false;
Vue.use(ElementUI);
import "reset-css"
import "@/mixins"
import mqTable from '@/components/Commons/mqTable'
Vue.component('mq-table',mqTable)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
