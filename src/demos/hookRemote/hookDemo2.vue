<template>
  <div>子组件: {{ data }}</div>
  <div>
    <span v-if="isPending">Adding todo...</span>
    <span v-else-if="isError">An error occurred:</span>
    <span v-else-if="isSuccess">Todo added!</span>
    <hr>
    {{status}}
    <hr>
    <button @click="mutate()">加2</button>
  </div>
</template>
<script setup>
import {useCount} from "@/demos/hookRemote/hooks";
const {data, mutate, isPending, isError,status,
  isSuccess,} = useCount();
</script>
