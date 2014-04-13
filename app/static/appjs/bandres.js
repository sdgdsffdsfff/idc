$(function() {
    
    "use strict";

    // 资源剩余信息

    // 剩余带宽
    var donut = new Morris.Donut({
        element: 'band-chart',
        resize: true,
        colors: ["#00c0ef", "#932ab6","#00a65a", "#f39c12", "#f56954"],
        data: [
            {label: "剩余带宽", value: 21.4},
            {label: "互联网", value: 12.3},
            {label: "政府", value: 0.8},
            {label: "中小企业", value: 1.2},
            {label: "金融", value: 1.3}
        ],
        hideHover: 'auto',
        formatter: function (x) { return x + " GB"}
    });

    // 剩余IP
    var donut = new Morris.Donut({
        element: 'ip-chart',
        resize: true,
        colors: ["#00c0ef", "#932ab6","#00a65a", "#f39c12", "#f56954"],
        data: [
            {label: "剩余IP", value: 896},
            {label: "互联网", value: 1024},
            {label: "政府", value: 12},
            {label: "中小企业", value: 20},
            {label: "金融", value: 50}
        ],
        hideHover: 'auto',
        formatter: function (x) { return x + "个"}
    });

    // 带宽资源统计表
    var bar = new Morris.Bar({
        element: 'bar-chart',
        resize: true,
        data: [
            {y: '10月', a: 1.3, b: 18},
            {y: '11月', a: 1.5, b: 14},
            {y: '12月', a: 1.0, b: 10},
            {y: '01月', a: 1.2, b: 13},
            {y: '02月', a: 1.6, b: 15},
            {y: '03月', a: 1.1, b: 11},
            {y: '04月', a: 1.7, b: 16}
        ],
        barColors: ['#00a65a', '#f56954'],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['下行流量', '上行流量'],
        hideHover: 'auto',
        yLabelFormat: function (x) { return x + " GB"}
    });

    // 流量业务分部
    $(".knob").knob();
    

});