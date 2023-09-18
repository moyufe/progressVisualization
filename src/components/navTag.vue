<template>
    <n-switch :rail-style="railStyle" v-model:value="store.inverted">
      <template #unchecked-icon>
        <!-- <n-icon :component="ArrowBackOutline" /> -->
        😊
      </template>
      <template #unchecked>
        白天计划模式
      </template>

      <template #checked-icon>
        <!-- <n-icon :component="ArrowForwardOutline" /> -->
        🔮
      </template>
      <template #checked>
        午夜战斗模式
      </template>
      
    </n-switch>
</template>
  
<script lang="ts">
  import { CSSProperties, defineComponent } from 'vue';
  import pageStore  from '../store/classification/pageStore.ts';
  
  export default defineComponent({
    setup () {
      return {
        store: pageStore(),
        railStyle: ({
          focused,
          checked
        }: {
          focused: boolean
          checked: boolean
        }) => {
          const style: CSSProperties = {}
          if (checked) {
            style.background = '#d03050'
            if (focused) {
              style.boxShadow = '0 0 0 2px #d0305040'
            }
          } else {
            style.background = '#2080f0'
            if (focused) {
              style.boxShadow = '0 0 0 2px #2080f040'
            }
          }
          return style
        }
      }
    }
  })
</script>