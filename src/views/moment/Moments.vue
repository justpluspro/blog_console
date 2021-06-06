<template>
  <div id="container">
    <el-form :inline="true" :model="queryForm" class="demo-form-inline">
      <el-form-item label="关键字">
        <el-input v-model="queryForm.query" placeholder="关键字"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleQuery">查询</el-button>
        <el-button type="primary" @click="resetForm">重置</el-button>
        <el-button type="primary" @click="handleNewMoment">新动态</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="datalist" style="width: 100%">
      <el-table-column prop="content" label="内容"></el-table-column>
      <el-table-column prop="createAt" label="创建时间"></el-table-column>
      <el-table-column label="受保护">
        <template slot-scope="scope">
          <el-tag type="warning" v-if="scope.row.private === true">保护</el-tag>
          <el-tag type="success" v-else>公开</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="评论权限">
        <template slot-scope="scope">
          <el-tag type="success" v-if="scope.row.allowComment === true">允许</el-tag>
          <el-tag type="danger" v-else>禁止</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="hits" label="点击数"></el-table-column>
      <el-table-column prop="comments" label="评论数"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small">
            删除
          </el-button>
          <el-button
            @click="handleEdit(scope.row)"
            type="text"
            size="small">
            编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin: 0 auto">
      <el-pagination
        background
        @current-change="handleCurrentChange"
        layout="prev, pager, next"
        :total="totalRows">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getMoments } from '../../api/moment'

export default {
  name: 'Moments',
  data () {
    return {
      queryForm: {
        query: '',
        page: 1
      },
      datalist: [],
      totalRows: 0
    }
  },
  filters: {
    dateFormat (data) {
      console.log(data)
      return '111'
    }
  },
  mounted () {
    this.loadData(this.queryForm)
  },
  methods: {
    loadData (queryObj) {
      getMoments(queryObj).then(res => {
        this.datalist = res.data
        this.totalRows = res.totalRows
        this.queryForm.page = res.page
      })
    },
    handleNewMoment: function () {
      this.$router.push('/console/moment/create')
    },
    handleQuery: function () {
      this.loadData(this.queryForm)
    },
    handleEdit: function (obj) {
      this.$router.push(`/console/moment/${obj.id}/edit`)
      // this.category.id = obj.id
      // this.dialogFormVisible = true
      // this.category.name = obj.name
    },
    handleCurrentChange (val) {
      this.queryForm.page = val
      console.log(val)
      this.loadData(this.queryForm)
    },
    handleDelete (id) {
      alert(id)
    },
    handleSave () {
      // this.dialogFormVisible = false
      // console.log(JSON.stringify(this.category))

      // http.post('api/category', JSON.stringify(this.category)).then(res => {
      //   console.log(JSON.stringify(this.category))
      // })
    },
    resetForm () {
      this.queryForm.query = ''
      this.loadData(this.queryForm)
    },
    toPage (obj) {
      console.log(obj)
    }
  }
}
</script>
<style lang="scss">
#container {
  #toolbar {
    height: 42px;
    line-height: 42px;
    input {
      height: 28px;
      line-height: 28px;
    }
  }
  table {
    border: 1px solid #eeeeee;
    border-radius: 4px;
  }
}
</style>
