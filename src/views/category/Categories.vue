<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="分类名称">
        <el-input v-model="query" placeholder="关键字"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button type="primary" @click="onAdd">新增</el-button>
      </el-form-item>
    </el-form>

    <el-table
      :data="categories"
      border
      style="width: 100%">
      <el-table-column
        prop="name"
        label="名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="createAt"
        label="创建时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="modifyAt"
        label="修改时间">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import http from '../../util/http'
export default {
  name: 'Categories',
  data () {
    return {
      query: '',
      categories: []
    }
  },
  mounted () {
    http.get('api/categories').then(res => {
      console.log(res.data)
      this.categories = res.data
    })
  },
  methods: {
    onSubmit: function () {
      http.get('api/categories?query=' + this.query).then(res => {
        this.categories = res.data
      })
    },
    onAdd: function () {
      console.log('add')
    }
  }
}
</script>
