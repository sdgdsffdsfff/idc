$(function() {
    
    "use strict";

    // 端口表格
    $('#port-table').dataTable({
        "bPaginate": true,
        "bLengthChange": false,
        "bFilter": false,
        "bSort": false,
        "bInfo": true,
        "bAutoWidth": true
    });

    // 端口流量
    // 实时流量信息
    var myvalues = [], myPoints = 24;

    function getRandomValue() {

        myvalues = [];

        if (myvalues.length > 0)
            myvalues = myvalues.slice(1);

        // Do a random walk
        while (myvalues.length < myPoints) {

            var prev = myvalues.length > 0 ? myvalues[myvalues.length - 1] : 50,
                    y = prev + Math.random() * 10 - 5;

            if (y < 0) {
                y = 0;
            } else if (y > 100) {
                y = 100;
            }

            y = Math.round(y);

            myvalues.push(y);
        }

        return myvalues;
    }

    var res_value = [];
    var sparkline_id_up;
    var sparkline_id_down;
    
    for (var i = 1; i <= 20; i++ ) {
        sparkline_id_up = '#sparkline-' + i;
        // console.log(sparkline_id_up);

        var j = ++i;
        sparkline_id_down = '#sparkline-' + j;
        // console.log(sparkline_id_down);

        res_value = getRandomValue();

        $(sparkline_id_up).sparkline(res_value, {
            type: 'bar',
            tooltipFormat: '{{offset}} 点: {{value}} GB',
            barColor: '#00a65a',
            negBarColor: "#f56954",
            height: '35px'
        });

        res_value = getRandomValue();
        $(sparkline_id_down).sparkline(res_value, {
            type: 'bar',
            tooltipFormat: '{{offset}} 点: {{value}} GB',
            barColor: '#f56954',
            negBarColor: "#00a65a",
            height: '35px'
        });

    };

});