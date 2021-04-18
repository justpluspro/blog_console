<template>
  <div>
    <el-form>
      <el-form-item>
        <editor :initialValue="moment.content"
                :options="editorOptions"
                :initialEditType="markdown"
                @focus="onEditorFocus"
                @blur="onEditorBlur"
                @change="onEditorChange"
                @stateChange="onEditorStateChange"
                @load="onEditorLoad"
                height="500px" previewStyle="vertical"></editor>
      </el-form-item>
      <el-form-item>
        允许评论<input type="checkbox" v-model="moment.allowComment" /><br/>
      </el-form-item>
      <el-form-item>
        私人动态<input type="checkbox" v-model="moment.private" /> <br/>
      </el-form-item>
      <el-form-item>
        <button @click="submitMoment">保存</button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import 'codemirror/lib/codemirror.css'
import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor } from '@toast-ui/vue-editor'
import { saveMoment, getMoment } from '../../api/moment'
export default {
  name: 'MomentEdit',
  components: {
    editor: Editor
  },
  mounted () {
    console.log(this.$route.params)
    getMoment(this.$route.params.id).then(res => {
      this.moment = res
    })
  },
  data () {
    return {
      moment: {
        content: '',
        allowComment: true,
        private: false
      },
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
  methods: {
    submitMoment: function () {
      saveMoment(this.moment).then(res => {
        this.$message({
          type: 'success',
          message: '保存成功!'
        })
        this.$router.push('/console/moments')
      })
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

<style scoped>

</style>
