<template>
  <div>
    <el-table :data="tableInfo" border style="width: 100%" @row-click="clickData">
        <el-table-column 
            prop="rank" label="排名" min-width="20%" align="center">
        </el-table-column>
        <el-table-column
            prop="name" label="姓名" min-width="20%" align="center">
        </el-table-column>
        <el-table-column
            prop="stu_id" label="学号" min-width="20%" align="center">
        </el-table-column>
        <el-table-column
            prop="score" label="积分" min-width="20%" align="center">
        </el-table-column>
    </el-table>
    <detail_comp_dialogVue ref="Pdetial" 
        :title="'个人比赛详情'" :type="'person'"></detail_comp_dialogVue>
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
        this.$api.index.P_Competitions(this).then((res) => {
            if(res == null) return
            res.rank.sort(function(a, b) {
                return a.rank - b.rank;
            })
            this.tableInfo = res.rank;
        })
    },
    methods: {
        clickData(row, event, column) {
            this.$refs.Pdetial.updateDialog(row.stu_id)
            this.$refs.Pdetial.openDialog();
        }
    }
}
</script>

<style>

</style>