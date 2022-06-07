<template>
    <div style="width: 60vw;margin: 35px auto">
        <calendar-heatmap
                :values="[{ date: '2018-10-22', count: 6 }]"
                :range-color="['#ebedf0', '#dae2ef', '#c0ddf9', '#73b3f3', '#3886e1', '#17459e']"
                :end-date="2022-12-31"/>
    </div>
</template>

<script>
    export default {
        name: "CalendarMap"
    }
</script>

<style scoped>

</style>
