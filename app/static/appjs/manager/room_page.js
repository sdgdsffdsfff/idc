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

function roomLink(value) {
    return "<a href='1' target='_blank'>" + value + "</a>";
}

$(function() {
    "use strict";

    // 收入统计
    var $roomTable = $("#room-table");

    $roomTable.dataTable({
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
            { "title": "机柜（万/月）", "class": "center" },
            { "title": "带宽（万/月）", "class": "center" },
            { "title": "增值业务（万/月）", "class": "center" },
            { "title": "免费客户支出", "class": "center" },
            { "title": "收入总计（万/月）", "class": "center" }
        ],
        "data": [
            ["1" , roomLink("金石") , "石家庄", "12.1", "31.3","6.3","1.3","48.4"],
            ["2" , "鹿泉" , "石家庄", "18.4", "35.2","36.1","8.3","146.4"],
            ["3" , "二枢纽" , "石家庄", "16.2", "15.7","3.5","3.2","32.2"],
            ["4" , "A机房", "保定", "6.8", "11.9","12.5","1.2","30"],
            ["5" , "B机房", "保定", "3.2", "8.4","0.5","0.2","11.9"],
            ["6" , "C机房", "保定", "4.3", "5.9","1.6","1.0","10.8"],
            ["7" , "A机房", "唐山", "12.1", "24.2","6.3","1.3","48.4"],
            ["8" , "B机房", "唐山", "21.1", "31.3","15.8","11.3","66.9"],
            ["9" , "C机房", "唐山", "12.1", "31.3","6.3","1.3","48.4"],
            ["10", "A机房", "邯郸", "12.1", "31.3","6.3","1.3","48.4"],
            ["11", "B机房", "邯郸", "12.1", "31.3","6.3","1.3","48.4"],
            ["12", "C机房", "邯郸", "12.1", "31.3","6.3","1.3","48.4"],
            ["13", "A机房", "张家口", "12.1", "31.3","6.3","1.3","48.4"],
            ["15", "B机房", "张家口", "12.1", "31.3","6.3","1.3","48.4"],
            ["16", "C机房", "张家口", "12.1", "31.3","6.3","1.3","48.4"],
            ["17", "A机房", "承德", "12.1", "31.3","6.3","1.3","48.4"],
            ["18", "B机房", "承德", "12.1", "31.3","6.3","1.3","48.4"],
            ["19", "C机房", "承德", "12.1", "31.3","6.3","1.3","48.4"],
            ["20", "D机房", "承德", "12.1", "31.3","6.3","1.3","48.4"],
            ["21", "A机房", "沧州", "12.1", "31.3","6.3","1.3","48.4"],
            ["22", "B机房", "沧州", "12.1", "31.3","6.3","1.3","48.4"],
            ["23", "C机房", "沧州", "12.1", "31.3","6.3","1.3","48.4"],
            ["24", "D机房", "沧州", "12.1", "31.3","6.3","1.3","48.4"],
            ["25", "E机房", "沧州", "12.1", "31.3","6.3","1.3","48.4"]
        ]
    });

    // 收入评估

    var incomeChartDom = document.getElementById('income-chart-pane');
    var incomeChart = echarts.init(incomeChartDom);
    var incomeOption = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:['机柜租用', '带宽租用','DDOS','其他增值业务']
        },
        calculable : true,
        xAxis : [
            {
                type : 'value',
                axisLabel:{formatter:'{value} 万元'}
            }
        ],
        yAxis : [
            {
                type : 'category',
                data : ['金石','鹿泉','二枢纽','保定A','保定B','唐山A','唐山B']
            }
        ],
        series : [
            {
                name:'机柜租用',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[12.1, 18.4, 16.2, 6.8, 3.2, 12.1, 21.1]
            },
            {
                name:'带宽租用',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[31.3, 35.2, 15.7, 11.9, 8.4, 24.2, 31.3]
            },
            {
                name:'DDOS',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[3.3, 16.1, 2.5, 8.5, 2.5, 3.3, 9.8]
            },
            {
                name:'其他增值业务',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[5.3, 18.1, 4.5, 4.5, 3.6, 5.2, 7.8]
            }
        ]
    };

    incomeChart.setOption(incomeOption);


    // 利用率统计
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
            { "title": "机房名称", "class": "center" },
            { "title": "城市", "class": "center" },
            { "title": "机柜利用率（%）", "class": "center" },
            { "title": "带宽利用率（%）", "class": "center" },
            { "title": "IP利用率（%）", "class": "center" },
            { "title": "总资产利用率（%）", "class": "center" }
        ],
        "data": [
            ["1" , roomLink("金石"), "石家庄", "42.1", "31.3","56.3","68.6"],
            ["2" , "鹿泉" , "石家庄", "63.4", "75.2","36.1","35.3"],
            ["3" , "二枢纽" , "石家庄", "36.2", "35.7","1.5","28.5"],
            ["4" , "A机房", "保定", "26.8", "31.9","32.5","49.6"],
            ["5" , "B机房", "保定", "33.2", "48.4","3.5","67.3"],
            ["6" , "C机房", "保定", "34.3", "36.9","31.6","56.7"],
            ["7" , "A机房", "唐山", "32.1", "31.3","53.3","58.5"],
            ["8" , "B机房", "唐山", "21.1", "41.3","35.8","34.9"],
            ["9" , "C机房", "唐山", "12.1", "31.3","6.3","18.6"],
            ["10", "A机房", "邯郸", "12.1", "31.3","6.3","18.6"],
            ["11", "B机房", "邯郸", "12.1", "31.3","6.3","18.6"],
            ["12", "C机房", "邯郸", "12.1", "31.3","6.3","18.6"],
            ["13", "A机房", "张家口", "12.1", "31.3","6.3","18.6"],
            ["15", "B机房", "张家口", "12.1", "31.3","6.3","18.6"],
            ["16", "C机房", "张家口", "12.1", "31.3","6.3","18.6"],
            ["17", "A机房", "承德", "12.1", "31.3","6.3","18.6"],
            ["18", "B机房", "承德", "12.1", "31.3","6.3","18.6"],
            ["19", "C机房", "承德", "12.1", "31.3","6.3","18.6"],
            ["20", "D机房", "承德", "12.1", "31.3","6.3","18.6"],
            ["21", "A机房", "沧州", "12.1", "31.3","6.3","18.6"],
            ["22", "B机房", "沧州", "12.1", "31.3","6.3","18.6"],
            ["23", "C机房", "沧州", "12.1", "31.3","6.3","18.6"],
            ["24", "D机房", "沧州", "12.1", "31.3","6.3","18.6"],
            ["25", "E机房", "沧州", "12.1", "31.3","6.3","28.6"]
        ]
    });

    // 利用率分析

    var investChartDom = document.getElementById('invest-chart-pane');
    var investChart = echarts.init(investChartDom);
    var investOption = {
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:[
                '机柜总量占比', '带宽总量占比', 'IP地址总量占比','',
                '机柜租用占比', '带宽租用占比', 'IP地址租用占比'
            ]
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['金石','鹿泉','二枢纽','唐山A','保定A']
            },
            {
                type : 'category',
                axisLine: {show:false},
                axisTick: {show:false},
                axisLabel: {show:false},
                splitArea: {show:false},
                splitLine: {show:false},
                data : ['金石','鹿泉','二枢纽','唐山A','保定A']
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel:{formatter:'{value} %'}
            }
        ],
        series : [
            {
                name:'机柜租用占比',
                type:'bar',
                itemStyle: {normal: {color:'rgba(193,35,43,1)', label:{show:true}}},
                data:[2.5, 5.3, 4.3, 3.5, 2.4]
            },
            {
                name:'带宽租用占比',
                type:'bar',
                itemStyle: {normal: {color:'rgba(181,195,52,1)', label:{show:true,textStyle:{color:'#27727B'}}}},
                data:[3.6, 12.3, 8.3, 4.5, 3.4]
            },
            {
                name:'IP地址租用占比',
                type:'bar',
                itemStyle: {normal: {color:'rgba(252,206,16,1)', label:{show:true,textStyle:{color:'#E87C25'}}}},
                data:[2.9, 4.3, 5.3, 3.5, 2.4]
            },
            {
                name:'机柜总量占比',
                type:'bar',
                xAxisIndex:1,
                itemStyle: {normal: {color:'rgba(193,35,43,0.5)', label:{show:true}}},
                data:[5.1, 12.3, 9.5, 5.5, 6.2]
            },
            {
                name:'带宽总量占比',
                type:'bar',
                xAxisIndex:1,
                itemStyle: {normal: {color:'rgba(181,195,52,0.5)', label:{show:true}}},
                data:[7.6, 22.3, 18.3, 12.5, 7.4]
            },
            {
                name:'IP地址总量占比',
                type:'bar',
                xAxisIndex:1,
                itemStyle: {normal: {color:'rgba(252,206,16,0.5)', label:{show:true}}},
                data:[4.5, 9.3, 12.3, 5.5, 6.4]
            }
        ]
    };

    investChart.setOption(investOption);

    // 利润率统计

    var $contributeTable = $("#contribute-table");

    $contributeTable.dataTable({
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
            { "title": "机柜收益（%）", "class": "center" },
            { "title": "带宽收益（%）", "class": "center" },
            { "title": "增值业务（%）", "class": "center" },
            { "title": "利润（万/月）", "class": "center" },
            { "title": "客户评价", "class": "center", "orderable": false }
        ],
        "data": [
            ["1" , roomLink("金石"), "石家庄", "42.1", "31.3","56.3","33.5", returnStar(5)],
            ["2" , "鹿泉", "石家庄", "63.4", "75.2","36.1","61.8", returnStar(4)],
            ["3" , "二枢纽", "石家庄", "36.2", "35.7","1.5","69.8", returnStar(3)],
            ["4" , "A机房", "保定", "26.8", "31.9","32.5","28.6", returnStar(2)],
            ["5" , "B机房", "保定", "33.2", "48.4","3.5","36.3", returnStar(3)],
            ["6" , "C机房", "保定", "34.3", "36.9","31.6","26.7", returnStar(3)],
            ["7" , "A机房", "唐山", "32.1", "31.3","53.3","51.4", returnStar(4)],
            ["8" , "B机房", "唐山", "21.1", "41.3","35.8","61.2", returnStar(5)],
            ["9" , "C机房", "唐山", "12.1", "31.3","6.3","18.6", returnStar(3)],
            ["10", "A机房", "邯郸", "12.1", "31.3","6.3","18.6" ,returnStar(4)],
            ["11", "B机房", "邯郸", "12.1", "31.3","6.3","18.6",returnStar(5)],
            ["12", "C机房", "邯郸", "12.1", "31.3","6.3","18.6",returnStar(3)],
            ["13", "A机房", "张家口", "12.1", "31.3","6.3","18.6" ,returnStar(2)],
            ["15", "B机房", "张家口", "12.1", "31.3","6.3","18.6" ,returnStar(3)],
            ["16", "C机房", "张家口", "12.1", "31.3","6.3","18.6" ,returnStar(3)],
            ["17", "A机房", "承德", "12.1", "31.3","6.3","18.6" ,returnStar(4)],
            ["18", "B机房", "承德", "12.1", "31.3","6.3","18.6",returnStar(5)],
            ["19", "C机房", "承德", "12.1", "31.3","6.3","18.6",returnStar(3)],
            ["20", "D机房", "承德", "12.1", "31.3","6.3","18.6",returnStar(3)],
            ["21", "A机房", "沧州", "12.1", "31.3","6.3","18.6",returnStar(2)],
            ["22", "B机房", "沧州", "12.1", "31.3","6.3","18.6",returnStar(3)],
            ["23", "C机房", "沧州", "12.1", "31.3","6.3","18.6",returnStar(3)],
            ["24", "D机房", "沧州", "12.1", "31.3","6.3","18.6" ,returnStar(4)],
            ["25", "E机房", "沧州", "12.1", "31.3","6.3","28.6", returnStar(5)]
        ]
    });

    var $contributeChartDom = document.getElementById('contribute-chart-pane');
    var contributeChart = echarts.init($contributeChartDom);

    var contributeOption = {
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b} : {c} 万 ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['石家庄','保定','唐山','其他','金石','鹿泉','二枢纽','保定A','保定B','唐山A','唐山B','其他IDC']
        },
        calculable : false,
        series : [
            {
                name:'各地市利润统计',
                type:'pie',
                selectedMode: 'single',
                radius : [0, 70],
                itemStyle : {
                    normal : {
                        label : {
                            position : 'inner'
                        },
                        labelLine : {
                            show : false
                        }
                    }
                },
                data:[
                    {value:165.1, name: '石家庄',selected:true},
                    {value:64.9,  name: '保定'},
                    {value:112.6, name: '唐山'},
                    {value:323.5, name: '其他'}
                ]
            },
            {
                name:'各机房利润统计',
                type:'pie',
                radius : [120, 160],
                data:[
                    {value:33.5, name:'金石'},
                    {value:61.8, name:'鹿泉'},
                    {value:69.8,  name:'二枢纽'},
                    {value:28.6,  name:'保定A'},
                    {value:36.3,  name:'保定B'},
                    {value:51.4,  name:'唐山A'},
                    {value:61.2,  name:'唐山B'},
                    {value:323.5, name:'其他IDC'}
                ]
            }
        ]
    };

    contributeChart.setOption(contributeOption);
});