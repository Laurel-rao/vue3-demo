<template>
  <div>子组件: {{ data }}</div>
  <div>
    <button @click="mutation.mutate()">加2</button>
  </div>
</template>
<script setup>
import {useCount} from "@/demos/hookRemote/hooks";
const {data, mutation} = useCount();

</script>
