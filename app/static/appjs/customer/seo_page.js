$(function() {

    var chart1Dom = document.getElementById('chart1');
    var chart1 = echarts.init(chart1Dom);
    var chart1Option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : false,
        series : [
            {
                name:'访问来源',
                type:'pie',
                selectedMode: 'single',
                radius : [0, 70],
                itemStyle : {
                    normal : {
                        label : {
                            position : 'inner'
                        },
                        labelLine : {
                            show : false
                        }
                    }
                },
                data:[
                    {value:335, name:'直达'},
                    {value:679, name:'营销广告'},
                    {value:1548, name:'搜索引擎', selected:true}
                ]
            },
            {
                name:'访问来源',
                type:'pie',
                radius : [100, 140],
                data:[
                    {value:335, name:'直达'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1048, name:'百度'},
                    {value:251, name:'谷歌'},
                    {value:147, name:'必应'},
                    {value:102, name:'其他'}
                ]
            }
        ]
    };

    chart1.setOption(chart1Option);

    var chart2Dom = document.getElementById('chart2');
    var chart2 = echarts.init(chart2Dom);
    var chart2Option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
        },
        toolbox: {
            show : true,
            orient: 'vertical',
            x: 'right',
            y: 'center',
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'直接访问',
                type:'bar',
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'邮件营销',
                type:'bar',
                stack: '广告',
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'联盟广告',
                type:'bar',
                stack: '广告',
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'视频广告',
                type:'bar',
                stack: '广告',
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'搜索引擎',
                type:'bar',
                data:[862, 1018, 964, 1026, 1679, 1600, 1570],
                markLine : {
                    itemStyle:{
                        normal:{
                            lineStyle:{
                                type: 'dashed'
                            }
                        }
                    },
                    data : [
                        [{type : 'min'}, {type : 'max'}]
                    ]
                }
            },
            {
                name:'百度',
                type:'bar',
                barWidth : 5,
                stack: '搜索引擎',
                data:[620, 732, 701, 734, 1090, 1130, 1120]
            },
            {
                name:'谷歌',
                type:'bar',
                stack: '搜索引擎',
                data:[120, 132, 101, 134, 290, 230, 220]
            },
            {
                name:'必应',
                type:'bar',
                stack: '搜索引擎',
                data:[60, 72, 71, 74, 190, 130, 110]
            },
            {
                name:'其他',
                type:'bar',
                stack: '搜索引擎',
                data:[62, 82, 91, 84, 109, 110, 120]
            }
        ]
    };

    chart2.setOption(chart2Option);

});
