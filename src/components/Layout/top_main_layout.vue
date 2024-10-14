<template>
  <div class="top-main-layout">
    <logo></logo>
    <bottons></bottons>
  </div>
</template>

<script>
import logo from '@/components/util/logo.vue';
import bottons from '@/components/Buttons/user_operate_bottons.vue';
export default {
  components : {
    logo, bottons
  }
}
</script>

<style>
.top-main-layout {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>