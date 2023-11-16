<template>
  <div>子组件: {{ count }}</div>
  <div>
    <button @click="addCount()">加1</button>
  </div>
</template>
<script setup>
import {useCount} from "./hooks";
const {count, addCount} = useCount();

</script>
