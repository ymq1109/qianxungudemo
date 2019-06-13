<template>
    <div id="NavBar">
        <el-menu>
        <template v-for="(item,index) in list" >
            <el-menu-item :index="index" :key="item+index">
                <i class="el-icon-setting"></i>
                <span slot="title" @click="pushView({name:item.name})">{{item.name}}</span>
            </el-menu-item>
      </template>
      </el-menu>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[
                {name:'日历管理',},
                {name:'留言管理'},
                {name:'类型管理'},
                {name:'微信端接口'},
                {name:'音频管理'}

            ]
        }
    },
    methods: {
     

        
    },
    
}
</script>
<style lang="scss" scoped>
#NavBar{
    width: 100%;
    height: 100%;
    
   
}

</style>


