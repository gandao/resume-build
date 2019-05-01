<template>
    <div id='user-center'>
        <div class='wrapper'>
            <div class='left'>
                <div class='title'>个人信息</div>
                <div class='msg-wrapper'>
                    <div class='name msg-item'>账号名: 小明</div>
                    <div class='date msg-item'>注册日期: 2019-01-01</div>
                    <div class='lever msg-item'>
                        <span>等级: 普通会员</span>
                        <span>升级</span>
                    </div>
                </div>
            </div>
            <div class='right'>
                <div class='title-wrapper'>
                    <div class='title'>简历管理中心</div>
                    <div class='add'>
                        <i class='fa fa-plus'></i>
                        <span>新建简历</span>
                    </div>
                </div>
                <div class='line'></div>
                <div class='content' ref='content' >
                    <div v-if="false" class='none-content'>
                        <i class='fa-folder-open-o fa'></i>
                        <div class='desc'>no file</div>
                    </div>
                    <div v-else class='content-wrapper'>
                        <div class='resume-item1' v-for="(item,index) in 10" :key="index">
                            <img class="resume-item-img" src="../../common/image/template1.png" />
                            <div class='resume-item-body'>
                                <div class='resume-item-name'>123</div>
                                <div class='resume-item-edit'>
                                    <i @click="deleteResume" class='fa fa-trash-o'/>
                                    <i @click="editResume" class='fa fa-edit'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='pager' v-show='true'>
                    <el-pagination
                        layout="prev, pager, next"
                        :total="1000">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            userData: {},
            resumeData: []
        }
    },
    mounted() {
        var height = document.body.clientHeight - 310;
        this.$refs.content.setAttribute('style', 'min-height:' + height + 'px');
    },
    methods: {
        // 删除简历
        deleteResume() {
            this.$confirm('是否确定删除该简历?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
    
            })
        },
        // 跳转编辑简历页面
        editResume() {

        }

    }
}
</script>
<style lang="less" scoped>
#user-center{
    width: 60%;
    margin: 0 auto;
    margin-top: 20px;
    .left,.right {
        display: inline-block;
        vertical-align: top;
    }
    .left {
        box-sizing: border-box;
        padding: 50px 20px 50px 40px;
        width: 280px;
        margin-right: 20px;
        box-shadow: 1px 1px 3px #EBEEF5,-1px -1px 3px #EBEEF5;
        border: 1px solid #E4E7ED;
        border-radius: 2px;
        .title{
            display: inline-block;  
            font-size: 1.7rem;
            padding: 15px 0;
            border-bottom: 1px solid #303133;
            margin-bottom: 20px;
        }
        .msg-item {
            font-size: 1.1rem;
            line-height:60px;
        }
        .lever {
            span{
                display: inline-block;
                vertical-align: middle;
                &:last-child {
                    cursor: pointer;
                    line-height: 20px;
                    margin-left: 10px;
                    font-size: 0.9rem;
                    border: 1px solid #303133;
                    padding: 2px 5px;
                    border-radius: 3px;
                    &:hover {
                        font-weight: 700;
                        border: 2px solid #303133;
                    }
                }
            }

        }
    }
    .right {
        box-sizing: border-box; 
        width: calc(100% - 300px);
        box-shadow: 1px 1px 3px #EBEEF5,-1px -1px 3px #EBEEF5;
        border: 1px solid #E4E7ED;
        border-radius: 2px;
        padding: 50px 40px 50px 40px;
        .title-wrapper{
            font-size: 1.7rem;
            position: relative;
            .add {
                cursor: pointer;
                line-height: 40px;
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                font-size: 1rem;
                padding: 0 10px;
                height: 40px;
                box-sizing: border-box;
                border: 1px solid #303133;
                box-shadow: 1px 1px 10px #E4E7ED,-1px -1px 10px #E4E7ED;
                border-radius: 20px;
                &:hover{
                    box-shadow: 2px 2px 10px rgb(214, 214, 214),-2px -2px 10px rgb(213, 213, 214);
                }
                i {
                    font-size: 0.9rem;
                    margin-right: 5px;
                }
            }
        }
        .line {
            width: 100%;
            height: 1px;
            margin-top: 20px;
            background: #303133;
        }
        .content {
            position: relative;
            .none-content {
                position: absolute;
                top: 45%;
                left: 50%;
                transform: translate(-50%,-50%);
                color: rgba(228, 226, 226, 1);
                user-select:none;
                i {
                    font-size: 5rem;
                }
                .desc {
                    font-size: 1.8rem;
                }
            }
            .content-wrapper {
                font-size: 0;
                margin-top: 20px;
                .resume-item1 {
                    display: inline-block;
                    width: 25%;
                    box-sizing: border-box;
                    padding: 2%;
                    position: relative;
                    margin-bottom: 20px;
                    &:hover {
                       .resume-item-body {
                           visibility: visible;
                       }
                    }
                    img{
                        display: block;
                        width: 100%;
                    }
                    .resume-item-body {
                        position: absolute;
                        width: 96%;
                        height: 96%;
                        top: 2%;
                        left: 2%;
                        background-color: rgba(0, 0, 0, 0.3);
                         visibility: hidden;
                         .resume-item-name {
                            font-size: 25px;
                            color: #fff;
                            font-weight: 700;
                            border-bottom: 2px solid #fff;
                            padding: 10px 10px;
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%,-50%);
                         }
                        .resume-item-edit {
                            position: absolute;
                            top: 5px;
                            right: 5px;
                            font-size: 20px;
                            color: #fff;
                            i{
                                margin-left: 10px;
                                cursor: pointer;
                            }
                        }
                    }
                }
            }
        }
        .pager {
            text-align: right; 
            .el-pagination {
                display: inline-block;
            }
        }
    }
    
}
</style>
