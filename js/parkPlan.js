// 密封胶排产计量模块
let option1 = {
    title: {//表标题
        text: '密封胶排产计量',
        textStyle: {
            fontWeight: 'normal',
            color: '#01eed6'
        },
    },
    textStyle: {//坐标轴颜色
        color: '#809e9c'
    },
    xAxis: [{
        type: 'category',
        splitLine: {
            show: false
        },//网格线不显示
          // x轴的颜色和宽度
        axisLine:{
            lineStyle:{
                color:'#192b46',
                width:2,   //这里是坐标轴的宽度,可以去掉
            }
        },
        axisLabel: {
            interval: 0,
            rotate: -20,
        },//x轴坐标值倾斜
        data: ['05-21', '05-22', '05-23', '05-24', '05-25', '05-26', '05-27', '05-28', '05-29', '05-30', '05-31', '06-01']
    }],
    yAxis: [{
        type: 'value',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            //  改变轴线颜色
            lineStyle: {
                // 使用深浅的间隔色
                color: '#0d2939',
                type:'dotted'//虚线
            }
        },
        min: 0,
        max: 1200,
        interval: 200,
        axisLabel: {
            formatter: '{value}'
        }
    }],
    series: [

        {
            type: 'bar',
            barWidth: 24,
            /*设置柱状图颜色*/
            itemStyle: {
                normal: {
                    color: '#4fbce5'
                }
            },
            data: [800, 1000, 950, 850, 350, 650, 950, 700, 800, 1100, 1000, 1200]
        },
        {
            name: '折线',
            type: 'line',
            symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
            symbolSize: 8,
            itemStyle: {
                /*设置折线颜色*/
                normal: {

                    color: "#fff", // 会设置点和线的颜色，所以需要下面定制 line
                    borderColor: "#05b85c", // 点边线的颜色
                    borderWidth: 2
                }
            },
            lineStyle: {
                normal: {
                    width: 2,
                    color: "#05b85c" // 线条颜色
                }
            },
            data: [800, 1000, 950, 850, 350, 650, 950, 700, 800, 1100, 1000, 1200]
        }
    ]
};
// 基于准备好的dom，初始化echarts实例
let myChart1 = echarts.init(document.getElementById('main1'));
// 使用刚指定的配置项和数据显示图表。
myChart1.setOption(option1);

// 二厂排产计量模块
let option2 = {
    title: {
        text: '二厂排产计量',
        textStyle: {
            fontWeight: 'normal',
            color: '#01eed6'
        },
    },
    textStyle: {
        color: '#809e9c'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine: {
            onZero: false,
            lineStyle:{
                color:'#173547',
                width:2,   //这里是坐标轴的宽度,可以去掉
            }
        },
        data: ['03-26', '03-27', '03-28', '03-29', '03-30', '04-25', '04-26']
    },
    yAxis: {
        type: 'value',
        min: -20,
        max: 100,
        interval: 20,
        splitLine: false,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    },

    series: [{
        data: [90, 85, 86, 88, 86, 0, 10],
        type: 'line',
        smooth: true,
        symbol: "circle", // 默认是空心圆（中间是白色的），改成实心圆
        symbolSize: 5,
        itemStyle: {
            /*设置折线颜色*/
            normal: {
                borderColor: "#01ffe5", // 点边线的颜色
                color: "#01ffe5", // 会设置点和线的颜色，所以需要下面定制 line
            }
        },
        lineStyle: {
            normal: {
                width: 2,
                color: "#01ffe5" // 线条颜色
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#0a636c'
                    },
                    {
                        offset: 0.2,
                        color: '#0a5a62'
                    },
                    {
                        offset: 0.4,
                        color: '#0b4653'
                    },
                    {
                        offset: 0.6,
                        color: '#0e3a4c'
                    },
                    {
                        offset: 0.8,
                        color: '#0f213a'
                    },
                    {
                        offset: 1,
                        color: '#101632'
                    }
                ])
            }
        },
    }]
};
let myChart2 = echarts.init(document.getElementById('main2'));
// 使用刚指定的配置项和数据显示图表。
myChart2.setOption(option2);

// 剂型产量计量异常情况

let option3 = {
    title: {
        text: '剂型产量计量异常情况',
        textStyle: {
            fontWeight: 'normal',
            color: '#01eed6'
        },
    },
    textStyle: {
        color: '#809e9c'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    xAxis: [{
        type: 'category',
        // x轴的颜色和宽度
        axisLine:{
            lineStyle:{
                color:'#113843',
                width:2,   //这里是坐标轴的宽度,可以去掉
            }
        },
        data: ['5-29', '5-30', '5-31', '6-01', '6-02', '6-03', '6-04'],
        axisPointer: {
            type: 'shadow'
        },
    }],
    yAxis: [{
        type: 'value',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            //  改变轴线颜色
            lineStyle: {
                // 使用深浅的间隔色
                color: '#0d2939',
                type:'dotted'
            }
        },
        min: 0,
        max: 150,
        interval: 50,
        axisLabel: {
            formatter: '{value}'
        }
    }],
    series: [{
        name: '蒸发量',
        type: 'bar',
        barWidth: 20,
        itemStyle: {
            normal: {
                color: '#4fbce5'

            }
        },
        data: [130, 145, 140, 120, 70, 60, 65]
    },
        {
            name: '降水量',
            type: 'bar',
            barWidth: 20,
            itemStyle: {
                normal: {
                    color: '#fdb749'

                }
            },
            data: [80, 80, 70, 75, 40, 30, 35]
        }
    ]
};
let myChart3 = echarts.init(document.getElementById('main3'));
// 使用刚指定的配置项和数据显示图表。
myChart3.setOption(option3);

