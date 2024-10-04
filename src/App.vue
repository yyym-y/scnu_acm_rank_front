<template>
  <div>
    <el-container>
      <el-header height="80px">
        <top_barVue></top_barVue>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <msgBox></msgBox>
  </div>
</template>

<script>
import top_barVue from "./components/top/top_bar.vue";
import msgBox from "./components/util/msgBox.vue";
export default {
  name: 'App',
  components: {
    top_barVue, msgBox
  }
}
</script>

<style>

</style>
