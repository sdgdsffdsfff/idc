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

            if (y < 0) {
                y = 0;
            } else if (y > 100) {
                y = 100;
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

    var updateInterval = 500; //Fetch data ever x milliseconds
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
    $("#realtime .btn").click(function() {
        if ($(this).data("toggle") === "on") {
            realtime = "on";
        }
        else {
            realtime = "off";
        }
        update();
    });

    // 端口表格
    $('#port-table').dataTable({
        "bPaginate": true,
        "bLengthChange": false,
        "bFilter": false,
        "bSort": true,
        "bInfo": true,
        "bAutoWidth": true
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

    var random_range = [0,20,20,2,2,10,10,5,5,10,10,10,10,1,1,1,1,1,1,1,1];
    
    for (var i = 1; i <= 20; i++ ) {
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

    };

});