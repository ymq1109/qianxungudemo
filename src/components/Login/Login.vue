<template>
    <div id="Login">
        <div id="container">
        <h1 style="font-size:30px;margin-top:10px">千寻谷</h1>
        <el-form status-icon lebel-width="80px" :model="userInfo" :rules="rules" ref="userInfo">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="userInfo.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="userInfo.password" placeholder="请输入密码"></el-input>
            </el-form-item>
        </el-form>
        <div id="dynamicCode" :model="checkCode" @click="loadDynamicCode()">请点我获取验证码：{{checkCode}}</div>
        <input class="inputDynamic" placeholder="请输入验证码" type="text" @change="inputDynamic($event)"/>
        <el-button type="primary" @click="login">登录</el-button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            checkCode:'',
            userInfo:{
                username:'',
                password:''
            },
            rules:{
                username:[{required: true, message:'用户名不能为空', trigger: 'blur'},
                        {min:3,max:10,message:'用户名不能小于3和大于10个字符',trigger:'blur'}
                ],
                password:[
                    {required:true,message:'密码不能为空',trigger:'blur'},
                ]

            }
        }
    },
    methods:{
        loadDynamicCode(){
            // url:'http://localhost:3000/checkDynamicCode';
            this.$http.get(this.$apis.checkDynamicCode)
            .then((resp)=>{
                console.log('div',resp);
                // dynamicCode.html(resp.data.data);
                this.checkCode=resp.data.data.text;
            })
        },
        inputDynamic(event){
            console.log("ev",event);
            if(this.checkCode.toLowerCase()!==event.target.value.toLowerCase()){
                alert("请输入正确的验证码")
            }else{
                this.loadDynamicCode();
            }
        },
        login(){
            console.log("ref",this.$refs);
            this.$refs['userInfo'].validate((valid)=>{
                if(valid){
                    this.$http.post(this.$apis.signin,this.userInfo)
                    .then((resp)=>{
                        console.log("resp",resp);
                        var username=resp.data.username;
                        var token=resp.data.token;
                        var success=resp.data.success;
                        if(success){
                            localStorage.setItem("token",token);
                            var query=this.$route.query;
                            if(!query.redireact){
                                this.$router.push({path:'/home'})
                            }else{
                                this.$router.push({path:query.redireact})
                            }
                        }else{
                            this.$message.error('登录失败，请检查用户名和密码');
                        }
                        
                    }).catch((err)=>{
                        console.log(err);
                    })
                }else{
                    console.log("校验失败")
                }
            })
        }
    }
    
}
</script>
<style lang="scss" scoped>
    #Login{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560493982832&di=c52c3f137446db4e38d33dbe751ebfe2&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201603%2F27%2F20160327151411_mEQPY.jpeg");
    }
    #container{
        margin:0 auto;
        width: 30%;
        height: 50%;
        min-width: 400px;
        min-height: 300px;
        background:linear-gradient(180deg, rgb(195, 201, 194), rgb(61, 138, 78));
        border-radius: 5px;
        box-shadow: 0 0 10px 5px lightgray;
        text-align: center;
        align-items: center;
        
    }
    .el-form{
        margin-top: 20px;
        padding: 10px;
        box-sizing: border-box;
    }
    #dynamicCode{
        display: block;
        width: 200px;
        height: 30px;
        box-sizing: border-box;
        line-height: 30px;
        background: white;
        border-radius: 5px;
        margin: 5px auto;
        background: linear-gradient(90deg, rgb(195, 201, 194), rgb(119, 245, 146));
        
    }
    .inputDynamic{
        display: block;
        width: 200px;
        height: 30px;
        box-sizing: border-box;
        line-height: 30px;
        margin: 5px auto;
        background: white;
        border-radius: 5px;

    }

</style>


