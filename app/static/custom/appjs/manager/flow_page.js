function portStatus(value) {
    if(value == 0) {
        return "<i class='fa fa-check-square status-ok'></i>";
    }
    else {
        return "<i class='fa fa-minus-square status-error'></i>";
    }
}

function portDetail(port, device) {
    var requestString = "?port=\"" + port + "\"&device=\"" + device + "\"" + "\"&month=\"201409\"";
    return "<a href='/manager/port/" + requestString + "'> " + port + "</a>";
}

function contact(value) {
    return "<a href='/static/cdn/docs/contract.pdf' " +
        "target=\"_blank\">" + value +"</a>";
}

$(function() {
    "use strict";

    // 业务收入统计
    var $accountTable = $("#account-table");

    $accountTable.dataTable({
        "info" : false,
        "paging": true,
        "filter": false,
        "lengthChange": false,
        "pageLength":8,
        "destroy": true,
        "order": [[ 0, "asc" ]],
        "columns": [
            { "title": "端口号", "class": "center" },
            { "title": "端口类型", "class": "center" },
            { "title": "所属设备", "class": "center" },
            { "title": "所属客户", "class": "center" },
            { "title": "结算方式", "class": "center" },
            { "title": "计算费用（万）", "class": "center" },
            { "title": "实际费用（万）", "class": "center"},
            { "title": "费用状态", "class": "center"}
        ],
        "data": [
            [portDetail("GigabitEthernet2/0/0","ne40e-232"), "1 GB","ne40e-232", "运营商", "无", "5.2", "0", portStatus(0)],
            [portDetail("GigabitEthernet2/0/2","ne40e-232"), "1 GB","ne40e-232", "运营商", "无", "2.3", "0", portStatus(0)],
            [portDetail("GigabitEthernet2/0/3","ne40e-232"), "1 GB","ne40e-232", "运营商", "无", "3.6", "0", portStatus(0)],
            [portDetail("GigabitEthernet9/0/2","ne40e-232"), "1 GB","ne40e-232", contact("智慧星"), "95th", "3.2", "3.1", portStatus(0)],
            [portDetail("GigabitEthernet9/0/3","ne40e-232"), "1 GB","ne40e-232", "无","无", "3.2", "0", portStatus(1)],
            [portDetail("Ethernet2/0/5","s9312-253"), "100 M","s9312-253", contact("智慧星"), "0.6 万/月", "0.6", "0.6", portStatus(0)],
            [portDetail("Ethernet2/0/11","s9312-253"), "100 M","s9312-253", contact("远中和"), "0.4 万/月", "0.4", "0.4", portStatus(0)]
        ]
    });


});