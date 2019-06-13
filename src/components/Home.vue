<template>
    <div id="Home">
        <div class="navBar">
            <nav-bar/>
        </div>
        <div class="content">

        </div>

    </div>
</template>
<script>
import NavBar from './NavBar'
export default {
    components:{NavBar},
    
}
</script>
<style lang="scss" scoped>
#Home{
    position: absolute;
    top:0;
    right:0;
    left: 0;
    bottom: 0;
    background: skyblue;
}
.navBar{
     width: 20%;
     min-width: 300px;
    height: 100%;
    background: #545C64;
}
</style>


