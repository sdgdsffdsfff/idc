/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

$(function() {
    "use strict";

    // 历史费用
    var billing_chart = new Morris.Area({
        element: 'billing-chart',
        resize: true,
        data: [
            {y: '2012 Q1', bandwitdh: 1.66,  cabinet: 0.86, safe: 0.02},
            {y: '2012 Q2', bandwitdh: 1.58,  cabinet: 0.94, safe: 0.04},
            {y: '2012 Q3', bandwitdh: 1.52,  cabinet: 0.89, safe: 0.05},
            {y: '2012 Q4', bandwitdh: 1.67,  cabinet: 0.97, safe: 0.03},
            {y: '2013 Q1', bandwitdh: 1.60,  cabinet: 0.84, safe: 0.06},
            {y: '2013 Q2', bandwitdh: 1.70,  cabinet: 0.93, safe: 0.04},
            {y: '2013 Q3', bandwitdh: 1.50,  cabinet: 0.95, safe: 0.06},
            {y: '2013 Q4', bandwitdh: 1.73,  cabinet: 0.87, safe: 0.08},
            {y: '2014 Q1', bandwitdh: 1.87,  cabinet: 0.90, safe: 0.08},
            {y: '2014 Q2', bandwitdh: 1.72,  cabinet: 0.93, safe: 0.12}
        ], 
        xkey: 'y',
        ykeys: ['bandwitdh', 'cabinet', 'safe'],
        labels: ['带宽租用', '机柜租用','安全服务'],
        lineColors: ['#a0d0e0', '#65bad7', '#16abdd', ],
        hideHover: 'auto',
        yLabelFormat: function (x) { return x + " 万"}

    });

    // 费用分布
    var fee_chart = new Morris.Donut({
        element: 'fee-chart',
        resize: true,
        colors: ["#00c0ef", "#00a65a", "#f39c12", "#f56954"],
        data: [
            {label: "机柜租用", value: 28},
            {label: "带宽租用", value: 61},
            {label: "安全服务", value: 11},
        ],
        hideHover: 'auto',
        formatter: function (x) { return x + " %"}
    });

});