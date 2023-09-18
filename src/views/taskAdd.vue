<template>
    <n-form
      ref="formRef"
      inline
      :label-width="160"
      :model="taskData"
      size="large"
      :rules="rules"
    >
      <n-form-item label="任务名" path="taskData.name">
        <n-input v-model:value="taskData.name" placeholder="输入任务名" />
      </n-form-item>

      <n-form-item label="任务总进度" path="taskData.overallProgress">
        <n-input v-model:value="taskData.overallProgress" placeholder="输入总进度" />
      </n-form-item>

      <n-form-item label="已完成度" path="taskData.completed">
        <n-input v-model:value="taskData.completed" placeholder="输入已完成度" />
      </n-form-item>

      <n-form-item label="创建日期" path="taskData.datetimeValue">
        <n-date-picker v-model:value="taskData.datetimeValue" placeholder="创建日期" type="datetime" clearable />
      </n-form-item>

      <n-form-item label="任务状态" path="taskData.state">
        <n-select v-model:value="taskData.state" filterable placeholder="输入任务状态" :options="options"  />
      </n-form-item>

      <n-form-item>
        <n-button attr-type="button" @click="add">
            添加
        </n-button>
      </n-form-item>

    </n-form>

  </template>
  
<script lang="ts" setup>
import { ref } from 'vue';
import type { Ref } from 'vue';
import { FormInst } from 'naive-ui';
import taskStore from '../store/classification/taskStore';
import { taskDataType } from '../interfaces/interfaces';

    const store = taskStore();
    const formRef = ref<FormInst | null>(null);    

    const options = [
        {label:"未开始", value:"未开始"},
        {label:"进行中", value:"进行中"},
        {label:"已完成", value:"已完成"}
    ];

    let taskData: Ref<taskDataType> = ref<taskDataType> ({
        name: "",       //任务名
        overallProgress: "",    //任务总长
        completed: "",          //已完成度
        datetimeValue: new Date(),      //创建日期
        state: "",  //任务状态
    });

    const rules = {
        name: {
            require: true,
            message: '请输入任务名',
            trigger: 'blur'
        },
        overallProgress: {
            require: true,
            message: '请输入任务总时长',
            trigger: ['input', 'blur']
        },
        completed: {
            require: true,
            message: '请输入已完成度',
            trigger: ['input', 'blur']
        },
        state: {
            require: true,
            message: '请选择状态',
            trigger: ['input', 'blur']
        },
    }

    function add(e: MouseEvent){
        console.log(formRef);
        
        e.preventDefault();
        formRef.value?.validate((errors) => {
            if(!errors){
                store.taskData.push(taskData.value);
            }
        })
    }
</script>