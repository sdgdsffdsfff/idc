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
            { "title": "月份", "class": "center" },
            { "title": "机柜租用", "class": "center" },
            { "title": "带宽租用", "class": "center" },
            { "title": "DDOS业务", "class": "center"},
            { "title": "压力测试业务", "class": "center"},
            { "title": "云计算业务", "class": "center"},
            { "title": "安全测试业务", "class": "center"}
        ],
        "data": [
            ["1月", 103.2, 285.7, 21.4, 17.4, 83.4, 23.4],
            ["2月", 106.3, 293.2, 34.2, 16.5, 92.6, 24.2],
            ["3月", 113.5, 305.3, 45.7, 15.8, 85.3, 25.7],
            ["4月", 125.1, 275.6, 58.5, 16.5, 88.5, 28.5],
            ["5月", 116.3, 292.7, 59.9, 15.9, 91.9, 21.9],
            ["6月", 109.2, 306.2, 63.2, 17.1, 95.2, 25.2],
            ["7月", 123.2, 312.5, 68.4, 18.6, 87.0, 23.4],
            ["8月", 123.5, 316.4, 72.4, 16.4, 96.4, 26.4]
        ]
    });

    var $incomeChart = $('#income-chart-pane');

    $incomeChart.highcharts({
        title: {
            text: '业务收入统计',
            x: -20 //center
        },
        subtitle: {
            text: '2014财年',
            x: -20
        },
        xAxis: {
            categories: ['1月','2月','3月','4月','5月','6月','7月','8月']
        },
        yAxis: {
            title: {
                text: '收入（万）'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '（万）'
        },
        legend: {
//            layout: 'vertical',
            align: 'center',
//            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '机柜租用',
            data: [103.2, 106.3, 113.5, 125.1, 116.3, 109.2, 123.2, 123.5]
        }, {
            name: '带宽租用',
            data: [285.7, 293.2, 305.3, 275.6, 292.7, 306.2, 312.5, 316.4]
        }, {
            name: '压力测试服务',
            data: [17.4, 16.5, 15.8, 16.5, 15.9, 17.1, 18.6, 16.4]
        }, {
            name: '云计算服务',
            data: [83.4, 92.6, 85.3, 88.5, 91.9, 95.2, 87.0, 96.4]
        },{
            name: '网站安全测试',
            data: [23.4, 24.2, 25.7, 28.5, 21.9, 25.2, 23.4, 26.4]
        },{
            name: 'DDOS',
            data: [21.4, 34.2, 45.7, 58.5, 59.9, 63.2, 68.4, 72.4]
        }]
    });

    // 投资收益分析
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
            { "title": "业务名称", "class": "center" },
            { "title": "业务收入（万/月）", "class": "center" },
            { "title": "业务支出（万/月）", "class": "center"},
            { "title": "业务收益（万/月）", "class": "center"},
            { "title": "客户评价", "class": "center", "orderable": false}
        ],
        "data": [
            ["1", "机柜租用", "123.5", "83.4","40.1",returnStar(4)],
            ["2", "带宽租用", "216.4","129.2","87.2",returnStar(4)],
            ["3", "DDOS 流量清洗", "72.4","35.2","37.2",returnStar(5)],
            ["4", "压力测试服务", "16.4","7.2","9.2",returnStar(3)],
            ["5", "云计算服务", "95.6", "67.6","28",returnStar(2)],
            ["6", "网站安全测试", "26.4", "12.5","13.9",returnStar(4)]
        ]
    });


    var investChartDom = document.getElementById('invest-chart-pane');
    var investChart = echarts.init(investChartDom);
    var investOption = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:['当月利润', '业务支出', '业务收入']
        },
        calculable : true,
        xAxis : [
            {
                type : 'value'
            }
        ],
        yAxis : [
            {
                type : 'category',
                axisTick : {show: false},
                data : ['机柜租用','带宽租用','压力测试服务','云计算服务','网站安全测试','DDOS']
            }
        ],
        series : [
            {
                name:'当月利润',
                type:'bar',
                itemStyle : { normal: {label : {show: true, position: 'inside'}}},
                data:[40.1, 87.2, 37.2, 9.2, 28.8, 13.9]
            },
            {
                name:'业务收入',
                type:'bar',
                stack: '总量',
                barWidth : 5,
                itemStyle: {normal: {
                    label : {show: true}
                }},
                data:[123.5, 216.4, 72.4, 16.4, 96.4, 26.4]
            },
            {
                name:'业务支出',
                type:'bar',
                stack: '总量',
                itemStyle: {normal: {
                    label : {show: true, position: 'left'}
                }},
                data:[-83.4, -129.2, -35.2, -7.2, -67.6, -12.5]
            }
        ]
    };

    investChart.setOption(investOption);

});