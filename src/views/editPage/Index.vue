<template>
    <div  id='edit-page'>
        <el-container>
            <el-aside width='250px'><Menu /></el-aside>
            <el-main ref='mainContent'><Resume /></el-main>
        </el-container>
    </div>
</template>
<script>
import Menu from './menu/Index.vue'
import Resume from './resume/Resume.vue'
export default {
  computed: {
      scrollTop() {
          return this.$store.state.resume.scrollTop;
      }
  },
  watch: {
      scrollTop() {
          let line = 15;
          let scrollTop = this.$refs.mainContent.$el.scrollTop;
          let timer = setInterval(() => {
                scrollTop += line;
                this.$refs.mainContent.$el.scrollTo(0,scrollTop);
          },8);

          setTimeout(() => {
              clearInterval(timer);
          },800);
      }
  },
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
