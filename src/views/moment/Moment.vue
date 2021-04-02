<template>
  <div>
    <editor :initialValue="$store.state.moment.content"
            :options="editorOptions"
            :initialEditType="markdown"
            @focus="onEditorFocus"
            @blur="onEditorBlur"
            @change="onEditorChange"
            @stateChange="onEditorStateChange"
            @load="onEditorLoad"
    height="500px" previewStyle="vertical"></editor>
  </div>
</template>

<script>
import 'codemirror/lib/codemirror.css'
import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor } from '@toast-ui/vue-editor'
export default {
  name: 'Moment',
  mounted () {
    console.log(this.$route.params)
    this.$store.dispatch('getMoment', this.$route.params.id)
  },
  components: {
    editor: Editor
  },
  data () {
    return {
      data: 'hello world',
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
