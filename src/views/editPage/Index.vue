<template>
    <div id='edit-page'>
        <el-container>
            <el-aside width='250px'><Menu /></el-aside>
            <el-main></el-main>
        </el-container>
    </div>
</template>
<script>
import Menu from './menu/Menu.vue'
export default {
  components: {
    Menu
  }
}
</script>

<style lang="less" scoped>
#edit-page{
    height: 100%;
    &>.el-container{
        height: 100%;
        &>.el-aside{
            border-right: 1px solid #E4E7ED;
        }
    }
}
</style>
