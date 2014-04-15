$(function() {
    
    "use strict";

    // 资源剩余信息

    // 剩余带宽
    var band_chart = new Morris.Donut({
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
    var ip_chart = new Morris.Donut({
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
        labels: ['下行', '上行'],
        hideHover: 'auto',
        yLabelFormat: function (x) { return x + " GB"}
    });

    // 流量统计 Top3
    $(".knob").knob({
      'draw' : function () { 
        $(this.i).val(this.cv + '%')
      }
    })

    // 峰值流量
    var myvalues = [], myPoints = 24;

    var random_range = [0,20,1,1,1,10];

    function getRandomValue(range) {

        myvalues = [];

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
            tooltipFormat: '{{offset}} 点: {{value}} GB',
            barColor: '#00a65a',
            negBarColor: "#f56954",
            height: '30px'
        });

    };
    

});