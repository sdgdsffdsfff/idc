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

    // 端口表格
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
            { "title": "客户评价", "class": "center", "orderable": false },
            { "title": "内部评分", "class": "center", "orderable": false }
        ],
        "data": [
            ["1", "金石", "石家庄", "410", "40G",returnStar(5), returnStar(5)],
            ["2", "鹿泉","石家庄", "1265", "220G", returnStar(4), returnStar(5)],
            ["3", "二枢纽","石家庄", "762", "120G", returnStar(3), returnStar(3)],
            ["4", "A机房","保定", "163", "40G", returnStar(2), returnStar(3)],
            ["5", "B机房","保定", "256", "80G", returnStar(3), returnStar(4)],
            ["6", "C机房","保定", "855", "60G", returnStar(3), returnStar(3)],
            ["7", "A机房","唐山", "245", "100G", returnStar(4), returnStar(5)],
            ["8", "B机房","唐山", "726", "90G", returnStar(5), returnStar(2)],
            ["9", "C机房","唐山", "655", "60G", returnStar(3), returnStar(2)],
            ["10", "A机房","邯郸", "245", "100G", returnStar(4), returnStar(5)],
            ["11", "B机房","邯郸", "726", "90G", returnStar(5), returnStar(2)],
            ["12", "C机房","邯郸", "655", "60G", returnStar(3), returnStar(2)],
            ["13", "A机房","张家口", "163", "40G", returnStar(2), returnStar(3)],
            ["15", "B机房","张家口", "256", "80G", returnStar(3), returnStar(4)],
            ["16", "C机房","张家口", "855", "60G", returnStar(3), returnStar(3)],
            ["17", "A机房","承德", "245", "100G", returnStar(4), returnStar(5)],
            ["18", "B机房","承德", "726", "90G", returnStar(5), returnStar(2)],
            ["19", "C机房","承德", "655", "60G", returnStar(3), returnStar(2)],
            ["20", "D机房","承德", "655", "60G", returnStar(3), returnStar(2)],
            ["21", "A机房","沧州", "163", "40G", returnStar(2), returnStar(3)],
            ["22", "B机房","沧州", "256", "80G", returnStar(3), returnStar(4)],
            ["23", "C机房","沧州", "855", "60G", returnStar(3), returnStar(3)],
            ["24", "D机房","沧州", "245", "100G", returnStar(4), returnStar(5)],
            ["25", "E机房","沧州", "726", "90G", returnStar(5), returnStar(2)]
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
            text: '全省机柜总量分布'
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
            data: [
                ['鹿泉', 1265],
                ['二枢纽', 762],
                {
                    name: '金石',
                    y: 410,
                    sliced: true,
                    selected: true
                },
                ['保定A', 163],
                ['唐山A', 245]
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
            text: '全省带宽总量分布'
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
            data: [
                ['鹿泉', 220],
                ['二枢纽', 120],
                {
                    name: '金石',
                    y: 40,
                    sliced: true,
                    selected: true
                },
                ['保定A', 40],
                ['唐山A', 100]
            ]
        }]
    });

});