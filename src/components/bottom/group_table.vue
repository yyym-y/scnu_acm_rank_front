<template>
  <div>
    <el-table :data="tableInfo" border style="width: 100%" @row-click="clickData">
        <el-table-column 
            prop="rank" label="排名" min-width="10%" align="center">
        </el-table-column>
        <el-table-column
            prop="name" label="队伍名称" min-width="60%" align="center">
        </el-table-column>
        <el-table-column
            prop="stu_id" label="队伍ID" min-width="15%" align="center">
        </el-table-column>
        <el-table-column
            prop="score" label="积分" min-width="15%" align="center">
        </el-table-column>
    </el-table>
    <detail_comp_dialogVue ref="detial" :title="'团队比赛详情'"></detail_comp_dialogVue>
  </div>
</template>

<script>
import detail_comp_dialogVue from './detail_comp_dialog.vue'
export default {
    components : {
        detail_comp_dialogVue
    },
    data() {
        return {
            tableInfo : []
        }
    },
    created() {
        this.$api.index.G_Competitions(this).then((res) => {
            res.rank.sort(function(a, b) {
                return a.rank - b.rank;
            })
            this.tableInfo = res.rank;
        })
    },
    methods : {
        clickData(row, event, column) {
            this.$refs.detial.openDialog()
            console.log(row,  event,  column)
     }   
    }
}
</script>

<style>

</style>