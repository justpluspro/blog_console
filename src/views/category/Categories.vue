<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-button type="primary" size="small" icon="el-icon-plus" @click="dialogFormVisible = true">新增分类</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="$store.state.categoryList">
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="createAt" label="创建时间"></el-table-column>
      <el-table-column prop="modifyAt" label="修改时间"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row)" type="primary" icon="el-icon-edit" size="mini"></el-button>
          <el-button @click="handleDelete(scope.row)" type="danger" icon="el-icon-delete" size="mini"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="新增/编辑分类" :visible.sync="dialogFormVisible">
      <el-form :model="category">
        <el-form-item label="分类名称" :label-width="formLabelWidth">
          <el-input v-model="category.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button type="primary" @click="handleSave">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getCategoryList, saveCategory, deleteCategory } from '../../api/category'
export default {
  name: 'Categories',
  data () {
    return {
      query: '',
      dialogFormVisible: false,
      category: {},
      formLabelWidth: '120px'
    }
  },
  mounted () {
    getCategoryList()
    if (this.$store.state.categoryList.length === 0) {
      this.$store.dispatch('getCategoryList')
    } else {
      console.log('走缓存')
    }
  },
  methods: {
    handleEdit: function (obj) {
      this.category.id = obj.id
      this.dialogFormVisible = true
      this.category.name = obj.name
    },
    handleDelete: function (obj) {
      this.$confirm('此操作将删除分类, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteCategory(obj.id).then(() => {
          this.$message({
            type: 'success',
            message: '删除分类成功!'
          })
        })
        // this.$store.dispatch('deleteCategory', obj.id).then(() => {
        //   this.$message({
        //     type: 'success',
        //     message: '删除分类成功!'
        //   })
        // })
      })
    },
    handleSave () {
      this.dialogFormVisible = false
      console.log(JSON.stringify(this.category))
      saveCategory(this.category).then(() => {
        this.$message({
          type: 'success',
          message: '新增分类成功'
        })
      })
      // this.$store.dispatch('addCategory', this.category).then(() => {
      //   this.$message({
      //     type: 'success',
      //     message: '新增分类成功'
      //   })
      // })
    },
    closeDialog () {
      this.dialogFormVisible = false
      this.category = {}
    }
  }
}
</script>
