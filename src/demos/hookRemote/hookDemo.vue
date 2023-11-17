<template>
  <div>父组件:
    <div>{{ data }}</div>
<!--    <div v-if="isPending">{{ isPending }}</div>-->
<!--    <div v-if="!isPending">{{ isPending }}</div>-->
    <span v-if="isPending">Adding todo...</span>
    <span v-else-if="isError">An error occurred:</span>
    <span v-else-if="isSuccess">Todo added!</span>
    <hr>
    <div>isFetching: {{isFetching}}</div>
    <hr>
    {{status}}
    <hr>
    <div @click="mutate"><button>父组件添加</button></div>
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
  status,
  mutate
  } = useCount();
</script>
