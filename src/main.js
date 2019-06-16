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

router.beforeEach((to,from,next)=>{
  if(to.path==='/login'){
    next()
  }else{
    /* 判断是否已经登录 */
    var token=localStorage.getItem("token");
    if(token){
      next();
    }else{
      next({path:'/login',query:{redirect:to.path}})
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
