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
function showFlowChart($chartObj) {
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


$(function() {
    "use strict";

    var $chartObj = $('#flow-chart-pane');
    showFlowChart($chartObj);
});