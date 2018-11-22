export default {
    resumeType: 0,
    name: '简历',
    style: {
        color: 'red',
        fontSize: 14,
        fontFamliy: '微软雅黑',
        moduleSize: 10,
        lineHeight: 20
    },
    content: {
        baseMessage: {
            text: '基本信息',
            url: 'user-circle-o',
            avatar: '',
            data: [
                {
                    name: '姓名',
                    text: '小明',
                    url: 'user-o'
                },
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
                url: 'star'
            }, {
                text: '个人标签',
                url: 'tags'
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
                text: '教育经历',
                url: 'university',
                data: [
                    {
                        time: '2018.01-2018.11',
                        organization: '家里蹲大学',
                        position: '本科',
                        desc: 3.45
                    }
                ]
            },
            {
                text: '工作经验',
                url: 'briefcase ',
                data: [
                    {
                        time: '2018.01-2018.11',
                        organization: '家里蹲大学',
                        position: '本科',
                        desc: 3.45
                    }
                ]
            },
            {
                text: '项目经验',
                url: 'cubes',
                data: [
                    {
                        time: '2018.01-2018.11',
                        organization: '家里蹲大学',
                        position: '本科',
                        desc: 3.45
                    }
                ]
            }]
    }
}
