<template>
    <div id='aside-menu'>
        <div class='save'><div><img src='./save.png'/><span>保存</span></div></div>
        <ul class='menu'>
            <li><img src="./mode.png" /><span>模块管理</span></li>
            <li><img class='small' src="./template.png"/><span>更换模板</span></li>
            <li><img src="./style.png"/><span>风格设置</span></li>
            <li><img src='./download.png' /><span>下载简历</span></li>
        </ul>
        <div class='evaluate'>
            <span>简历完善度</span>
            <el-progress :percentage="70"></el-progress>
            <div class='desc'>查看简历是否有内容未完善，尽量完成到100%哦！</div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
#aside-menu{
    position: relative;
    height: 100%;
    color: #303133;
    .save{
        position: relative;
        width: 100%;
        height: 120px;
        border-bottom: 1px solid #DCDFE6;
        div{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%)
        }
        img{
            display: inline-block;
            margin-right: 15px;
            width: 35px;
            height: 35px;
            vertical-align: middle;
        }
        span{
            vertical-align: middle;
            display: inline-block;
            padding: 5px 12px;
            border-radius: 14px;
            border: 1px solid #606266;
            font-size: 1rem;
            cursor: pointer;
            &:hover{
                border: 1px solid #434344;
                font-weight: 700;
            }
        }
    }
    .menu{
        margin-top: 40px;
        li{
            display: block;
            line-height: 55px;
            text-align: center;
            img {
                display: inline-block;
                width: 25px;
                height: 25px;
                vertical-align: middle;
                margin-right: 10px;
                &.small{
                    width: 20px;
                    height: 20px;
                }
            }
            span {
                display: inline-block;
                vertical-align: middle;
                cursor: pointer;
                &:hover{
                    // font-weight: 700;
                    color: #000;
                }
            }
        }
    }
    .evaluate{
        position: absolute;
        bottom: 20px;
        left: 0;
        width: 100%;
        padding-top: 20px;
        border-top: 1px solid #DCDFE6;
        text-align: center;
        .el-progress{
            margin: 0 auto;
            margin-top: 20px;
            margin-bottom: 20px;
            width: 80%;
        }
    }
    .desc{
        padding: 0 20px;
        line-height: 20px;
        text-align: left;
        font-size: 0.8rem;
        color: #C0C4CC;

    }
}
</style>
