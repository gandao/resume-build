<template>
    <div id='user-center'>
        <div class='left'>
            l
        </div>
        <div class='right'>
            <div class='title-wrapper'>
                <div class='title'>简历管理中心</div>
                <div class='add'>
                    <i class='fa fa-plus'></i>
                    <span>新建简历</span>
                </div>
            </div>
            <div class='content'>
                <div class='none-content'>
                    <i class='fa-folder-open-o fa'></i>
                </div>
            </div>
            <div class='pager' v-show='false'>
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="1000">
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
#user-center{
    width: 55%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    .left {
        flex: 0 0 300px;
    }
    .right {
        margin-left: 10px;
        flex: 1;
        background-color: aqua  
    }
}
</style>
