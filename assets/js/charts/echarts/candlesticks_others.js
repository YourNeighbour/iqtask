/* ------------------------------------------------------------------------------
 *
 *  # Echarts - candlestick and other charts
 *
 *  Candlestick and other chart configurations
 *
 *  Version: 1.0
 *  Latest update: August 1, 2015
 *
 * ---------------------------------------------------------------------------- */

 $(function () {

    // Set paths
    // ------------------------------

    require.config({
        paths: {
            echarts: 'assets/js/plugins/visualization/echarts'
        }
    });


    // Configuration
    // ------------------------------

    require(

        // Add necessary charts
        [
        'echarts',
        'echarts/theme/limitless',
        'echarts/chart/k',
        'echarts/chart/gauge',
        'echarts/chart/line'
        ],


        // Charts setup
        function (ec, limitless) {


            // Initialize charts
            // ------------------------------

            
            var stacked_lines = ec.init(document.getElementById('stacked_lines'), limitless);

            var gauge_basic = ec.init(document.getElementById('gauge_basic'), limitless);
            var gauge_mounth = ec.init(document.getElementById('gauge_mounth'), limitless);



            // Charts options
            // ------------------------------

            stacked_lines_options = {

                // Setup grid
                grid: {
                    x: 40,
                    x2: 20,
                    y: 35,
                    y2: 25
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis'
                },

                // Add legend
                legend: {
                    data: ['Incidents', 'Minimum', 'Average', 'Maximum']
                },

                // Enable drag recalculate
                calculable: true,

                // Hirozontal axis
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    data: [
                    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
                    ]
                }],

                // Vertical axis
                yAxis: [{
                    type: 'value'
                }],

                // Add series
                series: [
                {
                    name: 'Incidents',
                    type: 'line',
                    stack: 'Total',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: 'Minimum',
                    type: 'line',
                    stack: 'Total',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: 'Average',
                    type: 'line',
                    stack: 'Total',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: 'Maximum',
                    type: 'line',
                    stack: 'Total',
                    data: [320, 332, 301, 334, 390, 330, 320]
                }
                ]
            };

            //
            // Basic gauge
            //

            // Setup chart
            gauge_basic_options = {

                // Add title

                // Add tooltip
                tooltip: {
                    formatter: "{a} <br/>{b}: {c}%"
                },

                // Add series
                series: [
                {
                    type: 'gauge',
                    center: ['50%', '40%'],
                    detail: {formatter:'{value}%'},
                    data: [{value: 50, name: ''}]
                }
                ]
            };


            gauge_mounth_options = {

                // Add title

                // Add tooltip
                tooltip: {
                    formatter: "{a} <br/>{b}: {c}%"
                },

                // Add series
                series: [
                {
                    type: 'gauge',
                    center: ['50%', '40%'],
                    detail: {formatter:'{value}%'},
                    data: [{value: 90, name: ''}]
                }
                ]
            };

            // Add random data
            clearInterval(timeTicket);
            var timeTicket = setInterval(function () {
                gauge_basic_options.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
                gauge_basic.setOption(gauge_basic_options, true);
            }, 2000);

            // Add random data
            clearInterval(timeTicket);
            var timeTicket = setInterval(function () {
                gauge_mounth_options.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
                gauge_mounth.setOption(gauge_mounth_options, true);
            }, 2000);


            // Apply options
            // ------------------------------


            gauge_basic.setOption(gauge_basic_options);
            gauge_mounth.setOption(gauge_mounth_options);
            stacked_lines.setOption(stacked_lines_options);



            // Resize charts
            // ------------------------------

            window.onresize = function () {
                setTimeout(function (){
                    stacked_lines.resize();
                    gauge_basic.resize();
                    gauge_mounth.resize();
                }, 200);
            }
        }
        );
});
