<template>
  <div class="page-wrapper">
    <div class="container-xl">
      <div class="page-header d-print-none">
        <div class="row align-items-center">
          <div class="col">
            <h2 class="page-title">
              Tables
            </h2>
          </div>
          <div class="col-auto ms-auto d-print-none">
            <div class="btn-list">
              <a href="javascript:void(0)" @click="handleNew" class="btn btn-primary d-none d-sm-inline-block" data-bs-toggle="modal" data-bs-target="#modal-report">
                <!-- Download SVG icon from http://tabler-icons.io/i/plus -->
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                新动态
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-body">
      <div class="container-xl">
        <div class="col-12">
          <div class="card">
            <div class="table-responsive">
              <table class="table table-vcenter card-table">
                <thead>
                  <tr>
                    <th>内容</th>
                    <th>创建时间</th>
                    <th>允许评论</th>
                    <th>私人</th>
                    <th>评论数</th>
                    <th>点击数</th>
                    <th class="w-2">操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="moment in datalist" :key="moment.id">
                    <td></td>
                    <td class="text-muted" v-text="moment.createAt"></td>
                    <td></td>
                    <td></td>
                    <td v-text="moment.hits"></td>
                    <td v-text="moment.comments"></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
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
    handleNew: function () {
      this.$router.push('/moment/create')
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
