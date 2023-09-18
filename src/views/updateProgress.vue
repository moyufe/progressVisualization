<!--
 * @Author: moyvfei 1786016109@qq.com
 * @Date: 2023-09-17 13:38:21
 * @LastEditors: moyvfei 1786016109@qq.com
 * @LastEditTime: 2023-09-18 11:25:54
 * @FilePath: \progressVisualization\src\views\updateProgress.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div v-for="(item, index) in store.taskData" :key="index" class="taskList">
        <n-form-item label="任务名" path="taskData.name">
                <n-input v-model:value="item.name" placeholder="输入任务名" />
            </n-form-item>

            <n-form-item label="任务总进度" path="taskData.overallProgress">
                <n-input v-model:value="item.overallProgress" placeholder="输入总进度" />
            </n-form-item>

            <n-form-item label="已完成度" path="taskData.completed">
                <n-input v-model:value="item.completed" placeholder="输入已完成度" />
            </n-form-item>

            <n-form-item label="创建日期" path="taskData.datetimeValue">
                <n-date-picker v-model:value="item.datetimeValue" placeholder="创建日期" type="datetime" clearable />
            </n-form-item>

            <n-form-item label="任务状态" path="taskData.state">
                <n-select v-model:value="item.state" filterable placeholder="输入任务状态" :options="options"  />
            </n-form-item>

            <n-form-item>
                <n-button attr-type="button">
                    修改
                </n-button>
            </n-form-item>
    </div>
</template>

<script setup lang="ts">
import taskDataStore from '../store/classification/taskStore';
const store = taskDataStore();

const options = [
    {label:"未开始", value:"未开始"},
    {label:"进行中", value:"进行中"},
    {label:"已完成", value:"已完成"}
];
</script>

<style scoped>
.taskList{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

}
.taskList>.n-form-item{
    width: 160px;
}
</style>