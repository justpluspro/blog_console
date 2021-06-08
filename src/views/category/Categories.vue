<template>
  <div class="page-wrapper">
    <div class="page-header d-print-none">
      <div class="container-xl">
        <div class="row align-items-center">
          <div class="col-auto ms-auto d-print-none">
            <div class="btn-list">
              <a href="#" class="btn btn-primary d-none d-sm-inline-block" data-bs-toggle="modal" data-bs-target="#modal-report">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                新分类
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-body">
      <div class="container-xl">
        <div class="table-responsive">
          <table class="table table-vcenter table-bordered">
            <thead>
            <tr>
              <th>序号</th>
              <th>分类名称</th>
              <th>创建时间</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="category in datalist" :key="category.id">
              <td> {{ category.id }} </td>
              <td> {{ category.name }} </td>
              <td> {{ category.createAt }} </td>
              <td>
                <a class="text-primary text-decoration-none" @click="handleEdit(category)" href="javascript:void(0)">编辑</a>
                <a class="text-danger text-decoration-none" @click="handleDelete(category.id)" href="javascript:void(0);">
                  删除
                </a>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCategories, saveCategory, deleteCategory } from '../../api/category'
export default {
  name: 'Categories',
  data () {
    return {
      queryForm: {
        query: ''
      },
      datalist: [],
      category: {}
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData () {
      getCategories().then((res) => {
        this.datalist = res
      }).catch(error => {
        console.log(error)
      })
    },
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
          this.loadData()
        })
      })
    },
    handleSave () {
      console.log(JSON.stringify(this.category))
      saveCategory(this.category).then(() => {
        this.loadData()
        this.$message({
          type: 'success',
          message: '新增分类成功'
        })
      })
    },
    closeDialog () {
      this.dialogFormVisible = false
      this.category = {}
    }
  }
}
</script>
