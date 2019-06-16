import Vue from 'vue'
var apis={
    checkDynamicCode:'/checkDynamicCode',
    signin:'/signin',
    setDailyBackground:'/daily/setDailyBackground',
    findDailyBackground:'/daily/findDailyBackground',
    setDailyBackgroundLike:'/daily/setDailyBackgroundLike',
    addNewMessage:'/message/addNewMessage',
    addNewMusicType:'/music/addNewMusicType',
    deleteMusicType:'/music/deleteMusicType',
    wxsigin:'/user/signin'
    
}
Vue.prototype.$apis=apis;
export default apis;