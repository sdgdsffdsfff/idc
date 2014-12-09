// Get Ajax data from post value
function ajaxGetData(url, callbackFunc, failedFunc) {
    var request = $.ajax({
        type: 'GET',
        url: url,
        dataType: "json",
        crossDomain: true,
        xhrFields: {
            withCredentials: false
        },
        beforeSend: ajaxStartRequest,
        success: callbackFunc,
        error: failedFunc,
        timeout: 5000
    });
}

// Process ajax failed callback
function ajaxFailedCallback() {
    $.notifyBar({
        html: "请求数据: " + this.url + " 失败!",
        cssClass: "error",
        delay: 3000
    });
}

function ajaxStartRequest(request) {
    $.notifyBar({
        html: "正在更新数据",
        delay: 1000,
        position: "bottom"
    });
}

// parse month data from ajax request
function parseMonthData(raw_data) {

    var ifInData  = [],
        ifOutData = [];

    for(var i = 0; i < raw_data.length; i++) {
        var date_time = raw_data[i]['date_type'];
        var date_time_str = date_time.substr(4,2) + '/' + date_time.substr(6,2) + '/' + date_time.substr(0,4);
        var ifIn = raw_data[i]['ifIn_95th'];
        var ifOut = raw_data[i]['ifOut_95th'];
        var time_stamp = new Date(date_time_str).getTime();

        ifInData.push([time_stamp, ifIn]);
        ifOutData.push([time_stamp, ifOut]);
    }

    return {
        'ifInData' : ifInData,
        'ifOutData' : ifOutData
    }
}

// Generate area chart
function generateChart($chartObj) {

    var allday_data = $chartObj.data('allday_data');

    if(allday_data == undefined || allday_data == "") {
        $.notifyBar({
            cssClass: "error",
            html: "图形数据生成错误",
            delay: 2000
        });
        return;
    }

    var ifData = parseMonthData(allday_data);

    var devName = $chartObj.attr('data-devName');
    var portName = $chartObj.attr('data-portName');
    var monthValue = $chartObj.attr('data-monthValue');
    var chartTitle = monthValue + ' - ' + portName;


    if(ifData != undefined) {
        var chartData = [];
        chartData.push({name: portName + '入', data: ifData['ifInData']});
        chartData.push({name: portName + '出', data: ifData['ifOutData']});

        $chartObj.highcharts({
            title : { text : chartTitle },
            series: chartData
        });
    }
}


function ajaxShowChart(response) {

    if(response['error'] == 'true') {
        $.notifyBar({
            cssClass: "error",
            html: "获取端口数据错误",
            delay: 2000
        });
        return;
    }

    var $chartObj = $('#flow-chart-pane');

    var month_data = response['data']['month'];
    var allday_data = response['data']['allday'];
    $chartObj.data('month_data', month_data);
    $chartObj.data('allday_data', allday_data);

    generateChart($chartObj);

}

// genearte date input table
function createFlowChart($chartObj) {
    var devName = $chartObj.attr('data-devName');
    var portName = $chartObj.attr('data-portName');
    var monthValue = $chartObj.attr('data-monthValue');

    if(devName == "" || devName == undefined) {
        $.notifyBar({
            cssClass: "error",
            html: "获取网页数据错误",
            delay: 2000
        });
        return;
    }

    var portChartUrl = 'http://idcapi.uunus.com/billing/?where={'
        + '"dev_name":"' + devName + '",'
        + '"port_name":"' + portName + '",'
        + '"month":"' + monthValue + '",'
        + '"datetype":"' + 'all' + '",'
        + '"billing_method":"' + '95th' + '"}';

    ajaxGetData(portChartUrl, ajaxShowChart, ajaxFailedCallback);
}

function createIncomeChart() {
    var incomeChartDom = document.getElementById('income-chart-pane');
    var incomeChart = echarts.init(incomeChartDom);
    var incomeOption = {
         title :{
            text : '每月收益差距',
            subtext : '2014财年'
        },

        tooltip : {
            trigger: 'axis',
            formatter: function (v){
                return v[0][1] + ' : '
                       + (v[0][2] - v[1][2] < 0 ? '+' : '-')
                       + v[3][2] + ' 万元<br/>'
                       + v[0][0] + ' : ' + v[0][2] + ' 万元<br/>'
                       + v[1][0] + ' : ' + v[1][2] + ' 万元<br/>'
            }
        },

        legend: {
            data:['计算费用', '实际费用'],
            selectedMode:false
        },

        xAxis : [
            {
                type : 'category',
                data : ['1月','2月','3月','4月','5月','6月','7月', '8月']
            }
        ],

        yAxis : [
            {
                type : 'value',
                min : 0,
                max : 2
            }
        ],

        series : [
            {
                name:'计算费用',
                type:'line',
                data: [1.3, 1.6, 1.2, 0.8, 1.1, 1.4, 0.9, 1.5]
            },

            {
                name:'实际费用',
                type:'line',
                symbol:'none',
                itemStyle:{
                    normal:{
                      lineStyle: {
                        width:1,
                        type:'dashed'
                      }
                    }
                },
                data:[1.1, 1.5, 0.2, 0, 0, 1.3, 0.7, 1.2]
            },

            {
                name:'条状基数',
                type:'bar',
                stack: '1',
                barWidth: 6,
                itemStyle:{
                    normal:{
                        color:'rgba(0,0,0,0)'
                    },
                    emphasis:{
                        color:'rgba(0,0,0,0)'
                    }
                },
                data:[1.1, 1.5, 0.2, 0, 0, 1.3, 0.7, 1.2]
            },

            {
                name:'条状变化',
                type:'bar',
                stack: '1',
                data:[
                  0.2, 0.1,
                  {value : 1, itemStyle:{ normal:{color:'red'}}},
                  {value : 0.8, itemStyle:{ normal:{color:'red'}}},
                  {value : 1.1, itemStyle:{ normal:{color:'red'}}},
                  0.1, 0.2, 0.3
                ]
            }
        ]
    };

    incomeChart.setOption(incomeOption);

}


$(function() {
    "use strict";

    var $flowChart = $('#flow-chart-pane');
    createFlowChart($flowChart);

    var $pane = $('.box ul.nav a');

    $pane.on('shown.bs.tab', function(e) {
        createIncomeChart();
    });

});