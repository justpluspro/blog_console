<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="关键字">
        <el-input v-model="query" size="small" placeholder="关键字"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small" icon="el-icon-search" @click="handleQuery">查询</el-button>
        <el-button type="primary" size="small" icon="el-icon-plus">新增</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="moments">
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="content" label="内容"></el-table-column>
      <el-table-column prop="createAt" label="发布时间"></el-table-column>
      <el-table-column prop="allowComment" label="评论"></el-table-column>
      <el-table-column prop="hits" label="点击"></el-table-column>
      <el-table-column prop="comments" label="评论数"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row)" type="primary" icon="el-icon-edit" size="mini"></el-button>
          <el-button @click="handleDelete(scope.row)" type="danger" icon="el-icon-delete" size="mini"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="pager" :total="totalRows" @current-change="toPage">
    </el-pagination>
  </div>
</template>

<script>
import http from '../../util/http'
export default {
  name: 'Moments',
  data () {
    return {
      query: '',
      moments: [],
      totalRows: 0
    }
  },
  mounted () {
    http.get('api/moments').then(res => {
      // console.log(res.data.data)
      this.moments = res.data.data
      this.totalRows = res.data.totalRows
    })
  },
  methods: {
    handleQuery: function () {
      // http.get('api/tag?query=' + this.query).then(res => {
      //   this.categories = res.data
      // })
    },
    handleEdit: function (obj) {
      this.$router.push(`/console/moment/${obj.id}`)
      // this.category.id = obj.id
      // this.dialogFormVisible = true
      // this.category.name = obj.name
    },
    handleDelete: function (obj) {
      // this.$confirm('此操作将删除标签, 是否继续?', '提示', {
      //   confirmButtonText: '确定',
      //   cancelButtonText: '取消',
      //   type: 'warning'
      // }).then(() => {
      //   this.$message({
      //     type: 'success',
      //     message: '删除成功!'
      //   })
      // }).catch(() => {
      //   this.$message({
      //     type: 'info',
      //     message: '已取消删除'
      //   })
      // })
    },
    handleSave () {
      // this.dialogFormVisible = false
      // console.log(JSON.stringify(this.category))

      // http.post('api/category', JSON.stringify(this.category)).then(res => {
      //   console.log(JSON.stringify(this.category))
      // })
    },
    toPage (obj) {
      console.log(obj)
    }
  }
}
</script>
