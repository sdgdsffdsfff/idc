/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

$(function() {
    "use strict";

    /* Morris.js Charts */

    // 带宽资源统计表
    var bar = new Morris.Bar({
        element: 'bar-chart',
        resize: true,
        data: [
            {y: '10月', a: 1.3, b: 18},
            {y: '11月', a: 1.5, b: 14},
            {y: '12月', a: 1.0, b: 10},
            {y: '01月', a: 1.2, b: 13},
            {y: '02月', a: 1.6, b: 15},
            {y: '03月', a: 1.1, b: 11},
            {y: '04月', a: 1.7, b: 16}
        ],
        barColors: ['#00a65a', '#f56954'],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['流入/GB: ', '流出/GB: '],
        hideHover: 'auto'
    });

    // 收入报表
    var area = new Morris.Area({
        element: 'revenue-chart',
        resize: true,
        data: [
            {y: '2012 Q1', bandwitdh: 2666,  cabinet: 2666, appreciation: 1000},
            {y: '2012 Q2', bandwitdh: 2778,  cabinet: 2294, appreciation: 1000},
            {y: '2012 Q3', bandwitdh: 4912,  cabinet: 1969, appreciation: 1000},
            {y: '2012 Q4', bandwitdh: 3767,  cabinet: 3597, appreciation: 1000},
            {y: '2013 Q1', bandwitdh: 6810,  cabinet: 1914, appreciation: 1000},
            {y: '2013 Q2', bandwitdh: 5670,  cabinet: 4293, appreciation: 1000},
            {y: '2013 Q3', bandwitdh: 4820,  cabinet: 3795, appreciation: 1000},
            {y: '2013 Q4', bandwitdh: 6073,  cabinet: 3967, appreciation: 1000},
            {y: '2014 Q1', bandwitdh: 7687,  cabinet: 4460, appreciation: 1000},
            {y: '2014 Q2', bandwitdh: 8432,  cabinet: 3713, appreciation: 1000}
        ], 
        xkey: 'y',
        ykeys: ['bandwitdh', 'cabinet', 'appreciation'],
        labels: ['带宽收入', '机柜收入','增值业务'],
        lineColors: ['#a0d0e0', '#3c8dbc', '#3c8dbc'],
        hideHover: 'auto'
    });

    // 客户分布
    var donut = new Morris.Donut({
        element: 'sales-chart',
        resize: true,
        colors: ["#3c8dbc", "#f56954", "#00a65a", "#00a65a"],
        data: [
            {label: "互联网", value: 72},
            {label: "政府", value: 5},
            {label: "中小企业", value: 8},
            {label: "金融", value: 12}
        ],
        hideHover: 'auto'
    });

    //Make the dashboard widgets sortable Using jquery UI
    $(".connectedSortable").sortable({
        placeholder: "sort-highlight",
        connectWith: ".connectedSortable",
        handle: ".box-header, .nav-tabs",
        forcePlaceholderSize: true,
        zIndex: 999999
    }).disableSelection();
    $(".box-header, .nav-tabs").css("cursor","move");
    //jQuery UI sortable for the todo list
    $(".todo-list").sortable({
        placeholder: "sort-highlight",
        handle: ".handle",
        forcePlaceholderSize: true,
        zIndex: 999999
    }).disableSelection();;

    //bootstrap WYSIHTML5 - text editor
    $(".textarea").wysihtml5();

    $('.daterange').daterangepicker(
            {
                ranges: {
                    'Today': [moment(), moment()],
                    'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
                    'Last 7 Days': [moment().subtract('days', 6), moment()],
                    'Last 30 Days': [moment().subtract('days', 29), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                    'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
                },
                startDate: moment().subtract('days', 29),
                endDate: moment()
            },
    function(start, end) {
        alert("You chose: " + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    });

    /* jQueryKnob */
    $(".knob").knob();

    //jvectormap data
    var visitorsData = {
        "US": 398, //USA
        "SA": 400, //Saudi Arabia
        "CA": 1000, //Canada
        "DE": 500, //Germany
        "FR": 760, //France
        "CN": 300, //China
        "AU": 700, //Australia
        "BR": 600, //Brazil
        "IN": 800, //India
        "GB": 320, //Great Britain
        "RU": 3000 //Russia
    };
    //World map by jvectormap
    $('#world-map').vectorMap({
        map: 'world_mill_en',
        backgroundColor: "#fff",
        regionStyle: {
            initial: {
                fill: '#e4e4e4',
                "fill-opacity": 1,
                stroke: 'none',
                "stroke-width": 0,
                "stroke-opacity": 1
            }
        },
        series: {
            regions: [{
                    values: visitorsData,
                    scale: ["#3c8dbc", "#2D79A6"], //['#3E5E6B', '#A6BAC2'],
                    normalizeFunction: 'polynomial'
                }]
        },
        onRegionLabelShow: function(e, el, code) {
            if (typeof visitorsData[code] != "undefined")
                el.html(el.html() + ': ' + visitorsData[code] + ' new visitors');
        }
    });

    //Sparkline charts
    var myvalues = [15, 19, 20, -22, -33, 27, 31, 27, 19, 30, 21];
    $('#sparkline-1').sparkline(myvalues, {
        type: 'bar',
        barColor: '#00a65a',
        negBarColor: "#f56954",
        height: '20px'
    });
    myvalues = [15, 19, 20, 22, -2, -10, -7, 27, 19, 30, 21];
    $('#sparkline-2').sparkline(myvalues, {
        type: 'bar',
        barColor: '#00a65a',
        negBarColor: "#f56954",
        height: '20px'
    });
    myvalues = [15, -19, -20, 22, 33, 27, 31, 27, 19, 30, 21];
    $('#sparkline-3').sparkline(myvalues, {
        type: 'bar',
        barColor: '#00a65a',
        negBarColor: "#f56954",
        height: '20px'
    });
    myvalues = [15, 19, 20, 22, 33, -27, -31, 27, 19, 30, 21];
    $('#sparkline-4').sparkline(myvalues, {
        type: 'bar',
        barColor: '#00a65a',
        negBarColor: "#f56954",
        height: '20px'
    });
    myvalues = [15, 19, 20, 22, 33, 27, 31, -27, -19, 30, 21];
    $('#sparkline-5').sparkline(myvalues, {
        type: 'bar',
        barColor: '#00a65a',
        negBarColor: "#f56954",
        height: '20px'
    });
    myvalues = [15, 19, -20, 22, -13, 27, 31, 27, 19, 30, 21];
    $('#sparkline-6').sparkline(myvalues, {
        type: 'bar',
        barColor: '#00a65a',
        negBarColor: "#f56954",
        height: '20px'
    });

    //Date for the calendar events (dummy data)
    var date = new Date();
    var d = date.getDate(),
            m = date.getMonth(),
            y = date.getFullYear();

    //Calendar
    $('#calendar').fullCalendar({
        editable: true, //Enable drag and drop
        events: [
            {
                title: 'All Day Event',
                start: new Date(y, m, 1),
                backgroundColor: "#3c8dbc", //light-blue 
                borderColor: "#3c8dbc" //light-blue
            },
            {
                title: 'Long Event',
                start: new Date(y, m, d - 5),
                end: new Date(y, m, d - 2),
                backgroundColor: "#f39c12", //yellow
                borderColor: "#f39c12" //yellow
            },
            {
                title: 'Meeting',
                start: new Date(y, m, d, 10, 30),
                allDay: false,
                backgroundColor: "#0073b7", //Blue
                borderColor: "#0073b7" //Blue
            },
            {
                title: 'Lunch',
                start: new Date(y, m, d, 12, 0),
                end: new Date(y, m, d, 14, 0),
                allDay: false,
                backgroundColor: "#00c0ef", //Info (aqua)
                borderColor: "#00c0ef" //Info (aqua)
            },
            {
                title: 'Birthday Party',
                start: new Date(y, m, d + 1, 19, 0),
                end: new Date(y, m, d + 1, 22, 30),
                allDay: false,
                backgroundColor: "#00a65a", //Success (green)
                borderColor: "#00a65a" //Success (green)
            },
            {
                title: 'Click for Google',
                start: new Date(y, m, 28),
                end: new Date(y, m, 29),
                url: 'http://google.com/',
                backgroundColor: "#f56954", //red
                borderColor: "#f56954" //red
            }
        ],
        buttonText: {//This is to add icons to the visible buttons
            prev: "<span class='fa fa-caret-left'></span>",
            next: "<span class='fa fa-caret-right'></span>",
            today: 'today',
            month: 'month',
            week: 'week',
            day: 'day'
        },
        header: {
            left: 'title',
            center: '',
            right: 'prev,next'
        }
    });

    //SLIMSCROLL FOR CHAT WIDGET
    $('#chat-box').slimScroll({
        height: '250px'
    });

    
    //Fix for charts under tabs
    $('.box ul.nav a').on('shown.bs.tab', function(e) {
        area.redraw();
        donut.redraw();
    });
    
    /* The todo list plugin */
    $(".todo-list").todolist({
        onCheck: function(ele) {
            //console.log("The element has been checked")
        },
        onUncheck: function(ele) {
            //console.log("The element has been unchecked")
        }
    });

});