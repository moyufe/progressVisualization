<!--
 * @Author: moyvfei 1786016109@qq.com
 * @Date: 2023-09-16 22:29:19
 * @LastEditors: moyvfei 1786016109@qq.com
 * @LastEditTime: 2023-09-17 22:49:33
 * @FilePath: \progressVisualization\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <n-layout has-sider>
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        show-trigger
        :inverted="store.inverted"
      >
          <sideTag />
      </n-layout-sider>

      <n-layout>
          <n-layout-header>
            <navTag />
          </n-layout-header>
          <n-layout-content>
              <RouterView></RouterView>
          </n-layout-content>
      </n-layout>
  </n-layout>
</template>

<script lang="ts">
import { defineComponent, } from 'vue';
import pageStore  from './store/classification/pageStore.ts';
import sideTag from './components/sideTag.vue';
import navTag from './components/navTag.vue';

export default defineComponent({
  setup () {
    return {
      store: pageStore(),
    }
  }
})
</script>

<style>
  body{
    width: 100%;height: 100vh;
    padding: 0;margin: 0;
    background-color: #eee;
  }
  #app{
    height: 100vh;
  }
  .n-layout{
    height: 100%;
  }
  .n-layout-header{
    height: 60px;
  }
</style>