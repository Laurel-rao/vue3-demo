<template>
  <attrSon @click.once="display"></attrSon>
</template>
<script setup>
import AttrSon from "@/demos/transAttr/attrSon.vue";

const display = () => {
  console.log("Hello");
}
</script>
