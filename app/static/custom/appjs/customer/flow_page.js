$(function() {
    
    "use strict";

    // 实时流量信息
    var data = [], totalPoints = 100;
    function getRandomData() {

        if (data.length > 0)
            data = data.slice(1);

        // Do a random walk
        while (data.length < totalPoints) {

            var prev = data.length > 0 ? data[data.length - 1] : 50,
                    y = prev + Math.random() * 10 - 5;

            if (y < 30) {
                y = 30;
            } else if (y > 60) {
                y = 60;
            }

            data.push(y);
        }

        // Zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < data.length; ++i) {
            res.push([i, data[i]/3]);
        }

        return res;
    }

    var interactive_plot = $.plot("#interactive", [getRandomData()], {
        grid: {
            borderColor: "#f3f3f3",
            borderWidth: 1,
            tickColor: "#f3f3f3"
        },
        series: {
            shadowSize: 0, // Drawing is faster without shadows
            color: "#3c8dbc"
        },
        lines: {
            fill: false, //Converts the line chart to area chart
            color: "#3c8dbc"
        },
        yaxis: {
            min: 0,
            max: 40,
            show: true
        },
        xaxis: {
            show: false
        }
    });

    var updateInterval = 1500; //Fetch data ever x milliseconds
    var realtime = "on"; //If == to on then fetch data every x seconds. else stop fetching
    function update() {

        interactive_plot.setData([getRandomData()]);

        // Since the axes don't change, we don't need to call plot.setupGrid()
        interactive_plot.draw();
        if (realtime === "on")
            setTimeout(update, updateInterval);
    }

    //INITIALIZE REALTIME DATA FETCHING
    if (realtime === "on") {
        update();
    }
    //REALTIME TOGGLE
    var $realtime = $("#realtime");
    $realtime.find('.btn').click(function() {
        if ($(this).data("toggle") === "on") {
            realtime = "on";
        }
        else {
            realtime = "off";
        }
        update();
    });


    // 带宽资源统计表
    var bar_chart = new Morris.Bar({
        element: 'bar-chart',
        resize: true,
        data: [
            {y: '10月', a: 0.13, b: 2.8},
            {y: '11月', a: 0.15, b: 2.4},
            {y: '12月', a: 0.10, b: 2.0},
            {y: '01月', a: 0.12, b: 2.3},
            {y: '02月', a: 0.16, b: 2.5},
            {y: '03月', a: 0.11, b: 2.1},
            {y: '04月', a: 0.17, b: 2.6}
        ],
        barColors: ['#00a65a', '#f56954'],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['下行流量', '上行流量'],
        hideHover: 'auto',
        yLabelFormat: function (x) { return x + " GB"}
    });


    // 端口流量
    // 实时流量信息
    var myvalues = [], myPoints = 24;

    function getRandomValue(range) {

        myvalues = [];

        while (myvalues.length < myPoints) {
            var temp = Math.random() * random_range[range];
            myvalues.push(temp.toFixed(2));
        }

        return myvalues;
    }

    var res_value_up = [];
    var res_value_down = [];
    var sparkline_id_up;
    var sparkline_id_down;

    var random_range = [0,20,20,20,20];
    
    for (var i = 1; i <= 4; i++ ) {
        sparkline_id_up = '#sparkline-' + i;
        // console.log(sparkline_id_up);
        res_value_up = getRandomValue(i);

        var j = ++i;
        sparkline_id_down = '#sparkline-' + j;
        // console.log(sparkline_id_down);
        res_value_down = getRandomValue(j);

        $(sparkline_id_up).sparkline(res_value_up, {
            type: 'bar',
            tooltipFormat: '{{offset}} 点: {{value}} GB',
            barColor: '#00a65a',
            negBarColor: "#f56954",
            height: '30px'
        });

        $(sparkline_id_down).sparkline(res_value_down, {
            type: 'bar',
            tooltipFormat: '{{offset}} 点: {{value}} GB',
            barColor: '#f56954',
            negBarColor: "#00a65a",
            height: '30px'
        });

    }

    // 端口表格
    $('#port-table').dataTable({
        "bPaginate": true,
        "bLengthChange": false,
        "iDisplayLength": 5,
        "bFilter": false,
        "bSort": false,
        "bInfo": false,
        "bAutoWidth": true
    });


});