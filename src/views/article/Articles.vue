<template>
  <div>
<!--    <el-form :inline="true" class="demo-form-inline">-->
<!--      <el-form-item>-->
<!--        <el-input v-model="query" placeholder="关键字"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item>-->
<!--        <el-select placeholder="选择分类">-->
<!--          <el-option :label="data.name" v-for="data in categories" :value="data.id" :key="data.id"></el-option>-->
<!--        </el-select>-->
<!--      </el-form-item>-->
<!--      <el-form-item>-->
<!--        <el-select placeholder="发布状态">-->
<!--          <el-option :label="data.name" v-for="(data, index) in status" :value="data.state" :key="index"></el-option>-->
<!--        </el-select>-->
<!--      </el-form-item>-->
<!--      <el-form-item>-->
<!--        <el-button type="primary" @click="onSubmit">查询</el-button>-->
<!--        <el-button type="primary" @click="onAdd">新增</el-button>-->
<!--      </el-form-item>-->
<!--    </el-form>-->

    <el-table
      :data="articles"
      border
      style="width: 100%">
      <el-table-column
        prop="title"
        label="标题">
      </el-table-column>
      <el-table-column
        prop="category.name"
        label="分类">
      </el-table-column>
      <el-table-column
        label="标签">
        <template slot-scope="scope">
          <el-tag size="small" type="success" style="margin-left: 8px;" v-for="tag in scope.row.tags" :key="tag.title"> {{tag.name}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="createAt"
        label="创建时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="postAt"
        label="发布时间">
      </el-table-column>
      <el-table-column
        label="状态">
        <template slot-scope="scope">
          <el-tag size="small"> {{scope.row.status}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="hits"
        label="点击量">
      </el-table-column>
      <el-table-column
        prop="comments"
        label="评论量">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import http from '../../util/http'
export default {
  name: 'Articles',
  data () {
    return {
      query: '',
      status: [{
        name: '发布',
        state: 'POSTED'
      }, {
        name: '草稿',
        state: 'DRAFT'
      }, {
        name: '计划中',
        state: 'SCHEDULED'
      }],
      pages: {},
      articles: [],
      categories: []
    }
  },
  mounted () {
    http.get('api/categories').then(res => {
      this.categories = res.data
    })
    http.get('api/articles').then(res => {
      this.articles = res.data.data
    })
  },
  methods: {
    onSubmit: function () {
      console.log('搜索')
    },
    onAdd: function () {
      console.log('新增')
    }
  }
}
</script>
