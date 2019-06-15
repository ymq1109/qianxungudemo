<template>
  <div id="NavBar">
      <div class="navInfo">
    <el-menu>
      <template v-for="(item,index) in list">
        <el-menu-item :index="index+''" :key="item+index">
          <i class="el-icon-setting"></i>
          <span slot="title" @click="pushView({name:item.name})">{{item.cn}}</span>
        </el-menu-item>
      </template>
    </el-menu></div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { cn: "日历管理", name: "Daily" },
        { cn: "留言管理", name: "Message" },
        { cn: "类型管理", name: "MusicTypes" },
        { cn: "微信端接口", name: "Users" },
        { cn: "音频管理", name: "MusicInfo" }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
#NavBar {
  width: 100%;
  height: 100%;
  .navInfo{
      margin-top: 40px;   
       
       ul{
           list-style: none;
           width: 100%;
           background: linear-gradient(90deg, rgb(195, 201, 194), #11674e);
           li{
               width: 100%;
               height: 40px;
               line-height: 40px;
               text-align: center;
           }
       }
  }
}
</style>