// 107胶槽车计划
let option4 = {
    title: {
        text: '107胶槽车计划',
        textStyle: {
            fontWeight: 'normal',
            color: '#01eed6'
        },
    },
    textStyle: {
        color: '#809e9c'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine:{
            onZero: false,
            lineStyle:{
                color:'#113843',
                width:2,   //这里是坐标轴的宽度,可以去掉
            }
        },
        data: ['2018-06-01', '2018-06-02', '2018-06-03', '2018-06-04', '2018-06-05']
    }],
    yAxis: [{
        type: 'value',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            //  改变轴线颜色
            lineStyle: {
                // 使用深浅的间隔色
                color: '#0d2939',
                type:'dotted'
            }
        },
        min: -20,
        max: 100,
        interval: 20,
        axisLabel: {
            formatter: '{value}'
        }
    }],
    series: [{
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        showSymbol: false,
        smooth: true,
        lineStyle: {
            normal: {
                width: 1,
                color: "green" // 线条颜色
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(1,255,229)'
                    },
                    {
                        offset: 0.5,
                        color: '#0a5b63'
                    },
                    {
                        offset: 1,
                        color: '#0e1d35'
                    }
                ])
            }
        },

        data: [55, 30, 40, 30, 90]
    }]
};
let myChart4 = echarts.init(document.getElementById('main4'));
// 使用刚指定的配置项和数据显示图表。
myChart4.setOption(option4);

// 混练胶周期订单量
let option5 = {
    title: {
        text: '混练胶周期订单量',
        textStyle: {
            fontWeight: 'normal',
            color: '#01eed6'
        },
    },
    textStyle: {
        color: '#809e9c'
    },
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['201806', '201807', '201808', '201809', '201810', '201811', '201812'],
        axisTick: {
            alignWithLabel: true
        },
        axisLine:{
            lineStyle:{
                color:'#113843',
                width:2,   //这里是坐标轴的宽度,可以去掉
            }
        },
    }],
    yAxis: [{
        type: 'value',

        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            //  改变轴线颜色
            lineStyle: {
                // 使用深浅的间隔色
                color: '#0d2939',
                type:'dotted'
            }
        },
        min: 0,
        max: 500,
        interval: 100,
        axisLabel: {
            formatter: '{value}'
        }
    }],
    series: [{
        name: '直接访问',
        type: 'bar',
        barWidth: '40',
        itemStyle: {
            normal: {
                color: '#01ffe5'

            }
        },
        data: [30, 400, 220, 398, 380, 370, 410]
    }]
};
let myChart5 = echarts.init(document.getElementById('main5'));
// 使用刚指定的配置项和数据显示图表。
myChart5.setOption(option5);


//水剂部分按时完成率
let option6 = {
    title:{
        // show:true,
        text:'258.42%',
        textStyle:{
            color:'#01ffe5',
            fontsize:'26px'
        },
        subtext:['258.42%\n'],
        // itemGap:-5,
        x:'center',
        y:'center',
        subtextStyle:{
            fontsize:'18px',
            color:'#a0a0a0'
        }
    },
    color:['#3a96f2'],//控制环形的颜色
    series: [
        {
            type:'pie',
            selectedMode: 'single',
            radius: [0, '94%'],
            center:['50%','50%'],
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[{value:5,itemStyle:{normal:{color:'#229da2'}}}]
        },
        {
            type:'pie',
            selectedMode: 'single',
            radius: [0, '75%'],
            center:['50%','50%'],
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[{value:5,itemStyle:{normal:{color:'#01ffe5'}}}]
        },
        {
            type:'pie',
            selectedMode: 'single',
            radius: [0, '70%'],
            center:['50%','50%'],
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[{value:5,itemStyle:{normal:{color:'#072f49'}}}]
        },
    ]
};
let myChart6 = echarts.init(document.getElementById('main6'));
myChart6.setOption(option6);

