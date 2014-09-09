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

    // 全省机房统计
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
            { "title": "机柜总量", "class": "center" },
            { "title": "带宽总量", "class": "center" },
            { "title": "增值业务", "class": "center", "orderable": false }
        ],
        "data": [
            ["1", "金石", "石家庄", "410", "40G",returnStar(4)],
            ["2", "鹿泉","石家庄", "1265", "220G", returnStar(3)],
            ["3", "二枢纽","石家庄", "762", "120G", returnStar(4)],
            ["4", "A机房","保定", "163", "40G", returnStar(2)],
            ["5", "B机房","保定", "256", "80G", returnStar(3)],
            ["6", "C机房","保定", "855", "60G", returnStar(3)],
            ["7", "A机房","唐山", "245", "100G", returnStar(4)],
            ["8", "B机房","唐山", "726", "90G", returnStar(5)],
            ["9", "C机房","唐山", "655", "60G", returnStar(3)],
            ["10", "A机房","邯郸", "245", "100G", returnStar(4)],
            ["11", "B机房","邯郸", "726", "90G", returnStar(5)],
            ["12", "C机房","邯郸", "655", "60G", returnStar(3)],
            ["13", "A机房","张家口", "163", "40G", returnStar(2)],
            ["15", "B机房","张家口", "256", "80G", returnStar(3)],
            ["16", "C机房","张家口", "855", "60G", returnStar(3)],
            ["17", "A机房","承德", "245", "100G", returnStar(4)],
            ["18", "B机房","承德", "726", "90G", returnStar(5)],
            ["19", "C机房","承德", "655", "60G", returnStar(3)],
            ["20", "D机房","承德", "655", "60G", returnStar(3)],
            ["21", "A机房","沧州", "163", "40G", returnStar(2)],
            ["22", "B机房","沧州", "256", "80G", returnStar(3)],
            ["23", "C机房","沧州", "855", "60G", returnStar(3)],
            ["24", "D机房","沧州", "245", "100G", returnStar(4)],
            ["25", "E机房","沧州", "726", "90G", returnStar(5)]
        ]
    });

    // 全省收入统计
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
            ["1", "机柜租用",  125.1, 116.3, 109.2, 123.2, 123.5],
            ["2", "带宽租用", 275.6, 292.7, 306.2, 312.5, 316.4],
            ["3", "DDOS 流量清洗", 58.5, 59.9, 63.2, 68.4, 72.4],
            ["4", "压力测试服务", 16.5, 15.9, 17.1, 18.6, 17.9],
            ["5", "云计算服务", 88.5, 91.9, 95.2, 87.0, 96.4],
            ["6", "网站安全测试", 28.5, 21.9, 25.2, 23.4, 26.4]
        ]
    });

    var $roomChart1 = $('#room-chart1');
    var $roomChart2 = $('#room-chart2');

    $roomChart1.highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '全省机柜总量'
        },
        tooltip: {
            pointFormat: '机柜总量: <b>{point.y}</b><br/>{series.name}: <b>{point.percentage:.1f}%</b>'
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
            name: '机柜总量',
            data: [
                ['鹿泉', 1265],
                ['二枢纽', 762],
                {
                    name: '金石',
                    y: 410,
                    sliced: true,
                    selected: true
                },
                ['保定 A', 1563],
                ['唐山 A', 1245],
                ['其他机房', 2726]
            ]
        }]
    });

    $roomChart2.highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '全省机柜租用量'
        },
        tooltip: {
            pointFormat: '机柜租用量: <b>{point.y}</b><br/>{series.name}: <b>{point.percentage:.1f}%</b>'
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
            name: '机柜租用量',
            innerSize: '65%',
            data: [
                ['鹿泉', 563],
                ['二枢纽', 435],
                {
                    name: '金石',
                    y: 220,
                    sliced: true,
                    selected: true
                },
                ['保定 A', 940],
                ['唐山 A', 876],
                ['其他机房', 1573]
            ]
        }]
    });

    var $bandChart1 = $('#band-chart1');
    var $bandChart2 = $('#band-chart2');

    $bandChart1.highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '全省带宽总量'
        },
        tooltip: {
            pointFormat: '带宽总量: <b>{point.y} GB</b><br/>{series.name}: <b>{point.percentage:.1f}%</b>'
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
            name: '带宽总量',
            data: [
                ['鹿泉', 120],
                ['二枢纽', 60],
                {
                    name: '金石',
                    y: 25,
                    sliced: true,
                    selected: true
                },
                ['保定', 140],
                ['唐山', 210],
                ['其他', 420]
            ]
        }]
    });

    $bandChart2.highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '全省带宽租用量'
        },
        tooltip: {
            pointFormat: '带宽租用量: <b>{point.y} GB</b><br/>{series.name}: <b>{point.percentage:.1f}%</b>'
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
            name: '带宽租用量',
            innerSize: '65%',
            data: [
                ['鹿泉', 220],
                ['二枢纽', 120],
                {
                    name: '金石',
                    y: 40,
                    sliced: true,
                    selected: true
                },
                ['保定', 340],
                ['唐山', 500],
                ['其他', 700]
            ]
        }]
    });

    var $incomeChart1 = $('#income-chart1');
    var $incomeChart2 = $('#income-chart2');

    $incomeChart1.highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '各项业务收入占比'
        },
        subtitle: {
            text: '2014年8月'
        },
        tooltip: {
            pointFormat: '收入总计: <b>{point.y} 万元</b><br/>{series.name}: <b>{point.percentage:.1f}%</b>'
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
            name: '收入占比',
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

    $incomeChart2.highcharts({
        title: {
            text: '各项业务收入总计'
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