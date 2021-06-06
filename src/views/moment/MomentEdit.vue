<template>
  <div>
    <div id="editorSection"></div>
<!--    <el-form>-->
<!--      <el-form-item>-->
<!--        <editor :initialValue="moment.content"-->
<!--                :options="editorOptions"-->
<!--                :initialEditType="markdown"-->
<!--                @focus="onEditorFocus"-->
<!--                @blur="onEditorBlur"-->
<!--                @change="onEditorChange"-->
<!--                @stateChange="onEditorStateChange"-->
<!--                @load="onEditorLoad"-->
<!--                height="500px" previewStyle="vertical"></editor>-->
<!--      </el-form-item>-->
<!--      <el-form-item>-->
<!--        允许评论<input type="checkbox" v-model="moment.allowComment" /><br/>-->
<!--      </el-form-item>-->
<!--      <el-form-item>-->
<!--        私人动态<input type="checkbox" v-model="moment.private" /> <br/>-->
<!--      </el-form-item>-->
<!--      <el-form-item>-->
<!--        <button @click="submitMoment">保存</button>-->
<!--      </el-form-item>-->
<!--    </el-form>-->
  </div>
</template>

<script>
import { saveMoment, getMoment } from '../../api/moment'
export default {
  name: 'MomentEdit',
  data () {
    return {
      editor: null
    }
  },
  mounted () {
    console.log(this.$route.params)
    getMoment(this.$route.params.id).then(res => {
      this.moment.content = res.content
    })
  },
  // data () {
  //   return {
  //     moment: {
  //       content: '',
  //       allowComment: true,
  //       private: false
  //     },
  //     editorOptions: {
  //       hideModeSwitch: true,
  //       language: 'zh-CN',
  //       toolbarItem: [
  //         'heading',
  //         'bold',
  //         'italic',
  //         'strike',
  //         'divider',
  //         'hr',
  //         'quote',
  //         'divider',
  //         'ul',
  //         'ol',
  //         'task',
  //         'indent',
  //         'outdent',
  //         'divider',
  //         'table',
  //         'image',
  //         'link',
  //         'divider',
  //         'code',
  //         'codeblock'
  //       ],
  //       initialEditType: 'markdown'
  //     }
  //   }
  // },
  methods: {
    submitMoment: function () {
      saveMoment(this.moment).then(res => {
        this.$message({
          type: 'success',
          message: '保存成功!'
        })
        this.$router.push('/console/moments')
      })
    }
  }
}
</script>

<style scoped>

</style>