//粉粒剂按时完成率
let option7 = {
    title:{
        // show:true,
        text:'76.16%',
        textStyle:{
            color:'#05b85c',
            fontsize:'26px'
        },
        subtext:['76.16%\n'],
        // itemGap:-5,
        x:'center',
        y:'center',
        subtextStyle:{
            fontsize:'18px',
            color:'#a0a0a0'
        }
    },
    color:['#3a96f2'],//控制环形的颜色
    series: [
        {
            type:'pie',
            selectedMode: 'single',
            radius: [0, '94%'],
            center:['50%','50%'],
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[

                {value:175,itemStyle:{normal:{color:'#071e28'}}},
                {value:500,itemStyle:{normal:{color:'#05b85c'}}}
            ]
        },
        {
            type:'pie',
            selectedMode: 'single',
            radius: [0, '75%'],
            center:['50%','50%'],
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[{value:5,itemStyle:{normal:{color:'#01ffe5'}}}]
        },
        {
            type:'pie',
            selectedMode: 'single',
            radius: [0, '70%'],
            center:['50%','50%'],
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[{value:5,itemStyle:{normal:{color:'#072f49'}}}]
        },
    ]
};
let myChart7 = echarts.init(document.getElementById('main7'));
myChart7.setOption(option7);

// 剂胶中心本月生产情况
let option8 = {
    title: {
        text: '剂胶中心本月生产情况',
        textStyle: {
            fontWeight: 'normal',
            color: '#01eed6'
        },
    },
    series : [
        {
            type: 'pie',
            radius : '73%',
            center: ['50%', '50%'],
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[{value:335, itemStyle:{normal:{color:'#fdb749'}}},
                {value:310, itemStyle:{normal:{color:'#4fbce5'}}},
            ]

        }
    ]
};
let myChart8= echarts.init(document.getElementById('main8'));
myChart8.setOption(option8);

// 密封胶未完成订单进度
let option9 = {
    title: {
        text: '密封胶未完成订单进度',
        textStyle: {
            fontWeight: 'normal',
            color: '#01eed6'
        },
    },
    textStyle: {
        color: '#809e9c'
    },
    xAxis: [{
        type: 'category',

        // x轴的颜色和宽度
        axisLine:{
            lineStyle:{
                color:'#192b46',
                width:2,   //这里是坐标轴的宽度,可以去掉
            }
        },
        data: ['[咖啡色]大桶   ','公元706\n[瓷白]硬管','胶多乐995\n[黑色]软包', '法嗯莎791\n[黑色]软包', '邵氏9800\n[黑色]软包',
            '[咖啡色]大桶','公元706\n[瓷白]硬管','胶多乐995\n[黑色]软包', '法嗯莎791\n[黑色]软包', '邵氏9800\n[黑色]软包',
            '[咖啡色]大桶','公元706\n[瓷白]硬管','胶多乐995\n[黑色]软包', '法嗯莎791\n[黑色]软包', '邵氏9800\n[黑色]软包',
            '[咖啡色]大桶','公元706\n[瓷白]硬管','胶多乐995\n[黑色]软包', '法嗯莎791\n[黑色]软包', '邵氏9800\n[黑色]软包',
            '[咖啡色]大桶','公元706\n[瓷白]硬管','胶多乐995\n[黑色]软包', '法嗯莎791\n[黑色]软包', '邵氏9800\n[黑色]软包',
            '[咖啡色]大桶','公元706\n[瓷白]硬管','胶多乐995\n[黑色]软包', '法嗯莎791\n[黑色]软包', '邵氏9800\n[黑色]软包',
            '[咖啡色]大桶','公元706\n[瓷白]硬管','胶多乐995\n[黑色]软包', '法嗯莎791\n[黑色]软包', '邵氏9800\n[黑色]软包',
            '[咖啡色]大桶','公元706\n[瓷白]硬管','胶多乐995\n[黑色]软包', '法嗯莎791\n[黑色]软包', '邵氏9800\n[黑色]软包',
            '[咖啡色]大桶','公元706\n[瓷白]硬管','胶多乐995\n[黑色]软包', '法嗯莎791\n[黑色]软包', '邵氏9800\n[黑色]软包']
    }],
    yAxis: [{
        type: 'value',

        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            //  改变轴线颜色
            lineStyle: {
                // 使用深浅的间隔色
                color: '#0d2939',
                type:'dotted'
            }
        },
        min: 0,
        max: 1500,
        interval: 500,
        axisLabel: {
            formatter: '{value}'
        }
    }],
    series: [

        {
            type: 'bar',
            barWidth: 4,
            /*设置柱状图颜色*/
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: '#4fbce5'
                }
            },
            data: [10, 1500, 200, 500, 20, 8, 100, 500, 400, 1000, 80, 90,1500,500,70,400,100,300,
            150,180,150,400,200,750,200,150,450,400,150,180,200,600,100,100,500,500,100,520,1100,150,650,500,120,100,20]
        },
        {
            type: 'bar',
            barWidth: 4,
            /*设置柱状图颜色*/
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: '#05b85c'
                }
            },
            data: [8, 500, 200]
        },


    ]
};
let myChart9= echarts.init(document.getElementById('main9'));
myChart9.setOption(option9);

