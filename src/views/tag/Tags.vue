<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="分类名称">
        <el-input v-model="query" size="small" placeholder="关键字"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small" icon="el-icon-search" @click="handleQuery">查询</el-button>
        <el-button type="primary" size="small" icon="el-icon-plus" @click="dialogFormVisible = true">新增</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tags">
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column label="名称">
        <template slot-scope="scope">
          <el-tag size="small"> {{scope.row.name}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="createAt" label="创建时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row)" type="primary" icon="el-icon-edit" size="mini"></el-button>
          <el-button @click="handleDelete(scope.row)" type="danger" icon="el-icon-delete" size="mini"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="pager" :total="totalRows" @current-change="toPage">
    </el-pagination>
    <el-dialog title="新增/编辑分类" :visible.sync="dialogFormVisible">
      <el-form :model="tag">
        <el-form-item label="分类名称" :label-width="formLabelWidth">
          <el-input v-model="tag.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSave">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getTagList, saveTag, deleteTag, updateTag } from '../../api/tag'
export default {
  name: 'Tags',
  data () {
    return {
      query: '',
      dialogFormVisible: false,
      tag: {},
      tags: [],
      totalRows: 0,
      formLabelWidth: '120px'
    }
  },
  mounted () {
    getTagList().then((res) => {
      this.tags = res.data
    })
    // http.get('api/tags').then(res => {
    //   // console.log(res.data.data)
    //   this.tags = res.data.data
    //   this.totalRows = res.data.totalRows
    // })
  },
  methods: {
    handleQuery: function () {
      saveTag()
      // http.get('api/tag?query=' + this.query).then(res => {
      //   this.categories = res.data
      // })
    },
    handleEdit: function (obj) {
      updateTag()
      // this.category.id = obj.id
      // this.dialogFormVisible = true
      // this.category.name = obj.name
    },
    handleDelete: function (obj) {
      this.$confirm('此操作将删除标签, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteTag(obj).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
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
