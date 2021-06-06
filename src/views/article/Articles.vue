<template>
  <div class="mt-3">
    <div class="row">
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
    <div class="row mt-3">
      <div class="col-12">
        <table class="table table-responsive table-bordered">
        <thead>
        <tr>
          <th>标题</th>
          <th>创建时间</th>
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
            <td> {{ article.createAt }}</td>
            <td> <span class="badge bg-secondary">{{ article.category.name }}</span></td>
            <td>
              <span class="badge bg-light" v-for="tag in article.tags" v-text="tag.name" :key="tag.id"></span>
            </td>
            <td>
              <span v-if="article.status === 'POSTED'" class="badge bg-success">已发布</span>
              <span v-else-if="article.status === 'SCHEDULED'" class="badge bg-info">定时</span>
              <span v-else class="badge bg-warning">草稿</span>
            </td>
            <td>
              <span v-if="article.private">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-lock" viewBox="0 0 16 16">
                  <path d="M10 7v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V9.3c0-.627.46-1.058 1-1.224V7a2 2 0 1 1 4 0zM7 7v1h2V7a1 1 0 0 0-2 0zM6 9.3v2.4c0 .042.02.107.105.175A.637.637 0 0 0 6.5 12h3a.64.64 0 0 0 .395-.125c.085-.068.105-.133.105-.175V9.3c0-.042-.02-.107-.105-.175A.637.637 0 0 0 9.5 9h-3a.637.637 0 0 0-.395.125C6.02 9.193 6 9.258 6 9.3z"/>
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                </svg>
              </span>
              <span v-else>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-unlock" viewBox="0 0 16 16">
                  <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z"/>
                </svg>
              </span>
            </td>
            <td> {{ article.allowComment }}</td>
            <td> {{ article.hits }}</td>
            <td> {{ article.comments }}</td>
            <td>
              <a @click="handleEdit(article.id)" href="javascript:void(0);" style="margin-right: 8px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
              </a>
              <a @click="handleDelete(article.id)" href="javascript:void(0);">
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
      console.log('handleEdit' + obj)
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
