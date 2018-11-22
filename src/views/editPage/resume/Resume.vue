<template>
    <object id='resume'>
        <div class='resume-item'>
            <div class='left-content' :style="'background: ' + resumeData.style.color">
                <div class='avatar'>
                    <img src='./avatar.jpg' />
                </div>
                <div class='baseMessage'>
                    <div class='title'>
                        <i :style="'color: ' + resumeData.style.color" :class='"fa fa-"+resumeData.content.baseMessage.url'></i>
                        <span>{{resumeData.content.baseMessage.text}}</span>
                    </div>
                    <div class='baseMessage-content'>
                        <div class='baseMessage-content-item' v-for="(item,index) in resumeData.content.baseMessage.data" :key='index'>
                            <i  :class='"fa fa-"+item.url'></i>
                            <span>{{item.text}}</span>
                        </div>
                    </div>
                    <div class='edit-btn'>
                        <i class='fa fa-pencil'></i>
                    </div>
                </div>
                <ul>
                    <li v-for='(item,index) in resumeData.content.otherContent' :key='index'>
                        <div class='title'>
                            <i :style="'color: ' + resumeData.style.color" :class='"fa fa-"+item.url'></i>
                            <span>{{item.text}}</span>
                        </div>
                        <div class='edit-btn'>
                            <i class='fa fa-trash-o'></i>                
                            <i class='fa fa-arrows'></i>
                            <i class='fa fa-pencil'></i>
                        </div>
                    </li>
                </ul>
            </div>
            <div class='right-content'>
                <ul>
                    <li v-for='(item,index) in resumeData.content.mainContent' :key='index'>
                        <div class='title'>
                            <i :style="'color: ' + resumeData.style.color" :class='"fa fa-"+item.url'></i>
                            <span>{{item.text}}</span>
                        </div>
                        <div class='position-wanted'  v-if='item.text==="求职意向"'>
                            <span v-for='(item1,index1) in item.data' :key='index1'>
                                <i :style="'color: ' + resumeData.style.color" :class='"fa fa-"+item1.url'></i>
                                <span>{{item.text}}</span>
                            </span>
                        </div>
                        <div class='award' v-else-if='item.text==="荣誉奖项"'>
                            <div v-for='(item1,index1) in item.data' :key='index1'>
                            </div>
                        </div>
                        <div class='main-messgae' v-else-if='item.text==="工作经历" || item.text==="项目经验" || item.text==="实习经历"||item.text==="自愿者经历" || item.text==="在校职位" || item.text==="教育背景"'>
                            <div v-for='(item1,index1) in item.data' :key='index1'>
                                <div class='title-wrapper'><span class='time'>{{item1.time}}</span><span class="organization">item1.organization</span></div>
                                <div class='position'>{{item1.position}}</div>
                                <div class='desc'>{{item1.desc}}</div>
                            </div>
                        </div>
                        <div class='other-message' v-else>
                            <div class='desc'>{{item.desc}}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </object>
</template>
<script>
export default {
  data() {
    return {
      data: []
    }
  },
  computed: {
    resumeData() {
      return this.$store.state.resume
    }
  }
}
</script>
<style lang="less" scoped>
#resume {
  display: block;
  .resume-item {
    box-sizing: border-box;
    width: 820px;
    height: 1160px;
    min-width: 820px;
    min-height: 1160px;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
    border: 1px solid #e4e7ed;
    box-shadow: 2px 2px 8px #ebeef5, -2px -2px 8px #ebeef5;
    font-size: 0;
    .edit-btn {
      display: none;
      position: absolute;
      top: 4px;
      right: 4px;
      font-size: 0;
      i {
        display: inline-block;
        background: #00c091;
        width: 25px;
        height: 25px;
        font-size: 0.8rem;
        cursor: pointer;
        text-align: center;
        line-height: 25px;
        border-radius: 2px;
        margin-right: 3px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .left-content {
      box-sizing: border-box;
      display: inline-block;
      width: 33%;
      height: 100%;
      padding: 20px 30px;
      color: #fff;
      .avatar {
        margin-top: 30px;
        margin-bottom: 30px;
        img {
          margin: 0 auto;
          display: block;
          padding: 5px 4px;
          background-color: #c0c4cc;
        }
      }
      .title {
        margin-bottom: 15px;
        text-align: left;
        font-size: 1.1rem;
        i {
          display: inline-block;
          vertical-align: middle;
          background: #fff;
          border-radius: 15px;
          width: 25px;
          height: 25px;
          font-size: 0.9rem;
          text-align: center;
          line-height: 25px;
        }
        span {
          margin-left: 5px;
          display: inline-block;
          vertical-align: middle;
          font-weight: 700;
        }
      }
      .baseMessage {
        position: relative;
        padding: 15px 0;
        box-sizing: border-box;
        border: 1px dashed rgba(0, 0, 0, 0);
        &:hover {
          border: 1px dashed rgb(207, 207, 207);
          .edit-btn{
              display: block;
          }
        }
      }
      .baseMessage-content {
        margin-left: 5px;
        .baseMessage-content-item {
          color: #fff;
          font-size: 0.95rem;
          padding: 7px 0;
          i {
            display: inline-block;
            width: 25px;
          }
        }
      }
      ul {
        li {
          position: relative;
          padding: 15px 0;
          box-sizing: border-box;
          border: 1px dashed rgba(0, 0, 0, 0);
          &:hover {
            border: 1px dashed #00c091;
            .edit-btn{
              display: block;
          }
          }
        }
      }
    }
    .right-content {
      display: inline-block;
      width: 66%;
      height: 100%;
      padding: 10px 15px;
    }
  }
}
</style>
