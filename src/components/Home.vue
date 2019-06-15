<template>
  <div id="Home">
    <div class="navBar">
      <nav-bar/>
    </div>
    <div class="content">
      <div class="topcontent">
        <el-button type="danger" size="mini" @click="logout">
          <i class="el-icon-warning"></i>退出
        </el-button>
      </div>
      <transition enter-active-class="animated zoomIn" leave-active-class="animated rotateOut">
        <router-view/>
      </transition>
    </div>
  </div>
</template>
<script>
import NavBar from "./NavBar";
export default {
  components: { NavBar },
  data() {
    return {};
  },
  methods: {
    logout() {
      var action = () => {
        localStorage.clear();
        this.$router.push({ name: "Login" });
        console.log("跳转到登录页面");
      };
      this.operatorConfirm("退出", action);
    }
  }
};
</script>
<style lang="scss" scoped>
#Home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background: linear-gradient(180deg,rgb(195,201,194),#11674E);
  .navBar {
    width: 15%;
    min-width: 250px;
    height: 100%;
   

  }
  .content {
    width: 85%;
    height: 100%;
    .topcontent {
      width: 100%;
      height: 5%;
      background: linear-gradient(90deg, rgb(195, 201, 194), #11674e);
      padding: 5px;
      box-sizing: border-box;
      text-align: right;
    }
  }
}
</style>


