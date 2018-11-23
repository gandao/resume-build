<template>
    <object id='resume'>
        <div class='resume-item'>
            <div class='left-content' :style="'background: ' + resumeData.style.color">
                <div class='avatar'>
                    <img src='./avatar.jpg' />
                </div>
                <div
                    :style="{
                        paddingTop:resumeData.style.moduleSize,
                        paddingBottom: resumeData.style.moduleSize,
                    }"
                class='baseMessage'>
                    <div class='title'>
                        <i :style="'color: ' + resumeData.style.color" :class='"fa fa-"+resumeData.content.baseMessage.url'></i>
                        <span>{{resumeData.content.baseMessage.text}}</span>
                    </div>
                    <div :style="{fontSize: resumeData.style.fontSize}" class='baseMessage-content'>
                        <div class='baseMessage-content-item' v-for="(item,index) in resumeData.content.baseMessage.data" :key='index'>
                            <i  :class='"fa fa-"+item.url'></i>
                            <span>{{item.text}}</span>
                        </div>
                    </div>
                    <div class='edit-btn'>
                        <i class='fa fa-pencil'></i>
                    </div>
                </div>
                <ul class='other-content'>
                    <li 
                        :style="{
                            paddingTop:resumeData.style.moduleSize,
                            paddingBottom: resumeData.style.moduleSize,
                        }"
                        class='other-content-item'
                        v-for='(item,index) in resumeData.content.otherContent'
                        :key='index'
                    >
                        <div class='title'>
                            <i :style="'color: ' + resumeData.style.color" :class='"fa fa-"+item.url'></i>
                            <span>{{item.text}}</span>
                        </div>
                        <div :style="{fontSize: resumeData.style.fontSize}" class='content'>
                            <ul class='skill' v-if='item.text==="个人技能"'>
                                <li v-for='(item1,index1) in item.data' :key='index1'>{{item1}}</li>
                            </ul>
                            <div class='tag' v-else-if='item.text==="个人标签"'>
                                <span v-for='(item1,index1) in item.data' :key='index1'>{{item1}}</span>
                            </div>
                            <div class='other' v-else>{{item.desc}}</div>
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
                <div :style="{
                        paddingTop:resumeData.style.moduleSize,
                        paddingBottom: resumeData.style.moduleSize,
                    }" 
                class='name-wrapper'>
                    <div class='name'>{{resumeData.content.baseMessage.name.text}}</div>
                    <div :style="{fontSize: resumeData.style.fontSize,lineHeight: resumeData.style.lineHeight}" class='desc'>{{resumeData.content.baseMessage.desc.text}}</div>
                    <div class='edit-btn'>
                        <i class='fa fa-pencil'></i>
                    </div>
                </div>
                <ul>
                    <li 
                        :style="{
                            paddingTop:resumeData.style.moduleSize,
                            paddingBottom: resumeData.style.moduleSize,
                        }"
                        v-for='(item,index) in resumeData.content.mainContent' 
                        :key='index'
                    >
                        <div class='title'>
                            <i :style="'background-color: ' + resumeData.style.color" :class='"fa fa-"+item.url'></i>
                            <span :style="{color: resumeData.style.color,borderBottom:'1px solid '+resumeData.style.color}">{{item.text}}</span>
                        </div>
                        <div 
                            :style="{fontSize: resumeData.style.fontSize}"
                            class='position-wanted'
                            v-if='item.text==="求职意向"'
                        >
                            <span v-for='(item1,index1) in item.data' :key='index1'>
                                <i :style="{color:  + resumeData.style.color}" :class='"fa fa-"+item1.url'></i>
                                <span>{{item1.text}}</span>
                            </span>
                        </div>
                        <div
                            :style="{fontSize: resumeData.style.fontSize}"
                            class='award' v-else-if='item.text==="荣誉奖项"'
                        >
                            <div v-for='(item1,index1) in item.data' :key='index1'>
                                <span class='time'>{{item1.time}}</span>
                                <span class='name'>{{item1.name}}</span>
                                <span class='lever'>{{item1.lever}}</span>
                            </div>
                        </div>
                        <div class='main-messgae' v-else-if='item.text==="工作经历" || item.text==="项目经验" || item.text==="实习经历"||item.text==="自愿者经历" || item.text==="在校职位" || item.text==="教育背景"'>
                            <div v-for='(item1,index1) in item.data' :key='index1'>
                                <div class='title-wrapper'><span class='time'>{{item1.time}}</span><span class="organization">{{item1.organization}}</span></div>
                                <div class='position'>{{item1.position}}</div>
                                <div :style="{fontSize: resumeData.style.fontSize,lineHeight: resumeData.style.lineHeight}" class='desc'>{{item1.desc}}</div>
                            </div>
                        </div>
                        <div class='other-message' v-else>
                            <div class='desc'>{{item.desc}}</div>
                        </div>
                        <div class='edit-btn'>
                            <i class='fa fa-trash-o'></i>                
                            <i class='fa fa-arrows'></i>
                            <i class='fa fa-pencil'></i>
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
    };
  },
  computed: {
    resumeData() {
      return this.$store.state.resume;
    }
  }
};
</script>
<style lang="less" scoped>
#resume {
  display: block;
  .resume-item {
    position: relative;
    box-sizing: border-box;
    width: 820px;
    min-width: 820px;
    min-height: 1160px;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
    border: 1px solid #e4e7ed;
    box-shadow: 2px 2px 8px #ebeef5, -2px -2px 8px #ebeef5;
    font-size: 1.3rem;
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
      position: absolute;
      top: 0;
      left: 0;
      box-sizing: border-box;
      vertical-align: top;
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
        i {
          display: inline-block;
          box-sizing: border-box;
          vertical-align: middle;
          background: #fff;
          border-radius: 15px;
          width: 30px;
          height: 30px;
          font-size: 1.1rem;
          text-align: center;
          line-height: 30px;
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
        box-sizing: border-box;
        border: 1px dashed rgba(0, 0, 0, 0);
        &:hover {
          border: 1px dashed rgb(207, 207, 207);
          .edit-btn {
            display: block;
          }
        }
      }
      .baseMessage-content {
        margin-left: 5px;
        .baseMessage-content-item {
          color: #fff;
          padding: 7px 0;
          i {
            display: inline-block;
            width: 25px;
          }
        }
      }
      .other-content {
        .other-content-item {
          position: relative;
          box-sizing: border-box;
          border: 1px dashed rgba(0, 0, 0, 0);
          &:hover {
            border: 1px dashed #00c091;
            .edit-btn {
              display: block;
            }
          }
          .skill {
            li {
              margin-left: 20px;
              list-style-type: disc;
              margin-bottom: 10px;
              line-height: 22px;
            }
          }
          .tag {
            span {
              display: inline-block;
              padding: 7px 10px;
              border-radius: 5px;
              border: 1px solid #fff;
              margin-right: 10px;
              margin-bottom: 5px;
            }
          }
        }
      }
    }
    .right-content {
      box-sizing: border-box;
      margin-left: 33%;
      width: 66%;
      height: 100%;
      padding: 20px 30px;
      color: #303133;
      .title {
        font-size: 1.3rem;
        text-align: left;
        position: relative;
        margin-bottom: 20px;
        i {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          display: inline-block;
          box-sizing: border-box;
          color: #fff;
          border-radius: 15px;
          width: 30px;
          height: 30px;
          font-size: 1rem;
          text-align: center;
          line-height: 30px;
        }
        span {
          margin-left: 40px;
          display: block;
          font-weight: 700;
          padding-bottom: 6px;
        }
      }
      .name-wrapper {
        position: relative;
        box-sizing: border-box;
        border: 1px solid rgba(0, 0, 0, 0);
        &:hover {
          border: 1px dashed rgb(170, 170, 170);
          .edit-btn {
            color: #fff;
            display: block;
          }
        }
        .name {
          margin-bottom: 25px;
          font-size: 2.5rem;
        }
      }
      ul {
        li {
          position: relative;
          box-sizing: border-box;
          border: 1px solid rgba(0, 0, 0, 0);
          &:hover {
            border: 1px dashed rgb(170, 170, 170);
            .edit-btn {
              color: #fff;
              display: block;
            }
          }
        }
        .position-wanted {
          i {
            display: inline-block;
            vertical-align: middle;
            box-sizing: border-box;
            width: 22px;
            height: 22px;
            line-height: 22px;
            border-radius: 11px;
            text-align: center;
            border: 1px solid #606266;
            color: #606266;
            font-size: 0.7rem;
            margin-right: 7px;
            margin-bottom: 8px;
          }
          span {
            display: inline-block;
            vertical-align: middle;
            margin-right: 20px;
            margin-bottom: 8px;
          }
          &:last-child {
            span,
            i {
              margin-bottom: 0;
            }
          }
        }
        .main-messgae {
          font-size: 1rem;
          line-height: 22px;
          .title-wrapper {
            position: relative;
            margin-bottom: 5px;
            .time {
              font-weight: 700;
            }
            .organization {
              position: absolute;
              top: 0;
              right: 0;
            }
          }
          .position {
            font-weight: 700;
          }
          .desc {
            margin-top: 7px;
          }
        }
        .other-message {
          font-size: 1rem;
          line-height: 22px;
        }
        .award {
          & > div {
            position: relative;
            margin: 15px 0;
          }
          .name {
            margin-left: 50px;
            font-weight: 700;
          }
          .lever {
            position: absolute;
            top: 0;
            right: 0;
            font-weight: 700;
          }
        }
      }
    }
  }
}
</style>
