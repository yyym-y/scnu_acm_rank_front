<template>
  <div>
    <el-table :data="tableInfo" border style="width: 100%">
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
  </div>
</template>

<script>
export default {
    data() {
        return {
            tableInfo : []
        }
    },
    created() {
        this.$api.index.P_Competitions(this).then((res) => {
            res.rank.sort(function(a, b) {
                return a.rank - b.rank;
            })
            this.tableInfo = res.rank;
        })
    }
}
</script>

<style>

</style>