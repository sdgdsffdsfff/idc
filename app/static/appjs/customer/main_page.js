/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

$(function() {
    "use strict";
    
    // 带宽资源统计表
    var bar_chart = new Morris.Bar({
        element: 'bar-chart',
        resize: true,
        data: [
            {y: '10月', a: 0.13, b: 2.8},
            {y: '11月', a: 0.15, b: 2.4},
            {y: '12月', a: 0.10, b: 2.0},
            {y: '01月', a: 0.12, b: 2.3},
            {y: '02月', a: 0.16, b: 2.5},
            {y: '03月', a: 0.11, b: 2.1},
            {y: '04月', a: 0.17, b: 2.6}
        ],
        barColors: ['#00a65a', '#f56954'],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['下行流量', '上行流量'],
        hideHover: 'auto',
        yLabelFormat: function (x) { return x + " GB"}
    });

    // SLA 报表
    var sla_chart = new Morris.Line({
        element: 'sla-chart',
        resize: true,
        data: [
            {y: '2013 Q1', sla: 99.994},
            {y: '2013 Q2', sla: 99.996},
            {y: '2013 Q3', sla: 99.998},
            {y: '2013 Q4', sla: 99.997},
            {y: '2014 Q1', sla: 99.996},
        ], 
        xkey: 'y',
        ykeys: ['sla',],
        labels: ['SLA指标', ],
        lineColors: ['#65bad7','#a0d0e0',  '#16abdd',],
        hideHover: 'auto',
        yLabelFormat: function (x) { return x + "%"}

    });
    
});