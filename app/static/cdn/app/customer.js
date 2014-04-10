/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

$(function() {
    "use strict";

    /* Morris.js Charts */

    // 收入报表
    // var area = new Morris.Area({
    //     element: 'revenue-chart',
    //     resize: true,
    //     data: [
    //         {y: '2012 Q1', bandwitdh: 2666,  cabinet: 2666, appreciation: 200},
    //         {y: '2012 Q2', bandwitdh: 2778,  cabinet: 2294, appreciation: 356},
    //         {y: '2012 Q3', bandwitdh: 4912,  cabinet: 1969, appreciation: 556},
    //         {y: '2012 Q4', bandwitdh: 3767,  cabinet: 3597, appreciation: 890},
    //         {y: '2013 Q1', bandwitdh: 6810,  cabinet: 1914, appreciation: 1106},
    //         {y: '2013 Q2', bandwitdh: 5670,  cabinet: 4293, appreciation: 1308},
    //         {y: '2013 Q3', bandwitdh: 4820,  cabinet: 3795, appreciation: 1503},
    //         {y: '2013 Q4', bandwitdh: 6073,  cabinet: 3967, appreciation: 1920},
    //         {y: '2014 Q1', bandwitdh: 7687,  cabinet: 4460, appreciation: 2308},
    //         {y: '2014 Q2', bandwitdh: 8432,  cabinet: 3713, appreciation: 2612}
    //     ], 
    //     xkey: 'y',
    //     ykeys: ['bandwitdh', 'cabinet', 'appreciation'],
    //     labels: ['带宽收入', '机柜收入','增值业务'],
    //     lineColors: ['#a0d0e0', '#65bad7', '#16abdd', ],
    //     hideHover: 'auto'
    // });

    // 客户分布
    var donut = new Morris.Donut({
        element: 'donut-chart',
        resize: true,
        colors: ["#00c0ef", "#00a65a", "#f39c12", "#f56954"],
        data: [
            {label: "互联网", value: 72},
            {label: "政府", value: 5},
            {label: "中小企业", value: 8},
            {label: "金融", value: 12}
        ],
        hideHover: 'auto'
    });

});