<template>
  <div>
    <el-dialog :title="title"
        :visible.sync="dialogVisible" width="520px" >
        
    </el-dialog>
  </div>
</template>

<script>
export default {
    props : ["title"],
    data() {
        return {
            dialogVisible : false
        }
    },
    methods: {
        openDialog() {this.dialogVisible = true}
        
    }
}
</script>

<style>

</style>