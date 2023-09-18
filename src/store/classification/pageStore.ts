import { defineStore } from 'pinia';

const pageStore = defineStore('page',{
    state: () => {
        return {
            inverted: false,             // 侧边栏颜色
            viewValue: "progressDisplay" //导航条选中项
        }
    },
    persist: true,
    // persist:{
    //     paths: []
    // }
});

export default pageStore;