<template>
  <div>
    <el-container>
      <el-header height="80px">
        <top_main_layout></top_main_layout>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <update_msg></update_msg>
  </div>
</template>

<script>
import top_main_layout from './components/Layout/top_main_layout.vue';
import update_msg from './components/util/update_msg.vue';
export default {
  name: 'App',
  components: {
    top_main_layout, update_msg
  }
}
</script>

<style>

</style>
