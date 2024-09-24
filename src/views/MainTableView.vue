<template>
  <div>
    <el-tabs v-model="activeName" type="card" :stretch=true>
        <el-tab-pane label="个人排行" name="person" class="tag-width">
            <personal_tableVue></personal_tableVue>
        </el-tab-pane>
        <el-tab-pane label="团队排行" name="group">
            <group_tableVue></group_tableVue>
        </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import personal_tableVue from '@/components/bottom/personal_table.vue'
import group_tableVue from '@/components/bottom/group_table.vue'
export default {
    components : {
        personal_tableVue, group_tableVue
    },
    data() {
        return {
            activeName : "person"
        }
    }
}
</script>

<style>
/* .el-tabs__item {
    width: 47vw !important;
} */
</style>