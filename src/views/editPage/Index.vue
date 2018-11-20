<template>
    <div id='edit-page'>
        <el-container>
            <el-aside width='250px'><Menu /></el-aside>
            <el-main><Resume /></el-main>
        </el-container>
    </div>
</template>
<script>
import Menu from './menu/Index.vue'
import Resume from './resume/Resume.vue'
export default {
  components: {
    Menu,
    Resume
  }
}
</script>

<style lang="less" scoped>
#edit-page{
    height: 100%;
    &>.el-container{
        height: 100%;
        &>.el-aside{
            overflow: hidden;
            border-right: 1px solid #E4E7ED;
        }
        &>.el-main{
            width: 100%;
        }
    }
}
</style>
