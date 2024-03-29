/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

$(function() {
    "use strict";

    // 流量统计 Top3
    $(".knob").knob({
      'draw' : function () { 
        $(this.i).val(this.cv + '%')
      }
    });
    
    // 带宽资源统计表
    var bar_chart = new Morris.Bar({
        element: 'bar-chart',
        resize: true,
        data: [
            {y: '10月', a: 1.3, b: 28},
            {y: '11月', a: 1.5, b: 24},
            {y: '12月', a: 1.0, b: 20},
            {y: '01月', a: 1.2, b: 23},
            {y: '02月', a: 1.6, b: 25},
            {y: '03月', a: 1.1, b: 21},
            {y: '04月', a: 1.7, b: 26}
        ],
        barColors: ['#00a65a', '#f56954'],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['下行流量', '上行流量'],
        hideHover: 'auto',
        yLabelFormat: function (x) { return x + " GB"}
    });

    // 收入报表
    var revenue_chart = new Morris.Area({
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
        lineColors: ['#a0d0e0', '#65bad7', '#16abdd'],
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
            {label: "增值业务", value: 1.9}
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

    $('.box ul.nav a').on('shown.bs.tab', function(e) {
        customer_chart.redraw();
        sale_chart.redraw();
    });

});