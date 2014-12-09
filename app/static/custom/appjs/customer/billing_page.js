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

    var $serviceChart1 = $('#service-chart1');
    var $serviceChart2 = $('#service-chart2');

    $serviceChart1.highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '各项费用支出'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            type: 'pie',
            name: '机柜占有率',
            innerSize: '45%',
            data: [
                ['压力测试', 16.4],
                ['带宽租用', 316.4],
                {
                    name: 'DDOS',
                    y: 72.4,
                    sliced: true,
                    selected: true
                },
                ['机柜租用', 123.5],
                ['云计算', 96.4],
                ['网站安全', 26.4]
            ]
        }]
    });

    $serviceChart2.highcharts({
        title: {
            text: '历史费用查询',
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
            data: [17.4, 16.5, 15.8, 16.5, 15.9, 17.1, 18.6, 17.9]
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



});