<template>
    <div id="chart-container" style="height: 60vh; width: 100%"></div>
</template>

<script setup lang="ts">
    import * as echarts from 'echarts';
    import {onMounted} from 'vue';
    function init() {
        var chartDom = document.getElementById('chart-container') as HTMLDivElement;
        var myChart = echarts.init(chartDom);
        var option;
        option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [150, 430, 224, 118, 135, 147, 360],
                    type: 'line'
                }
            ]
        };

        option && myChart.setOption(option);
        // window.onresize = function () {
        //   //自适应大小, 不用的话不会自适应大小。
        //   myChart.resize();
        // };
    }

    onMounted(() => {
        init();
    });
</script>


