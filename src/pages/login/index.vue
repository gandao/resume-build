<template>
  <div id="login">
    <div class='wrapper'>
        <div class="title">
            <div class="logo-wrapper">
                <img src="../../common/image/logo.png">
                <span>Resume Builder</span>
            </div>
            <div class="desc">Enjoy a simple editorial resume process</div>
        </div>
        <div class="login-wrapper">
            <el-input placeholder="请输入账号" type='text' v-model="loginData.account"></el-input>
            <el-input placeholder="请输入秘密" type="password" v-model="loginData.password"></el-input>
            <div class='button-wrapper'>
                <span class='forget'>忘记密码</span>
                <div class='right'>
                    <el-button type="primary">登录</el-button>
                    <el-button type="primary">注册</el-button>
                </div>
            </div>
            
        </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            loginData: {
                account: '',
                password: ''
            }
        }
    }
};
</script>
<style lang="less" scoped>
#login {
    position: relative;
    width: 100%;
    height: 100%;
    .wrapper{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .title{
        margin-top: -150px;
        .logo-wrapper{
            margin-bottom: 20px;
            font-size: 0;
            img{
                display: inline-block;
                vertical-align: middle;
                width: 100px;
                height: 100px;
            }
            span{
                vertical-align: middle;
                display: inline-block;
                margin-left: 30px;
                font-size: 2rem;
                font-weight: 700;
            }
        }
        .desc{
            margin-bottom: 50px;
            text-indent: 10px;
            font-size: 1.3rem;
        }
    }
    .login-wrapper{
        .el-input{
            display: block;
            width: 400px;
            margin-bottom: 35px;
        }
        
        .button-wrapper{
            position: relative;
            .forget{
                margin-left: 5px;
                line-height: 40px;
                cursor: pointer;
                color: #409EFF;
            }
            .right{
                position: absolute;
                bottom: 0;  
                right: 0;
            }
        }
    }
    
}
</style>
