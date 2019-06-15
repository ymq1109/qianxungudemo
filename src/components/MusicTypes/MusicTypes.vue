<template>
  <div id="MusicTypes">
    <mq-table style="min-width:400px;" width="70%" title="类型管理" >
      <template slot="mqtable-head">
        <el-form :model="typeInfo" ref="typeInfo" label-width="100px" class="demo-ruleForm">
          <el-form-item label="type">
            <el-input v-model="typeInfo.type" placeholder="请输入图片类型"></el-input>
          </el-form-item>
          <el-form-item label="选择文件：">
            <input type="file" @change="getMage($event)" placeholder="请选择要上传的文件">
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="setMage(typeInfo)">新增留言</el-button>
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
            typeInfo:{
                type:'',
                icon:[]
            }
        }
    },
    methods:{
        getMage(event){
            this.typeInfo.icon=event.target.files;
        },
        setMage(item){
            event.preventDefault();
            let formData=new FormData();
            formData.append("type",this.typeInfo.type);
            formData.append("icon",this.typeInfo.icon[0]);
            let config={headers:{"Content-Type":"multipart/form-data"}};
            this.post(this.$apis.addNewMusicType,formData,config)
            .then((resp)=>{
                console.log("type",resp);
            })
        }
    }
};
</script>
<style lang="scss" scoped>
#MusicTypes{
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    background: white;
}
</style>

