<template>
  <div>父组件:
    <div>{{ count }}</div>
  </div>
  <HookDemo2></HookDemo2>
</template>
<script setup>

import {useCount} from "./hooks";
import HookDemo2 from "@/demos/hookDemo/hookDemo2.vue";

const {count} = useCount();

</script>
