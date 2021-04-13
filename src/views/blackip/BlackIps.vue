<template>
  <div class="__main_container">
    <el-button size="small" type="primary" @click="openSaveDialog">新增黑名单</el-button>
    <el-table
      :data="datalist"
      style="width: 100%; margin-top: 16px;">
      <el-table-column
        prop="id"
        label="序号">
      </el-table-column>
      <el-table-column
        prop="ip"
        label="ip地址">
      </el-table-column>
      <el-table-column
        prop="createAt"
        label="创建时间">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="deleteBlackIp(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      class="__custom-pagination"
      layout="prev, pager, next"
      background
      prev-text="上一页"
      next-text="下一页"
      @current-change="toPage"
      :total="pageInfo.totalRows">
    </el-pagination>
    <el-dialog z-index="19930928" title="新增黑名单" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="ip地址" label-width="120px">
          <el-input v-model="form.ip" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button @click="saveBlackIp" type="primary">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getBlackIps, saveBlackIp, deleteBlackIp } from '../../api/blackip'

export default {
  name: 'BlackIps',
  data () {
    return {
      form: {
        ip: ''
      },
      dialogFormVisible: false,
      pageInfo: {
        totalRows: 1
      },
      queryParam: {
        page: 1,
        size: 10
      },
      datalist: []
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData () {
      getBlackIps(this.queryParam).then(res => {
        this.datalist = res.data
        this.pageInfo.totalRows = res.totalRows
      }).catch(error => {
        console.log('huoqu blackips:' + JSON.stringify(error))
      })
    },
    openSaveDialog () {
      this.dialogFormVisible = !this.dialogFormVisible
    },
    saveBlackIp () {
      saveBlackIp(this.form).then(() => {
        this.loadData()
        this.dialogFormVisible = false
        this.form.ip = ''
        this.$message.success('保存成功')
      })
    },
    deleteBlackIp (id) {
      this.$confirm('此操作将删除该黑名单, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteBlackIp(id).then(() => {
          this.loadData()
        }).then(() => {
          this.$message.success('删除成功')
        }).catch(error => {
          console.log('删除黑名单错误')
          this.message.error('操作失败' + error)
        })
      }).catch(() => {

      })
    },
    toPage (obj) {
      this.queryParam.page = obj
      this.loadData()
    }
  }
}
</script>
<style scoped lang="scss">
  .__custom-pagination {
    margin-top: 16px;
    display: flex;
    width: 100%;
    justify-content: center;
  }
</style>
