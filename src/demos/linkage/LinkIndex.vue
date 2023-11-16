<template>
  <div>
    <span>省：</span>
    <ProvinceSelect v-model="formData.province" clearable/>
    <span>市：</span>
    <CitySelect v-model="formData.city"/>
    <span>区：</span>
    <AreaSelect v-model="formData.area"/>
  </div>
</template>
<script setup>
import { reactive } from '@vue/reactivity';
import { useLinkage } from './components/my-linkage';
const { ProvinceSelect, CitySelect, AreaSelect } = useLinkage()
const formData = reactive({
  province: null,
  city: null,
  area: null
})
</script>
