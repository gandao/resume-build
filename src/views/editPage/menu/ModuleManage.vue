<template>
    <div id='module-manage'>
        <div class='setting-off'>
            <div @click="onHandleClose"><i class="el-icon-arrow-left"></i>关闭</div>
        </div>
        <ul class='selected'>
            <li v-for='(item,index) in selectedModule' :key='index'><i :class='"fa fa-"+item.url'></i><span>{{item.text}}</span><i :class="item.isImportant?'el-icon-warning':'el-icon-remove'"></i></li>
        </ul>
        <div class='no-select'>
            <div class='title'>添加其他模块</div>
            <div class='no-select-item' v-for='(item,index) in unSelectModule' :key='index'><i :class='"fa fa-"+item.url'></i><span>{{item.text}}</span><i class="el-icon-circle-plus"></i></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            selectedModule: [
                {
                    text: '基本信息',
                    url: 'user-circle-o',
                    isImportant: true
                },{
                    text: '求职意向',
                    url: 'file-text-o',
                    isImportant: false
                },{
                    text: '教育背景',
                    url: 'university',
                    isImportant: false
                },{
                    text: '实习经验',
                    url: 'id-badge',
                    isImportant: false
                },{
                    text: '荣誉奖项',
                    url: 'trophy',
                    isImportant: false
                },{
                    text: '自我评价',
                    url: 'thumbs-o-up',
                    isImportant: false
                },{
                    text: '个人技能',
                    url: 'star',
                    isImportant: false
                }
            ],
            unSelectModule: [
                {
                    text: '工作经验',
                    url: 'briefcase'
                },{
                    text: '项目经验',
                    url: 'cubes'
                },{
                    text: '个人作品',
                    url: 'th-large'
                },{
                    text: '自愿者经历',
                    url: 'users'
                },{
                    text: '个人标签',
                    url: 'tags'
                },
                {
                    text: '自定义模块',
                    url: 'microchip'
                }
            ]
        }
    },
    methods: {
        onHandleClose() {
            this.$emit('onClose')
        }
    }
}
</script>
<style lang="less" scoped>
#module-manage{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 100%;
    background: rgb(240, 240, 240);
    color:#303133;
    font-size: 0.83rem;
    .setting-off{
        position: relative;
        font-size: 1.1rem;
        height: 80px;
        border-bottom: 1px solid #E4E7ED;
        background: #fff;
        div {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            cursor: pointer;
            color:#303133;
            i{
                margin-right: 5px;
                font-weight: 700;
            }
            &:hover {
                color: #000;
            }
        }
    }
    .selected{
        background: #fff;
        padding: 15px 0;
        li {
            position: relative;
            line-height: 35px;
            padding-left: 45px;
            padding-right: 20px;
            cursor: pointer;
            &:hover {
                background: rgba(240, 240, 240,0.5);
            }
            &:last-child{
                margin-bottom: 0;
            }
            .fa{
                transform: translate(0,0);
                position: static;
                box-sizing: border-box;
                display: inline-block;
                vertical-align: middle;
                width: 26px;
                height: 26px;
                margin-right: 10px;
                color: #909399;
                line-height: 26px;
                border-radius: 13px;
                border: 1px solid #909399;
                font-size: 0.80rem;
                text-align: center;
                &:hover{
                    color: #909399;
                }
            }
            span{
                display: inline-block;
                vertical-align: middle;
            }
            i {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 40px;
                cursor: pointer;
                font-size:1rem;
                color:#909399;
                &:hover {
                    color: #d81e06;
                }
            }
        }
    }
    .no-select{
        padding: 15px 0;
        .title{
            font-size: 0.75rem;
            margin-left: 15px;
            margin-bottom: 10px;
        }
        .no-select-item{
            position: relative;
            line-height: 35px;
            padding-left: 45px;
            padding-right: 20px;
            cursor: pointer;
            &:hover {
                background: #E4E7ED;
            }
            &:last-child{
                margin-bottom: 0;
            }
            .fa{
                transform: translate(0,0);
                position: static;
                box-sizing: border-box;
                display: inline-block;
                vertical-align: middle;
                width: 26px;
                height: 26px;
                margin-right: 10px;
                color: #909399;
                line-height: 26px;
                border-radius: 13px;
                border: 1px solid #909399;
                font-size: 0.80rem;
                text-align: center;
                
            }
            span{
                display: inline-block;
                vertical-align: middle;
            }
            i {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 40px;
                cursor: pointer;
                font-size:1rem;
                color:#409EFF;
            }
        }
    }
}
</style>
