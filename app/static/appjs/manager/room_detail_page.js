$(function() {
    "use strict";

    var chartColors = ['#ff7f50','#87cefa','#da70d6','#32cd32','#6495ed',
            '#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0',
            '#1e90ff','#ff6347','#7b68ee','#00fa9a','#ffd700',
            '#6699FF','#ff6666','#3cb371','#b8860b','#30e0e0'];


    // 机柜分布
    var cabinetChart = new Morris.Donut({
        element: 'cabinet-chart',
        resize: true,
        colors: chartColors,
        data: [
            {label: "北京蓝汛", value: 6},
            {label: "北京腾讯", value: 10},
            {label: "兴业银行", value: 2},
            {label: "剩余机柜", value: 58}
        ],
        hideHover: 'auto',
        formatter: function (x) { return x + " 柜"}
    });

    // 带宽分布
    var bandChart = new Morris.Donut({
        element: 'band-chart',
        resize: true,
        colors: chartColors,
        data: [
            {label: "北京蓝汛", value: 10},
            {label: "北京腾讯", value: 5},
            {label: "兴业银行", value: 2},
            {label: "剩余带宽", value: 22}
        ],
        hideHover: 'auto',
        formatter: function (x) { return x + " GB"}
    });

    // IP分布
    var ipChart = new Morris.Donut({
        element: 'ip-chart',
        resize: true,
        colors: chartColors,
        data: [
            {label: "北京蓝汛", value: 128},
            {label: "北京腾讯", value: 64},
            {label: "兴业银行", value: 8},
            {label: "剩余IP", value: 738}
        ],
        hideHover: 'auto',
        formatter: function (x) { return x + " 个"}
    });

    var $pane = $('.box ul.nav a');

    $pane.on('shown.bs.tab', function(e) {
        cabinetChart.redraw();
        bandChart.redraw();
        ipChart.redraw();
    });


    // 全省业务统计
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
            { "title": "业务名称", "class": "center" },
            { "title": "4月（万）", "class": "center" },
            { "title": "5月（万）", "class": "center" },
            { "title": "6月（万）", "class": "center" },
            { "title": "7月（万）", "class": "center" },
            { "title": "8月（万）", "class": "center" }
        ],
        "data": [
            ["1","机柜租用", 12.1, 13.3, 10.9, 13.2, 12.3],
            ["2","带宽租用", 27.6, 29.7, 30.2, 31.5, 31.4],
            ["3","DDOS 流量清洗", 5.5, 5.9, 6.2, 7.4, 8.6],
            ["4","压力测试服务", 6.5, 5.9, 7.1, 8.6, 7.9],
            ["5","云计算服务", 8.5, 9.9, 9.2, 8.0, 9.4],
            ["6","网站安全测试", 2.5, 2.9, 2.2, 2.4, 2.4]
        ]
    });

     var $incomeChart = $("#income-chart-pane");

    $incomeChart.highcharts({
        title: {
            text: '业务收入统计'
        },
        subtitle: {
            text: '2014财年'
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
            data: [10.3, 11.6, 13.5, 12.1, 13.3, 10.9, 13.2, 12.3]
        }, {
            name: '带宽租用',
            data: [28.7, 29.2, 30.3, 27.6, 29.7, 30.2, 31.5, 31.4]
        }, {
            name: '压力测试服务',
            data: [7.4, 6.5, 5.8, 6.5, 5.9, 7.1, 8.6, 7.9]
        }, {
            name: '云计算服务',
            data: [8.4, 9.6, 8.3, 8.5, 9.9, 9.2, 8.0, 9.4]
        },{
            name: '网站安全测试',
            data: [2.4, 2.2, 2.7, 2.5, 2.9, 2.2, 2.4, 2.4]
        },{
            name: 'DDOS',
            data: [2.4, 3.2, 4.7, 5.5, 5.9, 6.2, 7.4, 8.6]
        }]
    });

});