<script setup>
import {ref, computed} from 'vue'
import NotFound from "@/demos/home/notFound.vue";
import {routers} from "@/demos/route";

const currentPath = ref(window.location.hash)
window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})
const currentView = computed(() => {
  return routers.find(r => r.path === currentPath.value.slice(1))?.component || NotFound
})
</script>
<template>
  <div class="main">
    <div class="menu">
      <list>
        <li v-for="(i, index) in routers" :key="index"><a :href="'#' + i.path">{{ i.name }}</a></li>
      </list>
    </div>
    <div class="content">
      <component :is="currentView"/>
    </div>
  </div>
</template>

<style lang="scss">
.menu {
  flex: 2;
  background-color: antiquewhite;
  li{
    margin: 4.5%;
    background-color: burlywood;
    border-radius: 10px;
  }
}

.content {
  flex: 8;
  background-color: aquamarine;
}

.main {
  display: flex;
}
</style>
