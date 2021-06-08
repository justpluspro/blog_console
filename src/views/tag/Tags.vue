<template>
  <div class="page-wrapper">
      <div class="page-header d-print-none">
        <div class="container-xl">
            <div class="row align-items-center">
              <div class="col-auto ms-auto d-print-none">
                <div class="btn-list">
                  <a href="#" class="btn btn-primary d-none d-sm-inline-block" data-bs-toggle="modal" data-bs-target="#modal-report">
                    <!-- Download SVG icon from http://tabler-icons.io/i/plus -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                    新标签
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
                <th>标签名称</th>
                <th>创建时间</th>
                <th>操作</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="tag in datalist" :key="tag.id">
                <td v-text="tag.id"></td>
                <td><span class="badge bg-info" v-text="tag.name"></span></td>
                <td v-text="tag.createAt"></td>
                <td>
                  <a class="text-primary text-decoration-none" @click="handleEdit(tag)" href="javascript:void(0)">编辑</a>
                  <a class="text-danger text-decoration-none" @click="handleDelete(tag.id)" href="javascript:void(0);">
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
import { getTagList, saveTag, deleteTag, updateTag } from '../../api/tag'
export default {
  name: 'Tags',
  data () {
    return {
      query: '',
      tag: {},
      datalist: [],
      totalRows: 0
    }
  },
  mounted () {
    getTagList().then((res) => {
      this.datalist = res.data
    })
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
