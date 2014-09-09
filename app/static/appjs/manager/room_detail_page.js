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
            {label: "剩余机柜", value: 1}
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
            {label: "北京蓝汛", value: 20},
            {label: "北京腾讯", value: 20},
            {label: "兴业银行", value: 2},
            {label: "剩余带宽", value: 1}
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
            {label: "剩余IP", value: 8}
        ],
        hideHover: 'auto',
        formatter: function (x) { return x + " 个"}
    });

    $('.box ul.nav a').on('shown.bs.tab', function(e) {
        cabinetChart.redraw();
        bandChart.redraw();
        ipChart.redraw();
    });

});