<template>
    <div style="width: 600px">
        <div v-for="(item,index) in testList" :key="index">{{item}}</div>
        <!--        <div @click="showDisplay = !showDisplay">{{textSwitch}}</div>-->
        <div @click="showDisplay = !showDisplay" style="float: right;font-weight: bold;">
            <span :style="{color: `${colorSwitch}`}">{{showDisplay ? '^ 收起': '...展开'}}</span>
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                displayList: [
                    {id: 0, name: "测试11111111111111111"},
                    {id: 1, name: "测试22222222"},
                    {id: 2, name: "测试3333333333"},
                    {id: 3, name: "测试234"},
                    {id: 4, name: "测试523232"},
                    {id: 5, name: "测试6566666666666"}
                ], // 展示的数据
                showDisplay: false,
            }
        },
        computed: {
            testList() {
                // 当数据不需要完全显示的时候
                if (this.showDisplay === false) {
                    let testList = []; // 定义一个空数组
                    // 先显示前三个
                    if (this.displayList.length > 3) {
                        for (var i = 0; i < 3; i++) {
                            testList.push(this.displayList[i])
                        }
                    } else {
                        testList = this.displayList;
                    }
                    return testList; // 返回当前数组
                } else {
                    return this.displayList;
                }
            },
            textSwitch() {
                // 文字进行处理
                if (this.showDisplay === false) {
                    return '显示更多'
                } else {
                    return '收起'
                }
            },
            colorSwitch() {
                if (this.showDisplay === false) {
                    return '#303133'
                } else {
                    return '#409EFF'
                }
            }
        }
    }
</script>


<style scoped>

</style>
