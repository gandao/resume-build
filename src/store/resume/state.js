export default {
    resumeType: 0,
    name: '简历',
    style: {
        color: 'red',
        fontSize: '15px',
        fontFamliy: '微软雅黑',
        moduleSize: '20px',
        lineHeight: '22px'
    },
    content: {
        baseMessage: {
            text: '基本信息',
            url: 'user-circle-o',
            avatar: '',
            name: {
                text: '小明',
                url: 'user-o'
            },
            desc: {
                text: '一句话介绍自己，告诉HR为什么选择你而不是选择别人。',
                url: ''
            },
            data: [
                {
                    name: '学历',
                    text: '本科',
                    url: 'graduation-cap'
                },
                {
                    name: '所在地',
                    text: '成都',
                    url: 'location-arrow'
                },
                {
                    name: '工作时间',
                    text: '5年',
                    url: 'calendar'
                },{
                    name: '出生日期',
                    text: '1997-01-01',
                    url: 'birthday-cake'
                },
                {
                    name: '联系电话',
                    text: '18281572953',
                    url: 'phone'
                },
                {
                    name: '邮箱',
                    text: '123@qq.com',
                    url: 'envelope-o'
                }]
        },
        otherContent: [
            {
                text: '个人技能',
                url: 'star',
                data: ['熟悉ajax和jQuery','熟悉HTTP请求和网络原理','了解ES5/ES6，对原型、闭包、作用域有自己的理解']
            }, {
                text: '个人标签',
                url: 'tags',
                data: ['旅游','健身','游戏','动漫','摄影']
            }, {
                text: '自定义模块',
                url: 'microchip'
            }
        ],
        mainContent: [
            {
                text: '求职意向',
                url: 'file-text-o',
                data: [
                    {
                        name: '岗位意向',
                        text: '岗位意向',
                        url: 'briefcase'
                    }, {
                        name: '意向城市',
                        text: '意向城市',
                        url: 'building'
                    }, {
                        name: '薪资要求',
                        text: '薪资要求',
                        url: 'money'
                    }, {
                        name: '入职时间',
                        text: '入职时间',
                        url: 'calendar'
                    }
                ]
            },
            {
                text: '教育背景',
                url: 'university',
                data: [
                    {
                        time: '填写时间',
                        organization: '填写大学名称',
                        position: '填写专业名称',
                        desc: '尽量简洁,突出重点，成绩优异的话题写上GPA及排名等信息，如GPA: 3.72/4(专业前十) GRE: 324'
                    }
                ]
            },
            {
                text: '工作经历',
                url: 'briefcase ',
                data: [
                    {
                        time: '填写时间',
                        organization: '填写公司名称',
                        position: '填写职位名称',
                        desc: '详细描述你的职责范围，工作任务及取得的成绩，工作经验的时间采取倒叙形式，最近经历写在前面，描述尽量具体简洁，工作经验的描述与目标岗位的招聘要求尽量匹配，用词精确。'
                    }
                ]
            },
            {
                text: '项目经验',
                url: 'cubes',
                data: [
                    {
                        time: '填写时间',
                        organization: '填写项目名称',
                        position: '填写角色名称',
                        desc: '描述你参加项目负责的工作内容，内容清晰，突出重点，如项目描述、项目职责、项目业绩。'
                    }
                ]
            },
            {
                text: '实习经历',
                url: 'id-badge',
                data: [
                    {
                        time: '填写时间',
                        organization: '填写公司名称',
                        position: '填写职位名称',
                        desc: '根据实际情况选择，实习经验的时间采取倒叙形式，最近经历写在前面，实现经验的描述与岗位的招聘要求尽量匹配，用词精确，实习成果尽量以数据来呈现，突出个人成果以及做出的贡献，描述尽量具体简洁。'
                    }
                ]
            },{
                text: '自我评价',
                url: 'thumbs-o-up',
                desc: '本人有审美强迫症、喜爱新鲜事物，有很强的自检的能力；有较强的独立学习和解决问题的能力，自觉性比较高，能够合理规划时间与协作分工。'
            },{
                text: '荣誉奖项',
                url: 'trophy',
                data: [
                    {
                        time: '2018',
                        name: 'ACM亚洲邀请赛二等奖',
                        lever: '国级'
                    },
                    {
                        time: '2018',
                        name: 'ACM中国赛区一等奖',
                        lever: '国级'
                    }
                ]
            }]
    }
}
