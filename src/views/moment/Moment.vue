<template>
    <div>
      <div id="vditor"></div>
<!--      <textarea name="" id="vditor" cols="30" rows="10"></textarea>-->
      <el-button type="primary"  @click="submitMoment">保存</el-button>
      <button type="button" @click="getValue"> 获取内容</button>
    </div>
<!--    <el-form ref="form" :model="moment" onsubmit="return false">-->
<!--      <el-form-item>-->
<!--        <el-input id="editor" type="textarea" v-model="moment.content"></el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="评论权限">-->
<!--        <el-switch-->
<!--          v-model="moment.allowComment">-->
<!--        </el-switch>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="是否私人">-->
<!--        <el-switch v-model="moment.private">-->
<!--        </el-switch>-->
<!--      </el-form-item>-->
<!--      <el-button type="primary"  @click="submitMoment">保存</el-button>-->
<!--    </el-form>-->
</template>

<script>
import Vditor from 'vditor'
import 'vditor/src/assets/scss/index.scss'
import { saveMoment } from '../../api/moment'
export default {
  name: 'Moment',
  mounted () {
    this.contentEditor = new Vditor('vditor', {
      height: 360,
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
        this.contentEditor.setValue('hello, Vditor + Vue!')
      }
    })
    // console.log(this.$route.params)
    // this.$store.dispatch('getMoment', this.$route.params.id)
  },
  data () {
    return {
      contentEditor: '',
      moment: {
        content: '',
        allowComment: true,
        private: false
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
    getValue () {
      alert(this.contentEditor.getValue())
    }
  }
}
</script>

<style scoped>

</style>
