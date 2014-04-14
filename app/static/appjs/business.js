/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

$(function() {
    "use strict";

    // 收入报表
    var area = new Morris.Area({
        element: 'revenue-chart',
        resize: true,
        data: [
            {y: '2012 Q1', bandwitdh: 26.66,  cabinet: 26.66, appreciation: 2.0},
            {y: '2012 Q2', bandwitdh: 27.78,  cabinet: 22.94, appreciation: 3.56},
            {y: '2012 Q3', bandwitdh: 49.12,  cabinet: 19.69, appreciation: 5.56},
            {y: '2012 Q4', bandwitdh: 37.67,  cabinet: 35.97, appreciation: 8.9},
            {y: '2013 Q1', bandwitdh: 68.10,  cabinet: 19.14, appreciation: 11.06},
            {y: '2013 Q2', bandwitdh: 56.70,  cabinet: 42.93, appreciation: 13.08},
            {y: '2013 Q3', bandwitdh: 48.20,  cabinet: 37.95, appreciation: 15.03},
            {y: '2013 Q4', bandwitdh: 60.73,  cabinet: 39.67, appreciation: 19.20},
            {y: '2014 Q1', bandwitdh: 76.87,  cabinet: 44.60, appreciation: 23.08},
            {y: '2014 Q2', bandwitdh: 84.32,  cabinet: 37.13, appreciation: 26.12}
        ], 
        xkey: 'y',
        ykeys: ['bandwitdh', 'cabinet', 'appreciation'],
        labels: ['带宽收入', '机柜收入','增值业务'],
        lineColors: ['#a0d0e0', '#65bad7', '#16abdd', ],
        hideHover: 'auto',
        yLabelFormat: function (x) { return x + " 万"}

    });

    // 收入分布
    var sale_chart = new Morris.Donut({
        element: 'sale-chart',
        resize: true,
        colors: ["#00c0ef", "#00a65a", "#f39c12", "#f56954"],
        data: [
            {label: "机柜租用", value: 32.3},
            {label: "带宽租用", value: 75.2},
            {label: "增值业务", value: 1.9},
        ],
        hideHover: 'auto',
        formatter: function (x) { return x + " 万"}
    });

    // 客户分布
    var customer_chart = new Morris.Donut({
        element: 'customer-chart',
        resize: true,
        colors: ["#00c0ef", "#00a65a", "#f39c12", "#f56954"],
        data: [
            {label: "互联网", value: 72.3},
            {label: "政府", value: 5.2},
            {label: "中小企业", value: 8.9},
            {label: "金融", value: 12.6}
        ],
        hideHover: 'auto',
        formatter: function (x) { return x + " 万"}
    });

    // 用电支出
    var myvalues = [], myPoints = 24;

    var random_range = [2,3,4,5,6];

    function getRandomValue(range) {

        myvalues = [];

        range = range % random_range.length;

        while (myvalues.length < myPoints) {
            var temp = Math.random() * random_range[range];
            myvalues.push(temp.toFixed(2));
        }

        return myvalues;
    }

    var res_value = [];
    var sparkline_id;
    
    for (var i = 1; i <= 5; i++ ) {
        sparkline_id = '#sparkline-' + i;

        res_value = getRandomValue(i);

        $(sparkline_id).sparkline(res_value, {
            type: 'bar',
            tooltipFormat: '{{offset}} 时: {{value}} 度',
            barColor: '#00a65a',
            negBarColor: "#f56954",
            height: '30px'
        });

    };

    // 免费用户支出
    var freecustomer_chart = new Morris.Donut({
        element: 'freecustomer-chart',
        resize: true,
        colors: ["#00c0ef", "#00a65a", "#f39c12", "#f56954"],
        data: [
            {label: "互联网", value: 72.3},
            {label: "政府", value: 5.2},
            {label: "中小企业", value: 8.9},
            {label: "金融", value: 12.6}
        ],
        hideHover: 'auto',
        formatter: function (x) { return x + " 万"}
    });



});