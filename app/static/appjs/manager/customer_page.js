function returnStar(value) {
    var starStr = "";
    for(var i=1; i<= value; i++) {
        starStr +=  "<i class='fa fa-star star'></i>";
    }
    for(;i<=5;i++){
        starStr +=  "<i class='fa fa-star-o star'></i>";
    }

    return starStr;
}

function contact() {
    return "<a href='/static/cdn/doc/contract.pdf' " +
        "target=\"_blank\">查看</a>";
}

$(function() {
    "use strict";

    // 业务收入统计
    var $incomeTable = $("#income-table");

    $incomeTable.dataTable({
        "info" : false,
        "paging": true,
        "filter": false,
        "lengthChange": false,
        "pageLength":8,
        "destroy": true,
        "columns": [
            { "title": "#", "class": "center" },
            { "title": "用户名", "class": "center" },
            { "title": "入住机房", "class": "center" },
            { "title": "机柜收入(万)", "class": "center" },
            { "title": "带宽收入(万)", "class": "center" },
            { "title": "增值收入(万)", "class": "center"},
            { "title": "合同", "class": "center", "orderable":false }
        ],
        "data": [
            ["1", "蓝汛","金石机房","19.6","34.3","1.5",contact()],
            ["2", "腾讯","鹿泉机房","17.5","65.2","0.8",contact()],
            ["3", "百度","鹿泉机房","22.3","83.7","0.9",contact()],
            ["4", "兴业银行","金石机房","3.5","3.2","3.2",contact()],
            ["5", "360","鹿泉机房","15.3","61.2","0.8",contact()],
            ["6", "社保局","二枢纽机房","2.6","1.3","0.4",contact()],
            ["7", "财政局","二枢纽机房","1.1","1.1","0.2",contact()],
            ["8", "班班通","金石机房","2.3","3.2","0.2",contact()]
       ]
    });

    var incomeChartDom = document.getElementById('income-chart-pane');
    var incomeChart = echarts.init(incomeChartDom);

    var incomeOption = {
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['机柜', '带宽', '增值业务']
        },
        calculable : true,
        xAxis : [
            {
                type : 'value',
                boundaryGap : [0, 0.01]
            }
        ],
        yAxis : [
            {
                type : 'category',
                data : ['社保局','360','兴业银行','百度','腾讯','蓝汛']
            }
        ],
        series : [
            {
                name:'机柜',
                type:'bar',
                data:[2.6, 15.3, 3.5, 22.3,17.5, 19.6]
            },
            {
                name:'带宽',
                type:'bar',
                data:[4.5, 28.3, 7.4, 39.3, 24.5, 36.5]
            },
            {
                name:'增值业务',
                type:'bar',
                data:[0.6, 1.3, 2.5, 2.3,1.5, 3.6]
            }
        ]
    };

    incomeChart.setOption(incomeOption);

    // 业务收入统计
    var $contributeTable = $("#contribute-table");

    $contributeTable.dataTable({
        "info" : false,
        "paging": true,
        "filter": false,
        "lengthChange": false,
        "pageLength":8,
        "destroy": true,
        "columns": [
            { "title": "#", "class": "center" },
            { "title": "用户名", "class": "center" },
            { "title": "所在地", "class": "center" },
            { "title": "入住机房", "class": "center" },
            { "title": "机柜租用", "class": "center" },
            { "title": "带宽租用", "class": "center" },
            { "title": "业务收入(万)", "class": "center"},
            { "title": "增值收入(万)", "class": "center"},
            { "title": "综合评价", "class": "center", "orderable":false }
        ],
        "data": [
            ["1", "蓝汛","北京","金石机房","5","10","34.3","1.5",returnStar(3)],
            ["2", "腾讯","北京","鹿泉机房","8","20","65.2","0.8",returnStar(4)],
            ["3", "百度","北京","鹿泉机房","17","20","83.7","0.9",returnStar(3)],
            ["4", "兴业银行","河北","金石机房","2","1","3.2","3.2",returnStar(5)],
            ["5", "360","北京","鹿泉机房","4","10","61.2","0.8",returnStar(3)],
            ["6", "社保局","河北","二枢纽机房","1","0.1","1.3","0.4",returnStar(3)],
            ["7", "财政局","河北","二枢纽机房","1","0.1","1.1","0.2",returnStar(2)],
            ["8", "班班通","河北","金石机房","2","0.1","3.2","0.2",returnStar(3)]
        ]
    });

    var contributeChartDom = document.getElementById('contribute-chart-pane');
    var contributeChart = echarts.init(contributeChartDom);

    var placeHoledStyle = {
        normal:{
            borderColor:'rgba(0,0,0,0)',
            color:'rgba(0,0,0,0)'
        },
        emphasis:{
            borderColor:'rgba(0,0,0,0)',
            color:'rgba(0,0,0,0)'
        }
    };
    var dataStyle = {
        normal: {
            label : {
                show: true,
                position: 'insideLeft',
                formatter: '{c}'
            }
        }
    };

    var contributeOption = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter : '{b}<br/>{a0} KPI:{c0}<br/>{a2} KPI:{c2}<br/>{a4} KPI:{c4}<br/>{a6} : {c6} 分'
        },
        legend: {
            y: 55,
            itemGap : document.getElementById('contribute-chart-pane').offsetWidth / 8,
            data:['机柜单位收益', '带宽单位收益','增值业务收益', '综合评价']
        },
        grid: {
            y: 80,
            y2: 30
        },
        xAxis : [
            {
                type : 'value',
                position: 'top',
                splitLine: {show: false},
                axisLabel: {show: false}
            }
        ],
        yAxis : [
            {
                type : 'category',
                splitLine: {show: false},
                data : ['班班通','财政局','社保局', '360','兴业银行','百度','腾讯','蓝汛']
            }
        ],
        series : [
            {
                name:'机柜单位收益',
                type:'bar',
                stack: '总量',
                itemStyle : dataStyle,
                data:[38, 26, 33, 68, 35, 83, 61, 52]
            },
            {
                name:'机柜单位收益',
                type:'bar',
                stack: '总量',
                itemStyle: placeHoledStyle,
                data:[62, 74, 67, 32, 65, 17, 39, 48]
            },
            {
                name:'带宽单位收益',
                type:'bar',
                stack: '总量',
                itemStyle : dataStyle,
                data:[37, 26, 28, 65, 24, 87, 68, 55]
            },
            {
                name:'带宽单位收益',
                type:'bar',
                stack: '总量',
                itemStyle: placeHoledStyle,
                data:[63, 74, 72, 35, 76, 13, 32, 45]
            },
            {
                name:'增值业务收益',
                type:'bar',
                stack: '总量',
                itemStyle : dataStyle,
                data:[27, 19, 16, 62, 37, 76, 64, 61]
            },
            {
                name:'增值业务收益',
                type:'bar',
                stack: '总量',
                itemStyle: placeHoledStyle,
                data:[73, 81, 84, 38, 63, 24, 36, 39]
            },
            {
                name:'综合评价',
                type:'bar',
                stack: '总量',
                itemStyle : dataStyle,
                data:[24, 16, 18, 57, 41, 69, 71, 66]
            },
            {
                name:'综合评价',
                type:'bar',
                stack: '总量',
                itemStyle: placeHoledStyle,
                data:[76, 84, 82, 43, 59, 31, 29, 34]
            }
        ]
    };

    contributeChart.setOption(contributeOption);



});