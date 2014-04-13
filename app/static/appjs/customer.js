/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

$(function() {
    "use strict";

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
        hideHover: 'auto',
        formatter: function (x) { return x + "%"}
    });

});