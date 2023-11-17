<template>
  <div>
    Demos:
    <el-tabs type="card" v-model="activeTab" lazy>
      <el-tab-pane label="多级联动" name="LinkagePage">
        <LinkagePage />
      </el-tab-pane>
      <el-tab-pane label="withLoading" name="WithLoadingPage">
        <WithLoading />
      </el-tab-pane>
      <el-tab-pane label="像素化" name="PixiPage">
        <Pixi></Pixi>
      </el-tab-pane>
      <el-tab-pane label="Table" name="Table">
        <Table></Table>
      </el-tab-pane>
      <el-tab-pane label="父子组件" name="父子组件">
        <ComIndex></ComIndex>
      </el-tab-pane>
      <el-tab-pane label="组合式API" name="组合式API">
        <HookDemo></HookDemo>
      </el-tab-pane>
      <el-tab-pane label="TanStackDemo" name="TanStackDemo">
        <QueryDemo></QueryDemo>
      </el-tab-pane>
    </el-tabs>
  </div>

</template>

<script setup>
import { ref } from 'vue';
const activeTab = ref('组合式API')
import LinkagePage from './demos/linkage/LinkIndex.vue'
import WithLoading from './demos/with-loading/WithIndex.vue'
import Pixi from './demos/pixi-tool/PiIndex.vue'
import Table from './demos/el-table-wrap/ElIndex.vue'
import ComIndex from './demos/composition/com_index.vue'
import HookDemo from "@/demos/hookRemote/hookDemo.vue";
import QueryDemo from "@/demos/hookRemote/queryDemo.vue";
</script>
