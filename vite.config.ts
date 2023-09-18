import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

//组件按需引入 插件
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
// naive 按需引入
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        }
      ],
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ]
})
