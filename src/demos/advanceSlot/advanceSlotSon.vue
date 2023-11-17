<template>
  <button @click="e => {console.log(e)}">
    <slot>
      点击
    </slot>
  </button>
</template>
