<template>
  <div id="app">
    <el-container>
      <el-header><Header /></el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Header from '../../components/header/Header.vue'

export default {
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  components: {
    Header
  },
  created() {
    this.axios.get('resume/isLogin').then(res => {
        if (res.data.id !== -1) {
          this.$store.commit({ type: 'toggleLogin' })
          this.$store.commit({ type: 'changeState', ...res.data.user })
        }
    })
  }
}
</script>

<style lang="less">
#app {
  height: 100%;
  &>.el-container{
    height: 100%;
    &>.el-header{
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9999;
      width: 100%;
      border-bottom: 1px solid #E4E7ED;
      // box-shadow: 1px 1px 3px #EBEEF5,-1px -1px  3px #EBEEF5;
      background-color: #fff;
    }
    &>.el-main{
      padding: 0;
      margin-top: 60px;
      height: 100%;
    }
  }
}
</style>
