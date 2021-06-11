<template>
  <div class="page-wrapper">
    <div class="page-body">
      <div class="container-xl">
        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <input type="text" placeholder="请输入标题" class="form-control" v-model="article.title">
            </div>
          </div>
          <div class="col-12 mt-3">
            <div id="editor"></div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <span class="badge bg-warning">life</span>
          </div>
          <div class="col">
            <input type="text" class="form-control" placeholder="标签">
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <div class="row">
              <div class="col-md">
                <select class="form-select" v-model="article.category.id">
                  <option v-for="(data, index) in categories" :key="index" v-bind:value="data.id"
                          v-bind:selected="categorySelectPos === data.id ? 'selected' : ''">  {{ data.name}} </option>
                </select>
              </div>
              <div class="col-md">
                <select @change="stateChange" class="form-select" v-model="article.status">
                  <option selected value="POST">发布</option>
                  <option value="SCHEDULED">计划中</option>
                  <option value="DRAFT">草稿</option>
                </select>
              </div>
              <div class="col-md" v-if="displayPostAt">
                <input type="text" v-model="article.postAt" class="form-control">
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-12">
            <div class="form-check form-switch">
              <input class="form-check-input" @change="commentChange" v-bind:checked="article.allowComment === true ? 'checked': ''" id="startComment" type="checkbox">
              <label class="form-check-label" for="startComment">开启评论</label>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" @change="privateChange" v-bind:checked="article.private === true ? 'checked': ''" id="startPrivate" type="checkbox">
              <label class="form-check-label" for="startPrivate">私人动态</label>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-12">
            <button class="btn btn-success" type="button" @click="saveArticle">提交</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import article from '../../api/article'
import { getCategories } from '../../api/category'
import Vditor from 'vditor'
import 'vditor/src/assets/scss/index.scss'

export default {
  name: 'NewArticle',
  data () {
    return {
      contentEditor: '',
      categorySelectPos: 1,
      categories: [],
      displayPostAt: false,
      article: {
        title: '',
        content: '',
        summary: '',
        alias: '',
        status: 'POST',
        allowComment: true,
        private: false,
        postAt: '',
        tags: [],
        category: {
          id: ''
        }
      }
    }
  },
  mounted () {
    getCategories().then((res) => {
      this.categories = res
    })
    this.contentEditor = new Vditor('editor', {
      height: 500,
      preview: {
        hljs: {
          enable: true,
          lineNumber: true // 启用行号
        }
      },
      toolbarConfig: {
        pin: true
      },
      cache: {
        enable: false
      },
      after: () => {
        this.contentEditor.setValue('hello world')
      }
    })
  },
  methods: {
    saveArticle () {
      this.article.content = this.contentEditor.getValue()
      article.saveArticle(this.article).then(res => {
        console.log(res)
        this.$router.push('/article/index')
      })
    },
    stateChange (val) {
      console.log('状态变更' + val.target.value)
      if (val.target.value === 'SCHEDULED') {
        this.displayPostAt = true
        this.article.postAt = new Date()
      } else {
        this.displayPostAt = false
        this.article.postAt = ''
      }
    },
    privateChange (val) {
      this.article.private = val.target.checked
    },
    commentChange (val) {
      this.article.allowComment = val.target.checked
    }
  }
}
</script>
