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

    // 机房投资分析
    var $roomInvestTable = $("#room-invest-table");

    $roomInvestTable.dataTable({
        "info" : false,
        "paging": true,
        "filter": false,
        "lengthChange": false,
        "pageLength":8,
        "destroy": true,
        "columns": [
            { "title": "#", "class": "center" },
            { "title": "机房名称", "class": "center" },
            { "title": "城市", "class": "center" },
            { "title": "机柜租用", "class": "center" },
            { "title": "带宽租用", "class": "center" },
            { "title": "增值业务", "class": "center" },
            { "title": "运营支出", "class": "center" },
            { "title": "收入总计", "class": "center" }
        ],
        "data": [
            ["1" , "金石" , "石家庄", "12.1", "31.3","6.3","11.3","38.4"],
            ["2" , "鹿泉" , "石家庄", "23.4", "45.2","36.1","18.3","136.4"],
            ["3" , "二枢纽" , "石家庄", "16.2", "15.7","3.5","13.2","22.2"],
            ["4" , "A机房", "保定", "6.8", "11.9","12.5","11.2","20"],
            ["5" , "B机房", "保定", "3.2", "8.4","0.5","1.2","10.9"],
            ["6" , "C机房", "保定", "4.3", "5.9","1.6","5.0","6.8"],
            ["7" , "A机房", "唐山", "12.1", "24.2","6.3","11.3","38.4"],
            ["8" , "B机房", "唐山", "21.1", "31.3","15.8","21.3","56.9"],
            ["9" , "C机房", "唐山", "12.1", "31.3","6.3","11.3","38.4"],
            ["10", "A机房", "邯郸", "12.1", "31.3","6.3","11.3","38.4"],
            ["11", "B机房", "邯郸", "12.1", "31.3","6.3","11.3","38.4"],
            ["12", "C机房", "邯郸", "12.1", "31.3","6.3","11.3","38.4"],
            ["13", "A机房", "张家口", "12.1", "31.3","6.3","11.3","38.4"],
            ["15", "B机房", "张家口", "12.1", "31.3","6.3","11.3","38.4"],
            ["16", "C机房", "张家口", "12.1", "31.3","6.3","11.3","38.4"],
            ["17", "A机房", "承德", "12.1", "31.3","6.3","11.3","38.4"],
            ["18", "B机房", "承德", "12.1", "31.3","6.3","11.3","38.4"],
            ["19", "C机房", "承德", "12.1", "31.3","6.3","11.3","38.4"],
            ["20", "D机房", "承德", "12.1", "31.3","6.3","11.3","38.4"],
            ["21", "A机房", "沧州", "12.1", "31.3","6.3","11.3","38.4"],
            ["22", "B机房", "沧州", "12.1", "31.3","6.3","11.3","38.4"],
            ["23", "C机房", "沧州", "12.1", "31.3","6.3","11.3","38.4"],
            ["24", "D机房", "沧州", "12.1", "31.3","6.3","11.3","38.4"],
            ["25", "E机房", "沧州", "12.1", "31.3","6.3","11.3","38.4"]
        ]
    });


    var roomInvestChartDom = document.getElementById('room-invest-chart-pane');
    var roomInvestChart = echarts.init(roomInvestChartDom);
    var roomInvestOption = {
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
                data : ['金石','鹿泉','二枢纽','保定A','保定B','唐山A']
            }
        ],
        series : [
            {
                name:'当月利润',
                type:'bar',
                itemStyle : { normal: {label : {show: true, position: 'inside'}}},
                data:[38.4, 136.4, 22.2, 20, 10.9, 38.4]
            },
            {
                name:'业务收入',
                type:'bar',
                stack: '总量',
                barWidth : 5,
                itemStyle: {normal: {
                    label : {show: true}
                }},
                data:[49.7, 154.7, 35.4, 31.2, 12.1, 49.7]
            },
            {
                name:'业务支出',
                type:'bar',
                stack: '总量',
                itemStyle: {normal: {
                    label : {show: true, position: 'left'}
                }},
                data:[-11.3, -18.3, -13.2, -11.2, -1.2, -11.3]
            }
        ]
    };

    roomInvestChart.setOption(roomInvestOption);


});