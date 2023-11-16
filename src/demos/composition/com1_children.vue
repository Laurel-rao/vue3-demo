<template>
  <div>子组件: {{ count }}</div>
  <div>
    <button @click="$emit('addCount')">加1</button>
  </div>
</template>
<script setup>
import {defineProps, defineEmits} from "vue";
// 参数
defineProps(["count"]);
// 回调函数
defineEmits(["addCount"])
</script>
