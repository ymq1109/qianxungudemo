<template>
  <div id="Daily">
    <mq-table style="min-width:400px;" width="70%" title="日历管理">
      <template slot="mqtable-head">
        <el-form :model="dailyInfo" ref="dailyInfo" label-width="100px" class="demo-ruleForm">
          <el-form-item label="日期" prop="daily">
            <el-date-picker v-model="dailyInfo.daily" type="date"  value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
          </el-form-item>
          <el-form-item label="选择文件：">
            <input type="file" @change="getFile($event)" placeholder="请选择要上传的文件">
          </el-form-item>
          <el-form-item label="点赞数">
            <el-input v-model.number="dailyInfo.liked"></el-input>
          </el-form-item>
          <el-form-item label="作者">
            <el-input v-model="dailyInfo.description.author" placeholder="请输入作者"></el-input>
          </el-form-item>
          <el-form-item label="标题">
            <el-input v-model="dailyInfo.description.title" placeholder="请输入标题"></el-input>
          </el-form-item>
          <el-form-item label="内容">
            <el-input v-model="dailyInfo.description.content" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="cancel">取 消</el-button>
            <el-button type="primary" @click="setDaily(dailyInfo)">增加</el-button>
          </el-form-item>
        </el-form>
        新增点赞：
         <el-form :model="likeInfo" ref="likeInfo" label-width="100px" class="demo-ruleForm">
           <el-form-item label="ID">
            <el-input v-model="likeInfo._id" placeholder="请输入背景图片ID"></el-input>
          </el-form-item>
          <el-form-item label="liked">
            <el-input v-model="likeInfo.isLiked" ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="addLiked(likeInfo)">新增点赞数</el-button>
          </el-form-item>
         </el-form>
         查询背景图片：
         <el-form >
           <el-form-item label="from" >
            <el-date-picker  type="date"  value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
          </el-form-item>
          <el-form-item label="to"   >
            <el-date-picker type="date"  value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="addLiked(likeInfo)">查询背景</el-button>
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
      dailyInfo: {
        daily: "",
        dailyIMG: [],
        liked: 0,
        description: {
          author: "",
          title: "",
          content: ""
        }
      },
      likeInfo:{
        _id:'',
        isLiked:true
      }
    };
  },
  methods: {
    cancel() {
      var action = () => {
        this.$router.go(-1);
      };
      this.operatorConfirm("退出设置", action);
    },
    getFile(event) {
      console.log(event);
      this.dailyInfo.dailyIMG = event.target.files;
    },
    setDaily(item) {
      event.preventDefault();
      let formData = new FormData();
      formData.append("daily", this.dailyInfo.daily);
      console.log(this.dailyInfo.dailyIMG)
      formData.append("dailyIMG", this.dailyInfo.dailyIMG[0]);
      formData.append("liked", this.dailyInfo.liked);
      var description = JSON.stringify(this.dailyInfo.description);
      formData.append("description", description);
      let config = { headers: { "Content-Type": "multipart/form-data" } };
          var url =this.$apis.setDailyBackground;
          this.post(url, formData, config).then((resp) => {
            console.log("xinzen", resp);
            this.$router.go(-1);
          });
        },
        addLiked(item){
            this.post(this.$apis.setDailyBackgroundLike,this.likeInfo)
            .then((resp)=>{
              console.log("liked",resp);
            })
        }
    }
  }

</script>
<style lang="scss" scoped>
#Daily {
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  background: white;
}
</style>


