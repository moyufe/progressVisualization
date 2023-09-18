import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Ref } from 'vue';
import { taskDataType } from '../../interfaces/interfaces';

const taskDataStore = defineStore(
    'task',
    () => {
        let taskData: Ref<Array<taskDataType>> = ref<Array<taskDataType>>([]);
        return { taskData };
    },
    {
        persist: true,
    },
);

export default taskDataStore;