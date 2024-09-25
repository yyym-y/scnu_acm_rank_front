<template>
  <div class="top-bar">
    <logo></logo>
    <button_group></button_group>
  </div>
</template>

<script>
import logo from './logo.vue';
import button_group from './button_group.vue';
export default {
  components : {
    logo, button_group
  }
}
</script>

<style>
.top-bar {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>