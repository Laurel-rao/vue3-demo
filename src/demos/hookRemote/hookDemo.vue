<template>
  <div>父组件:
    <span>{{ data }}</span>
    <div>{{isFetching ? "获取中" : "获取成功"}}</div>
    <div>{{status}}</div>
    <div @click="mutate"><button>父组件添加</button></div>
  </div>
  <hr/>
  <HookDemo2></HookDemo2>
</template>
<script setup>

import HookDemo2 from "@/demos/hookRemote/hookDemo2.vue";
import {useCount} from "@/demos/hookRemote/hooks";
const {data, isFetching, status, mutate} = useCount();
</script>
