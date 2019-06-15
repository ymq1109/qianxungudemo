import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);

export default new Router({
  routes: [
    {path:'/',redirect:'/Home'},
    {path:'/Home',name:'Home',component:()=>import(/*webpackChunkName:'Home'*/ '@/components/Home'),
    children:[
      {path:'/Daily',name:'Daily',component:()=>import(/*webpackChunkName:'Daily'*/ '@/components/Daily/Daily')},
      {path:'/Message',name:'Message',component:()=>import(/*webpackChunkName:'Message'*/ '@/components/Message/Message')},
      {path:'/MusicTypes',name:'MusicTypes',component:()=>import(/*webpackChunkName:'MusicTypes'*/ '@/components/MusicTypes/MusicTypes')},
      {path:'/Users',name:'Users',component:()=>import(/*webpackChunkName:'Users'*/ '@/components/Users/Users')},
      {path:'/MusicInfo',name:'MusicInfo',component:()=>import(/*webpackChunkName:'MusicInfo'*/ '@/components/MusicInfo/MusicInfo')}
    ]
  },
    {path:'/Login',name:'Login',component:()=>import(/*webpackChunkName:'Login'*/ '@/components/Login/Login')}
  ]
});
