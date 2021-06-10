<template>
  <div class="page-wrapper">
      <div class="page-header d-print-none">
        <div class="container-xl">
            <div class="row align-items-center">
              <div class="col-auto ms-auto d-print-none">
                <div class="btn-list">
                  <a href="javascript:void(0);" @click="createTagModal" class="btn btn-primary d-none d-sm-inline-block"
                     data-bs-toggle="modal" data-bs-target="#staticBackdrop">
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
                <td v-text="tag.name"></td>
                <td v-text="tag.createAt"></td>
                <td>
                  <a class="text-primary text-decoration-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                     @click="handleEdit(tag)" href="javascript:void(0)">编辑</a>
                  <a class="text-danger text-decoration-none" data-bs-toggle="modal" data-bs-target="#modal-danger"
                     @click="deleteTagModal(tag.id)" href="javascript:void(0);">
                    删除
                  </a>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="modal modal-blur fade" id="staticBackdrop" data-bs-backdrop="static"
           data-bs-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">新增/修改</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <input type="hidden" v-model="tag.id" class="form-control">
              <div class="row mb-3 align-items-end">
                <div class="col-12">
                  <input type="text" v-model="tag.name" class="form-control" />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn me-auto" data-bs-dismiss="modal">取消</button>
              <button type="button" class="btn btn-primary" @click="handleSave" data-bs-dismiss="modal">保存</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal modal-blur fade" id="modal-danger" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
          <div class="modal-content">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <div class="modal-status bg-danger"></div>
            <div class="modal-body text-center py-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon mb-2 text-danger icon-lg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 9v2m0 4v.01" /><path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" /></svg>
              <h3>确定吗？</h3>
              <div class="text-muted">确定要删除该标签吗?</div>
            </div>
            <div class="modal-footer">
              <div class="w-100">
                <div class="row">
                  <div class="col">
                    <a href="javascript:void(0);" class="btn btn-white w-100" data-bs-dismiss="modal">取消</a>
                  </div>
                  <div class="col">
                    <a href="javascript:void(0)" @click="handleDelete" class="btn btn-danger w-100"
                                      data-bs-dismiss="modal">确定</a>
                  </div>
                </div>
              </div>
            </div>
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
      queryParam: {
        query: ''
      },
      tag: {
        id: '',
        name: ''
      },
      datalist: [],
      totalRows: 0,
      deleteId: ''
    }
  },
  mounted () {
    this.findPage()
  },
  methods: {
    handleQuery: function () {
      saveTag()
    },
    findPage () {
      getTagList(this.queryParam).then(res => {
        this.datalist = res.data
        this.totalPage = res.totalPage
      }).catch(error => {
        console.log(error)
      })
    },
    handleSave () {
      if (this.tag.id === '' || this.tag.id === undefined) {
        saveTag(this.tag).then((res) => {
          this.findPage()
        })
      } else {
        updateTag(this.tag).then(res => {
          this.findPage()
        })
      }
    },
    createTagModal () {
      this.tag.id = ''
      this.tag.name = ''
    },
    deleteTagModal: function (obj) {
      this.deleteId = obj
    },
    handleEdit (obj) {
      this.tag.id = obj.id
      this.tag.name = obj.name
    },
    handleDelete () {
      console.log(this.deleteId)
      deleteTag(this.deleteId).then(res => {
        this.findPage()
      })
    },
    toPage (obj) {
      console.log(obj)
    }
  }
}
</script>
