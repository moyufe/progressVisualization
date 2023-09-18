<template>
    <n-menu
        :inverted="store.inverted"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
        v-model:value="store.viewValue"
    />
</template>

<script lang="ts">
import { h, defineComponent, Component } from 'vue';
import { RouterLink } from 'vue-router';
import { NIcon } from 'naive-ui';
import type { MenuOption } from 'naive-ui';
import { BarChart, AddCircleOutline, Create} from '@vicons/ionicons5';
import pageStore from '../store/classification/pageStore';

//定义类型别名
type titleType = "进度展示" | "添加任务" | "更新任务";

function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
function rederLabel (path: string, title: titleType){
  return () => h(
    RouterLink,
        {
          to: path,
        },
        { default: () => title }
  );
}

const menuOptions: MenuOption[] = [
  {
    label: rederLabel("progressDisplay", "进度展示"),
    key: 'progressDisplay',
    icon: renderIcon(BarChart),
  },
  {
    label: rederLabel("taskAdd", "添加任务"),
    key: 'taskAdd',
    icon: renderIcon(AddCircleOutline)
  },
  {
    label: rederLabel("updateProgress", "更新任务"),
    key: 'updateProgress',
    icon: renderIcon(Create)
  },
]

export default defineComponent({
  setup () {
    return {
      store: pageStore(),
      menuOptions
    }
  }
})
</script>