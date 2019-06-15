<template>
  <div id="Message">
    <mq-table style="min-width:400px;" width="60%" title="留言管理">
      <template slot="mqtable-head">
        <el-form :model="messageInfo" ref="messageInfo" label-width="100px" class="demo-ruleForm">
          <el-form-item label="userId">
            <el-input v-model="messageInfo.userId" placeholder="请输入背景图片ID"></el-input>
          </el-form-item>
          <el-form-item label="nickName">
            <el-input v-model="messageInfo.nickName"></el-input>
          </el-form-item>
          <el-form-item label="content">
            <el-input v-model="messageInfo.content"></el-input>
          </el-form-item>
          <el-form-item label="vedioID">
            <el-input v-model="messageInfo.vedioID"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="addLiked(likeInfo)">新增留言</el-button>
          </el-form-item>
        </el-form>
      </template>
    </mq-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      messageInfo: {
        userId: "",
        nickName: "",
        content: "",
        vedioID: ""
      }
    };
  },
  methods:{
      setMessage(item){
          this.post(this.$apis.addNewMessage,this.messageInfo)
          .then((resp)=>{
              console.log("留言新增",resp)
          })
      }
  }
};
</script>
<style>
#Message {
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  background: white;
}
</style>


