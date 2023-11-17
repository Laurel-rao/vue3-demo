<template>
  <div>子组件:
    <span>{{ data }}</span>
    <div>{{isFetching ? "获取中" : "获取成功"}}</div>
    <div>{{status}}</div>
    <div @click="mutate"><button>子组件添加</button></div>
  </div>
</template>
<script setup>
import {useCount} from "@/demos/hookRemote/hooks";
const {data,isFetching,status,mutate} = useCount();
</script>
