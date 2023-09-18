<!--
 * @Author: moyvfei 1786016109@qq.com
 * @Date: 2023-09-17 12:02:38
 * @LastEditors: moyvfei 1786016109@qq.com
 * @LastEditTime: 2023-09-18 10:50:13
 * @FilePath: \progressVisualization\src\components\progressDisplay.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <n-card :title="item.name" v-for="( item, index ) in store.taskData" :index="index">
            <n-progress
                type="line"
                :percentage="Math.floor(parseInt(item.completed) / parseInt(item.overallProgress) * 100)"
                :indicator-placement="'inside'"
                processing
            />
        </n-card>
    </div>
</template>

<script setup lang="ts">
import taskStore  from "../store/classification/taskStore.ts";
const store =  taskStore();
</script>

<style scoped>
.n-card{
    width: 50%;
    min-width: 500px;
}
</style>