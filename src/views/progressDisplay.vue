<!--
 * @Author: moyvfei 1786016109@qq.com
 * @Date: 2023-09-17 12:02:38
 * @LastEditors: moyvfei 1786016109@qq.com
 * @LastEditTime: 2023-09-17 14:44:48
 * @FilePath: \progressVisualization\src\components\progressDisplay.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <n-card title="卡片">
            <n-progress
                type="line"
                :percentage="60"
                :indicator-placement="'inside'"
                processing
            />
        </n-card>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.n-card{
    width: 50%;
    min-width: 500px;
}
</style>