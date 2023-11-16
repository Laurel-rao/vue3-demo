<template>
  <div>父组件:
    <div>{{ data }}</div>
    <div v-if="isLoading">加载中</div>
    <div v-if="!isLoading">no</div>
  </div>
  <HookDemo2></HookDemo2>
</template>
<script setup>

import HookDemo2 from "@/demos/hookRemote/hookDemo2.vue";
import {useCount} from "@/demos/hookRemote/hooks";
// todo isLoading 不生效
const {data, isLoading} = useCount();
</script>
