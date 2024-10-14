<template>
  <div>
    <el-tabs v-model="activeName" type="card" :stretch=true>
        <el-tab-pane label="个人排行" name="person" class="tag-width">
            <personal_rank_table></personal_rank_table>
        </el-tab-pane>
        <el-tab-pane label="团队排行" name="group">
            <group_rank_table></group_rank_table>
        </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import personal_rank_table from '@/components/Table/personal_rank_table.vue';
import group_rank_table from '@/components/Table/group_rank_table.vue';
export default {
    components : {
        personal_rank_table, group_rank_table
    },
    data() {
        return {
            activeName : "person"
        }
    }
}
</script>

<style>
</style>