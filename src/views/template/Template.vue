<template>
  <div class="page-wrapper">
    <div class="page-header d-print-none">
      <div class="container-xl">
        <div class="row align-items-center">
          <div class="col-auto ms-auto d-print-none">
            <div class="btn-list">
              <a href="#" class="btn btn-primary d-none d-sm-inline-block" data-bs-toggle="modal" data-bs-target="#modal-report">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                新模板
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
              <th>模板名称</th>
              <th>路径匹配</th>
              <th>内容</th>
              <th>创建时间</th>
              <th>是否启用</th>
              <th>评论权限</th>
              <th>描述</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="template in datalist" :key="template.id">
              <td> {{ template.name }} </td>
              <td> {{ template.pattern }} </td>
              <td> <a @click="handleDetail(template.id)" href="javascript:void(0);">查看内容</a> </td>
              <td> {{ template.createAt }} </td>
              <td> {{ template.enable }} </td>
              <td> {{ template.allowComment }} </td>
              <td> {{ template.description }} </td>
              <td>
                <a class="text-primary text-decoration-none" @click="handleEdit(template)" href="javascript:void(0)">编辑</a>
                <a class="text-danger text-decoration-none" @click="handleDelete(template.id)" href="javascript:void(0);">
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
import { findAll, findTemplate } from '../../api/template'
export default {
  name: 'Template',
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
      findAll().then((res) => {
        this.datalist = res
      }).catch(error => {
        console.log(error)
      })
    },
    handleDetail (id) {
      findTemplate(id).then(res => {

      })
    },
    handleEdit: function (obj) {
      this.category.id = obj.id
      this.category.name = obj.name
    },
    handleDelete: function (obj) {
      this.$confirm('此操作将删除分类, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {

      })
    },
    handleSave () {
    },
    closeDialog () {
      this.category = {}
    }
  }
}
</script>
