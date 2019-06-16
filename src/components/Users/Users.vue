<template>
  <div id="Users">
    <mq-table style="min-width:400px;" width="60%" title="微信用户登录管理">
      <template slot="mqtable-head">
        <el-form :model="uersInfo" ref="uersInfo" label-width="100px" class="demo-ruleForm">
          <el-form-item label="city">
            <el-input v-model="uersInfo.city" placeholder="请输入城市名称"></el-input>
          </el-form-item>
          <el-form-item label="country">
            <el-input v-model="uersInfo.country" placeholder="请输入国家"></el-input>
          </el-form-item>
          <el-form-item label="gender">
            <el-input v-model="uersInfo.gender" placeholder="请输入性别，0/1"></el-input>
          </el-form-item>
          <el-form-item label="language">
            <el-input v-model="uersInfo.language" placeholder="请输入语言"></el-input>
          </el-form-item>
          <el-form-item label="nickName">
            <el-input v-model="uersInfo.nickName" placeholder="请输入真实名字"></el-input>
          </el-form-item>
          <el-form-item label="name">
            <el-input v-model="uersInfo.name" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="userLogin(uersInfo)">登录</el-button>
          </el-form-item>
        </el-form>
      </template>
    </mq-table>
  </div>
</template>
<script>
export default {
    data(){
        return{
            uersInfo:{
                city:'',
                country:'',
                gender:'',
                language:'',
                nickName:'',
                name:''
            }
        }
    },
    methods: {
        userLogin(item){
            this.post(this.$apis.wxsigin,this.uersInfo)
            .then((resp)=>{
                console.log("wx",resp)
            })
        }
    },
};
</script>
<style lang="scss" scoped>
#Users{
    width: 100%;
    height: 100%;
    background: white;
}
</style>


