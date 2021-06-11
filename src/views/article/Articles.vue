<template>
  <div class="page-wrapper">
    <div class="container-xl">
      <div class="page-header d-print-none">
        <div class="row align-items-center">
          <div class="col-md">
            <div class="form-group">
              <input type="text" v-model="queryParam.query" class="form-control" placeholder="关键字">
            </div>
          </div>
          <div class="col-md">
            <select v-model="queryParam.categoryId" class="form-select">
              <option value="1">life</option>
            </select>
          </div>
          <div class="col-md">
            <select v-model="queryParam.categoryId" class="form-select">
              <option value="1">life</option>
            </select>
          </div>
          <div class="col-md">
            <button type="button" @click="handleQuery" class="btn btn-primary">查询</button>
            <button type="button" @click="newArticle" style="margin-left: 16px;" class="btn btn-primary">新增</button>
          </div>
        </div>
      </div>
    </div>
    <div class="page-body">
      <div class="container-xl">
        <div class="row">
          <div class="col-12">
          <div class="card">
            <div class="table-responsive">
              <table class="table table-vcenter card-table">
                <thead>
                  <tr>
                    <th>标题</th>
                    <th>发布时间</th>
                    <th>分类</th>
                    <th>标签</th>
                    <th>状态</th>
                    <th>私人</th>
                    <th>评论状态</th>
                    <th>评论</th>
                    <th>点击</th>
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="article in articles" :key="article.id">
                    <td><a href="" v-text="article.title"></a> </td>
                    <td> {{ article.postAt != null ? article.postAt : '' }}</td>
                    <td> {{ article.category.name }}</td>
                    <td>
                      <span class="badge bg-light" v-for="tag in article.tags" v-text="tag.name" :key="tag.id"></span>
                    </td>
                    <td>
                      <span v-if="article.status === 'POSTED'" class="badge bg-success">已发布</span>
                      <span v-else-if="article.status === 'SCHEDULED'" class="badge bg-info">定时</span>
                      <span v-else class="badge bg-warning">草稿</span>
                    </td>
                    <td>
                      <span class="text-warning" v-if="article.private">
                        私有
                      </span>
                      <span v-else>
                        公开
                      </span>
                    </td>
                    <td> {{ article.allowComment }}</td>
                    <td> {{ article.hits }}</td>
                    <td> {{ article.comments }}</td>
                    <td>
                      <a @click="handleEdit(article.id)" href="javascript:void(0);" style="margin-right: 8px;">
                        编辑
                      </a>
                      <a class="text-danger" @click="handleDelete(article.id)" href="javascript:void(0);">
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
        <div class="row">
          <div class="col-12">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="javascript:void(0);" @click="toPage(queryParam.page-1)" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item" v-bind:class="page === queryParam.page ? 'active': ''" v-for="(page, index) in totalPage" :key="index">
                  <a class="page-link" href="javascript:void(0);" @click="toPage(page)" v-text="page">1</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="javascript:void(0);" @click="toPage(queryParam.page+1)" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
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
      queryParam: {
        page: 0,
        query: '',
        state: '',
        categoryId: ''
      },
      totalPage: 0
    }
  },
  mounted () {
    article.getArticleList().then(res => {
      this.articles = res.data
      this.totalPage = res.totalPage
      this.queryParam.page = res.page
    })
  },
  methods: {
    handleEdit (obj) {
      this.$router.push(`/article/${obj}/edit`)
    },
    handleQuery (obj) {
      console.log(obj)
    },
    handleDelete (obj) {
      console.log(obj)
    },
    toPage (page) {
      this.queryParam.page = page
      article.getArticleList(this.queryParam).then(res => {
        this.articles = res.data
        this.totalPage = res.totalPage
        this.queryParam.page = res.page
      })
    },
    newArticle () {
      this.$router.push('/article/create')
    }
  }
}
</script>
