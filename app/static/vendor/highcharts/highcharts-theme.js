Highcharts.theme = {
    global: {
        useUTC: false
    },

    lang : {
        months: ['1月', '2月', '3月', '4月', '5月', '6月',  '7月', '8月', '9月', '10月', '11月', '12月'],
        shortMonths: ['1月', '2月', '3月', '4月', '5月', '6月',  '7月', '8月', '9月', '10月', '11月', '12月'],
        weekdays: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },

    colors: ["#f45b5b", "#8085e9", "#8d4654", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
        "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],

    chart: {
        type: 'spline',
        style: {
            fontFamily: "Hiragino Sans GB, Microsoft YaHei, sans-serif"
        }
    },

    xAxis: {
        type: 'datetime'
    },

    tooltip: {
        borderWidth: 0,
        borderRadius: 10,

        formatter: function() {
            var format_str = '<b>'+ Highcharts.dateFormat('%Y年 %b %e日', this.x) +'</b>';
            format_str += '<br/>';
            format_str += '<span style="color:' + this.series.color + '">';
            format_str += this.series.name;
            format_str += ' : ';
            format_str += '</span>';
            format_str += transSpeed(this.y);
            return format_str;

            function transSpeed(value) {

                var speed_str = '';
                if (value < 1000) {
                    speed_str += value.toFixed(1);
                    speed_str += ' bps';
                    return speed_str;
                }

                if (value < Math.pow(1000,2)) {
                    speed_str += (value / 1000).toFixed(1);
                    speed_str += ' kbps';
                    return speed_str;
                }

                if (value < Math.pow(1000,3)) {
                    speed_str += (value / Math.pow(1000,2)).toFixed(1);
                    speed_str += ' Mbps';
                    return speed_str;
                }

                speed_str += (value / Math.pow(1000,3)).toFixed(1);
                speed_str += ' Gbps';
                return speed_str;
            }
        }
    },

    yAxis : {
        min: 0
    },

    plotOptions: {
        series: {
            shadow: true
        }
    },

    exporting: {
        enabled: false
    }
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);