<template>
  <div>父组件:
    <div>{{ data }}</div>
<!--    <div v-if="isPending">{{ isPending }}</div>-->
<!--    <div v-if="!isPending">{{ isPending }}</div>-->
    <div>isFetching: {{isFetching}}</div>
    <div>isPending: {{mutation.isPending}}</div>
    <div>isPaused: {{mutation.isPaused}}</div>
    <div>isIdle: {{mutation.isIdle}}</div>
  </div>
  <HookDemo2></HookDemo2>
</template>
<script setup>

import HookDemo2 from "@/demos/hookRemote/hookDemo2.vue";
import {useCount} from "@/demos/hookRemote/hooks";
// todo isLoading 不生效
const {
  data,
  isFetching,
  mutation,
  } = useCount();
</script>
