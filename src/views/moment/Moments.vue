<template>
  <div id="container">
    <div id="toolbar">
      <form :model="queryForm">
        <input type="text" v-model="queryForm.query">
        <button type="button" @click="handleQuery">检索</button>
        <button type="button" @click="resetForm">重置</button>
        <button type="button" @click="handleNewMoment">新动态</button>
      </form>
    </div>
    <table class="table table-responsive">
      <thead>
        <tr>
          <th style="width: 20%; word-break: break-all">内容</th>
          <th>创建时间</th>
          <th>受保护</th>
          <th>评论</th>
          <th>点击数</th>
          <th>评论数</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(moment, key) in moments" :key="key" style="text-align: center">
          <td><a href="" v-html="moment.content"></a></td>
          <td> {{moment.createAt }} </td>
          <td> {{ moment.private === true ? '私人': '公开' }} </td>
          <td> {{ moment.allowComment === true ? '允许': '禁止' }} </td>
          <td> {{ moment.hits }} </td>
          <td> {{ moment.comments }} </td>
          <td>
            <a href="">编辑</a>
            <a href="javascript:void(0);" @click="handleDelete(`${moment.id}`)">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getMoments } from '../../api/moment'

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
        this.moments = res.data
        this.totalRows = res.totalRows
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
