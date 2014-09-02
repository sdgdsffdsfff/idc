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

$(function() {
    "use strict";

    // 收入统计
    var $roomTable = $("#room-table");

    $roomTable.dataTable({
        "info" : false,
        "paging": true,
        "filter": false,
        "lengthChange": false,
        "pageLength":8,
        "destroy": true,
        "columns": [
            { "title": "#", "class": "center" },
            { "title": "机房名称", "class": "center" },
            { "title": "城市", "class": "center" },
            { "title": "机柜（万/月）", "class": "center" },
            { "title": "带宽（万/月）", "class": "center" },
            { "title": "增值业务（万/月）", "class": "center" },
            { "title": "免费客户支出", "class": "center" },
            { "title": "收入总计（万/月）", "class": "center" }
        ],
        "data": [
            ["1" , "金石" , "石家庄", "12.1", "31.3","6.3","1.3","48.4"],
            ["2" , "鹿泉" , "石家庄", "23.4", "45.2","36.1","8.3","146.4"],
            ["3" , "二枢纽" , "石家庄", "16.2", "15.7","3.5","3.2","32.2"],
            ["4" , "A机房", "保定", "6.8", "11.9","12.5","1.2","30"],
            ["5" , "B机房", "保定", "3.2", "8.4","0.5","0.2","11.9"],
            ["6" , "C机房", "保定", "4.3", "5.9","1.6","1.0","10.8"],
            ["7" , "A机房", "唐山", "12.1", "24.2","6.3","1.3","48.4"],
            ["8" , "B机房", "唐山", "21.1", "31.3","15.8","11.3","66.9"],
            ["9" , "C机房", "唐山", "12.1", "31.3","6.3","1.3","48.4"],
            ["10", "A机房", "邯郸", "12.1", "31.3","6.3","1.3","48.4"],
            ["11", "B机房", "邯郸", "12.1", "31.3","6.3","1.3","48.4"],
            ["12", "C机房", "邯郸", "12.1", "31.3","6.3","1.3","48.4"],
            ["13", "A机房", "张家口", "12.1", "31.3","6.3","1.3","48.4"],
            ["15", "B机房", "张家口", "12.1", "31.3","6.3","1.3","48.4"],
            ["16", "C机房", "张家口", "12.1", "31.3","6.3","1.3","48.4"],
            ["17", "A机房", "承德", "12.1", "31.3","6.3","1.3","48.4"],
            ["18", "B机房", "承德", "12.1", "31.3","6.3","1.3","48.4"],
            ["19", "C机房", "承德", "12.1", "31.3","6.3","1.3","48.4"],
            ["20", "D机房", "承德", "12.1", "31.3","6.3","1.3","48.4"],
            ["21", "A机房", "沧州", "12.1", "31.3","6.3","1.3","48.4"],
            ["22", "B机房", "沧州", "12.1", "31.3","6.3","1.3","48.4"],
            ["23", "C机房", "沧州", "12.1", "31.3","6.3","1.3","48.4"],
            ["24", "D机房", "沧州", "12.1", "31.3","6.3","1.3","48.4"],
            ["25", "E机房", "沧州", "12.1", "31.3","6.3","1.3","48.4"]
        ]
    });

    var incomeChartDom = document.getElementById('income-chart-pane');
    var incomeChart = echarts.init(incomeChartDom);
    var incomeOption = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:['机柜租用', '带宽租用','DDOS','其他增值业务']
        },
        calculable : true,
        xAxis : [
            {
                type : 'value',
                axisLabel:{formatter:'{value} 万元'}
            }
        ],
        yAxis : [
            {
                type : 'category',
                data : ['金石','鹿泉','二枢纽','保定A','保定B','唐山A','唐山B']
            }
        ],
        series : [
            {
                name:'机柜租用',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[12.1, 23.4, 16.2, 6.8, 3.2, 12.1, 21.1]
            },
            {
                name:'带宽租用',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[31.3, 45.2, 15.7, 11.9, 8.4, 24.2, 31.3]
            },
            {
                name:'DDOS',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[3.3, 16.1, 2.5, 8.5, 2.5, 3.3, 9.8]
            },
            {
                name:'其他增值业务',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[5.3, 18.1, 4.5, 4.5, 3.6, 5.2, 7.8]
            }
        ]
    };

    incomeChart.setOption(incomeOption);



    // 运营分析
    var $investTable = $("#invest-table");

    $investTable.dataTable({
        "info" : false,
        "paging": true,
        "filter": false,
        "lengthChange": false,
        "pageLength":8,
        "destroy": true,
        "columns": [
            { "title": "#", "class": "center" },
            { "title": "机房名称", "class": "center" },
            { "title": "城市", "class": "center" },
            { "title": "机柜利用率（%）", "class": "center" },
            { "title": "带宽利用率（%）", "class": "center" },
            { "title": "增值业务利用率（%）", "class": "center" },
            { "title": "投资收益率（%）", "class": "center" }
        ],
        "data": [
            ["1" , "金石" , "石家庄", "42.1", "31.3","56.3","168.6"],
            ["2" , "鹿泉" , "石家庄", "63.4", "75.2","36.1","135.3"],
            ["3" , "二枢纽" , "石家庄", "36.2", "35.7","1.5","128.5"],
            ["4" , "A机房", "保定", "26.8", "31.9","32.5","149.6"],
            ["5" , "B机房", "保定", "33.2", "48.4","3.5","97.3"],
            ["6" , "C机房", "保定", "34.3", "36.9","31.6","76.7"],
            ["7" , "A机房", "唐山", "32.1", "31.3","53.3","108.5"],
            ["8" , "B机房", "唐山", "21.1", "41.3","35.8","154.9"],
            ["9" , "C机房", "唐山", "12.1", "31.3","6.3","128.6"],
            ["10", "A机房", "邯郸", "12.1", "31.3","6.3","128.6"],
            ["11", "B机房", "邯郸", "12.1", "31.3","6.3","128.6"],
            ["12", "C机房", "邯郸", "12.1", "31.3","6.3","128.6"],
            ["13", "A机房", "张家口", "12.1", "31.3","6.3","128.6"],
            ["15", "B机房", "张家口", "12.1", "31.3","6.3","128.6"],
            ["16", "C机房", "张家口", "12.1", "31.3","6.3","128.6"],
            ["17", "A机房", "承德", "12.1", "31.3","6.3","128.6"],
            ["18", "B机房", "承德", "12.1", "31.3","6.3","128.6"],
            ["19", "C机房", "承德", "12.1", "31.3","6.3","128.6"],
            ["20", "D机房", "承德", "12.1", "31.3","6.3","128.6"],
            ["21", "A机房", "沧州", "12.1", "31.3","6.3","128.6"],
            ["22", "B机房", "沧州", "12.1", "31.3","6.3","128.6"],
            ["23", "C机房", "沧州", "12.1", "31.3","6.3","128.6"],
            ["24", "D机房", "沧州", "12.1", "31.3","6.3","128.6"],
            ["25", "E机房", "沧州", "12.1", "31.3","6.3","128.6"]
        ]
    });


    var investChartDom = document.getElementById('invest-chart-pane');
    var investChart = echarts.init(investChartDom);
    var investOption = {
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:[
                '机柜总量占比', '带宽总量占比', '增值业务投资占比','',
                '机柜租用占比', '带宽租用占比', '增值业务收益占比'
            ]
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['金石','鹿泉','二枢纽','唐山A','保定A']
            },
            {
                type : 'category',
                axisLine: {show:false},
                axisTick: {show:false},
                axisLabel: {show:false},
                splitArea: {show:false},
                splitLine: {show:false},
                data : ['金石','鹿泉','二枢纽','唐山A','保定A']
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel:{formatter:'{value} %'}
            }
        ],
        series : [
            {
                name:'机柜租用占比',
                type:'bar',
                itemStyle: {normal: {color:'rgba(193,35,43,1)', label:{show:true}}},
                data:[2.5, 5.3, 4.3, 3.5, 2.4]
            },
            {
                name:'带宽租用占比',
                type:'bar',
                itemStyle: {normal: {color:'rgba(181,195,52,1)', label:{show:true,textStyle:{color:'#27727B'}}}},
                data:[3.6, 12.3, 8.3, 4.5, 3.4]
            },
            {
                name:'增值业务收益占比',
                type:'bar',
                itemStyle: {normal: {color:'rgba(252,206,16,1)', label:{show:true,textStyle:{color:'#E87C25'}}}},
                data:[12.5, 4.3, 5.3, 3.5, 2.4]
            },
            {
                name:'机柜总量占比',
                type:'bar',
                xAxisIndex:1,
                itemStyle: {normal: {color:'rgba(193,35,43,0.5)', label:{show:true}}},
                data:[5.1, 12.3, 9.5, 5.5, 6.2]
            },
            {
                name:'带宽总量占比',
                type:'bar',
                xAxisIndex:1,
                itemStyle: {normal: {color:'rgba(181,195,52,0.5)', label:{show:true}}},
                data:[7.6, 22.3, 18.3, 12.5, 7.4]
            },
            {
                name:'增值业务投资占比',
                type:'bar',
                xAxisIndex:1,
                itemStyle: {normal: {color:'rgba(252,206,16,0.5)', label:{show:true}}},
                data:[16.5, 9.3, 12.3, 5.5, 6.4]
            }
        ]
    };

    investChart.setOption(investOption);
});