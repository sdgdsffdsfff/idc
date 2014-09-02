function returnStar(value) {
    var starStr = "";
    for(var i=1; i<= value; i++) {
        starStr +=  "<i class='fa fa-star star'></i>";
    }
    for(;i<=5;i++){
        starStr +=  "<i class='fa fa-star-o star'></i>";
    }

    return starStr;
}

$(function() {
    "use strict";

    // 业务投资分析
    var $investTable = $("#invest-table");

    $investTable.dataTable({
        "info" : false,
        "paging": true,
        "filter": false,
        "lengthChange": false,
        "pageLength":8,
        "destroy": true,
        "columns": [
            { "title": "#", "class": "center" },
            { "title": "业务名称", "class": "center" },
            { "title": "业务收入（万/月）", "class": "center" },
            { "title": "业务支出（万/月）", "class": "center"},
            { "title": "利润率（%）", "class": "center"},
            { "title": "客户评价", "class": "center", "orderable": false}
        ],
        "data": [
            ["1", "机柜租用", "123.5", "83.4","52.3",returnStar(4)],
            ["2", "带宽租用", "316.4","159.2","53.5",returnStar(4)],
            ["3", "DDOS 流量清洗", "72.4","35.2","73.5",returnStar(5)],
            ["4", "压力测试服务", "16.4","7.2","34.6",returnStar(3)],
            ["5", "云计算服务", "96.4", "67.6","32.5",returnStar(2)],
            ["6", "网站安全测试", "26.4", "12.5","56.3",returnStar(4)]
        ]
    });


    var investChartDom = document.getElementById('invest-chart-pane');
    var investChart = echarts.init(investChartDom);
    var investOption = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:['当月利润', '业务支出', '业务收入']
        },
        calculable : true,
        xAxis : [
            {
                type : 'value'
            }
        ],
        yAxis : [
            {
                type : 'category',
                axisTick : {show: false},
                data : ['机柜租用','带宽租用','压力测试服务','云计算服务','网站安全测试','DDOS']
            }
        ],
        series : [
            {
                name:'当月利润',
                type:'bar',
                itemStyle : { normal: {label : {show: true, position: 'inside'}}},
                data:[40.1, 157.2, 37.2, 9.2, 28.8, 13.9]
            },
            {
                name:'业务收入',
                type:'bar',
                stack: '总量',
                barWidth : 5,
                itemStyle: {normal: {
                    label : {show: true}
                }},
                data:[123.5, 316.4, 72.4, 16.4, 96.4, 26.4]
            },
            {
                name:'业务支出',
                type:'bar',
                stack: '总量',
                itemStyle: {normal: {
                    label : {show: true, position: 'left'}
                }},
                data:[-83.4, -159.2, -35.2, -7.2, -67.6, -12.5]
            }
        ]
    };

    investChart.setOption(investOption);

});