<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="关键字">
        <el-input v-model="queryForm.query" size="small" placeholder="关键字"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small" icon="el-icon-search" @click="handleQuery">查询</el-button>
        <el-button type="primary" size="small" icon="el-icon-plus" @click="handleNewMoment">新增</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="moments">
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="content" label="内容"></el-table-column>
      <el-table-column prop="createAt" label="发布时间"></el-table-column>
      <el-table-column label="评论权限">
        <template slot-scope="scope">
          <el-tag type="success" v-if="scope.allowComment === false">关闭</el-tag>
          <el-tag v-else type="warning">开启</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="私人动态">
        <template slot-scope="scope">
          <el-tag type="success" v-if="scope.private === true">私人</el-tag>
          <el-tag type="success" v-else>开放</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="hits" label="点击"></el-table-column>
      <el-table-column prop="comments" label="评论数"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row)" type="text" size="mini">编辑</el-button>
          <el-button @click="handleDelete(scope.row)" type="text" size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="pager" :total="totalRows" @current-change="toPage">
    </el-pagination>
  </div>
</template>

<script>
import { getMoments, deleteMoment } from '../../api/moment'

export default {
  name: 'Moments',
  data () {
    return {
      queryForm: {
        query: ''
      },
      moments: [],
      totalRows: 0
    }
  },
  mounted () {
    this.loadData(this.queryForm)
  },
  methods: {
    loadData (queryObj) {
      getMoments(queryObj).then(res => {
        this.moments = res.data
        this.totalRows = res.totalRows
      })
    },
    handleNewMoment: function () {
      this.$router.push('/console/moment/create')
    },
    handleQuery: function () {
      this.loadData(this.queryForm)

      // http.get('api/tag?query=' + this.query).then(res => {
      //   this.categories = res.data
      // })
    },
    handleEdit: function (obj) {
      this.$router.push(`/console/moment/${obj.id}/edit`)
      // this.category.id = obj.id
      // this.dialogFormVisible = true
      // this.category.name = obj.name
    },
    handleDelete: function (obj) {
      this.$confirm('此操作将删除该动态, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteMoment(obj.id).then(res => {
          this.loadData()
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
      })
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
