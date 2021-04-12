<template>
  <div style="padding: 16px; background-color: #ffffff;">
    <el-form>
      <el-form-item>
        <el-input size="small" placeholder="输入文章标题"></el-input>
      </el-form-item>
      <el-form-item>
        <editor :initialValue="$store.state.moment.content"
                :options="editorOptions"
                :initialEditType="markdown"
                @focus="onEditorFocus"
                @blur="onEditorBlur"
                @change="onEditorChange"
                @stateChange="onEditorStateChange"
                @load="onEditorLoad"
                height="500px" previewStyle="vertical"></editor>
      </el-form-item>
      <el-form-item size="small">
        <el-button type="primary" @click="dialog = true">发布</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>

    <el-drawer
      title="基本信息"
      :before-close="handleClose"
      :visible.sync="dialog"
      direction="rtl"
      custom-class="demo-drawer"
      ref="drawer">
      <div class="demo-drawer__content">
        <el-form :model="article">
          <el-form-item label="活动名称" :label-width="formLabelWidth">
            <el-input v-model="article.alias" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" :label-width="formLabelWidth">
            <el-select v-model="article.category" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? '提交中 ...' : '确 定' }}</el-button>
          <el-button @click="cancelForm">取 消</el-button>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
// import article from '../../api/article'
import 'codemirror/lib/codemirror.css'
import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor } from '@toast-ui/vue-editor'
export default {
  name: 'NewArticle',
  components: {
    editor: Editor
  },
  data () {
    return {
      formLabelWidth: '80px',
      article: {
        title: '',
        allowComment: '',
        tags: [],
        category: {
          id: ''
        },
        alias: ''
      },
      dialog: false,
      editorOptions: {
        hideModeSwitch: true,
        language: 'zh-CN',
        toolbarItem: [
          'heading',
          'bold',
          'italic',
          'strike',
          'divider',
          'hr',
          'quote',
          'divider',
          'ul',
          'ol',
          'task',
          'indent',
          'outdent',
          'divider',
          'table',
          'image',
          'link',
          'divider',
          'code',
          'codeblock'
        ]
      }
    }
  },
  mounted () {

  },
  methods: {
    handleClose (done) {
      if (this.loading) {
        return
      }
      this.$confirm('确定要提交表单吗？')
        .then(_ => {
          this.loading = true
          this.timer = setTimeout(() => {
            done()
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false
            }, 400)
          }, 2000)
        })
        .catch(_ => {})
    },
    cancelForm () {
      this.loading = false
      this.dialog = false
      clearTimeout(this.timer)
    },
    onEditorLoad () {
      console.log('编辑器已经加载完成')
    },
    onEditorFocus () {
      console.log('编辑器获取到焦点')
    },
    onEditorBlur () {
      console.log('编辑器失去焦点')
    },
    onEditorChange () {
      console.log('编辑器改变了')
    },
    onEditorStateChange () {
      console.log('编辑器状态改变了')
    }
  }
}
</script>
