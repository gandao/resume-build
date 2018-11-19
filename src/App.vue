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
import Header from './components/header/Header.vue'

export default {
  components: {
    Header
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
      box-shadow: 1px 1px 3px #EBEEF5,-1px -1px  3px #EBEEF5;
      background-color: #fff;
      padding: 0 15%;
    }
    &>.el-main{
      padding: 0;
      margin-top: 60px;
      height: 100%;
    }
  }
}
</style>
