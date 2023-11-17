
<template>

  <div>
    <div><button @click="change">切换</button></div>
    <div>{{dateNow}}</div>
    <div>{{info}}</div>
  </div>
  <hr>
  <advanceSlotSon>
    <Component :is="randomView"></Component>
  </advanceSlotSon>
</template>
<script setup>
import AdvanceSlotSon from "@/demos/advanceSlot/advanceSlotSon.vue";
import {computed, onUnmounted, ref} from "vue";
import CustomView1 from "@/demos/advanceSlot/customView1.vue";
import CustomView2 from "@/demos/advanceSlot/customView2.vue";
import CustomView3 from "@/demos/advanceSlot/customView3.vue";
const customView = ref();
const info = ref(0);
const dateNow = ref("");
const randomView = computed( () => {
  if (info.value > 2/3){
    return CustomView1;
  } else if(info.value > 1/3) {
    return CustomView2;
  } else {
    return CustomView3;
  }
})

const ss = setInterval(() => {
  const now = new Date();
  dateNow.value = `${now.getHours()}-${now.getMinutes() >= 10 ? now.getMinutes() : '0' + now.getMinutes()}-${now.getSeconds() >= 10 ? now.getSeconds() : '0' + now.getSeconds()}`
  info.value = Math.random();
  console.log(info.value);
}, 999)

onUnmounted(() => {
  clearInterval(ss);
})

const change = () => {
 const value = Math.random().valueOf();
 console.log(value)
 if (value > 2/3){
   customView.value = CustomView1;
 } else if(value > 1/3) {
   customView.value = CustomView2;
 } else {
   customView.value = CustomView3;
 }
 console.log(customView.value);
}

</script>
