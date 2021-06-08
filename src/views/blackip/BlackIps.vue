<template>
  <div class="mt-3">
    <div class="row">
      <div class="col-md">
        <input type="text" class="form-control">
      </div>
      <div class="col-md">
        <button type="button" style="margin-right: 16px;" class="btn btn-primary">查询</button>
        <button type="button" class="btn btn-primary" @click="newBlackIpModal">新增</button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <table class="table table-responsive table-bordered">
          <thead>
            <tr>
              <th>序号</th>
              <th>ip</th>
              <th>创建时间</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="blackIp in datalist" :key="blackIp.id">
              <td> {{ blackIp.id }} </td>
              <td> {{ blackIp.ip }} </td>
              <td> {{ blackIp.createAt }} </td>
              <td>
                <a @click="deleteBlackIp(blackIp.id)" href="javascript:void(0);">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                  </svg>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { getBlackIps, saveBlackIp, deleteBlackIp } from '../../api/blackip'
import Swal from 'sweetalert2'
export default {
  name: 'BlackIps',
  data () {
    return {
      form: {
        ip: ''
      },
      pageInfo: {
        totalRows: 1
      },
      queryParam: {
        page: 1,
        size: 10
      },
      datalist: [],
      addModal: ''
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData () {
      getBlackIps(this.queryParam).then(res => {
        this.datalist = res.data
        this.pageInfo.totalRows = res.totalRows
      }).catch(error => {
        console.log(error)
      })
    },
    newBlackIpModal () {
      const { value: ip } = Swal.fire({
        title: 'Input ip address',
        input: 'text',
        inputLabel: '要添加的 ip 地址',
        inputPlaceholder: '请输入 ip',
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value !== '') {
              saveBlackIp({ ip: ip }).then(res => {
                console.log('success')
              })
            }
          })
        }
      })
      // this.addModal = new bootstrap.Modal(document.getElementById('myModal'))
      // this.addModal.togggle()
    },
    saveBlackIp () {
      saveBlackIp(this.form).then(() => {
        this.loadData()
        this.dialogFormVisible = false
        this.form.ip = ''
        // this.$message.success('保存成功')
      })
    },
    deleteBlackIp (id) {
      this.$confirm('此操作将删除该黑名单, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteBlackIp(id).then(() => {
          this.loadData()
        }).then(() => {
          this.$message.success('删除成功')
        }).catch(error => {
          console.log('删除黑名单错误')
          this.message.error('操作失败' + error)
        })
      }).catch(() => {

      })
    },
    toPage (obj) {
      this.queryParam.page = obj
      this.loadData()
    }
  }
}
</script>
<style scoped lang="scss">

</style>
