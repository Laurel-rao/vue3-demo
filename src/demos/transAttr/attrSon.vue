<template>
  <button>子组件</button>
  <button v-bind="$attrs">子组件2</button>
  <AttrGrandSon></AttrGrandSon>
</template>
<script setup>
import AttrGrandSon from "@/demos/transAttr/attrGrandSon.vue";
</script>
