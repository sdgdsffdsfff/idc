/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

$(function() {
    "use strict";

    // 机柜分布
    var cabinet = new Morris.Donut({
        element: 'cabinet-chart',
        resize: true,
        colors: ["#00c0ef", "#00a65a", "#f39c12", "#f56954"],
        data: [
            {label: "蓝汛", value: 6},
            {label: "腾讯", value: 10},
            {label: "班班通", value: 2},
            {label: "兴业银行", value: 1}
        ],
        hideHover: 'auto',
        formatter: function (x) { return x + " 柜"}
    });

    // 带宽分布
    var band = new Morris.Donut({
        element: 'band-chart',
        resize: true,
        colors: ["#00c0ef", "#00a65a", "#f39c12", "#f56954"],
        data: [
            {label: "蓝汛", value: 20},
            {label: "腾讯", value: 20},
            {label: "班班通", value: 2},
            {label: "兴业银行", value: 1}
        ],
        hideHover: 'auto',
        formatter: function (x) { return x + " GB"}
    });

    // IP分布
    var ip = new Morris.Donut({
        element: 'ip-chart',
        resize: true,
        colors: ["#00c0ef", "#00a65a", "#f39c12", "#f56954"],
        data: [
            {label: "蓝汛", value: 128},
            {label: "腾讯", value: 64},
            {label: "班班通", value: 8},
            {label: "兴业银行", value: 8}
        ],
        hideHover: 'auto',
        formatter: function (x) { return x + " 个"}
    });

});