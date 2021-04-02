<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="关键字">
        <el-input v-model="query" size="small" placeholder="关键字"></el-input>
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="categoryId" placeholder="分类" size="small">
          <el-option :label="category.name" :value="category.id" v-for="category in $store.state.categoryList"
                     :key="category.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="状态">
        <el-select v-model="state" placeholder="状态" size="small">
          <el-option label="已发布" value="POSTED"></el-option>
          <el-option label="草稿" value="DRAFT"></el-option>
          <el-option label="计划中" value="SCHEDULED"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small" icon="el-icon-search" @click="handleQuery">查询</el-button>
        <el-button type="primary" size="small" icon="el-icon-plus">新增</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="articles">
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="postAt" label="发布时间"></el-table-column>
      <el-table-column prop="allowComment" label="评论"></el-table-column>
      <el-table-column prop="hits" label="点击"></el-table-column>
      <el-table-column prop="comments" label="评论数"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleEdit(scope.row)" type="primary" icon="el-icon-edit" size="mini"></el-button>
          <el-button @click="handleDelete(scope.row)" type="danger" icon="el-icon-delete" size="mini"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="pager" :total="totalRows" @current-change="toPage">
    </el-pagination>
  </div>
</template>

<script>
import article from '../../api/article'
export default {
  name: 'Articles',
  data () {
    return {
      articles: [],
      article: {
        title: '',
        content: '',
        alias: ''
      },
      categoryId: '',
      state: '',
      totalRows: 0,
      page: 1,
      query: ''
    }
  },
  mounted () {
    if (this.$store.state.categoryList.length === 0) {
      this.$store.dispatch('getCategoryList')
    }
    article.getArticleList()
  },
  methods: {
    handleEdit (obj) {
      console.log('handleEdit' + obj)
    },
    handleQuery (obj) {
      console.log(obj)
    },
    handleDelete (obj) {
      console.log(obj)
    },
    toPage (page) {
      console.log(page)
    }
  }
}
</script>
