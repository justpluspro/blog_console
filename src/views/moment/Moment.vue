<template>
    <div class="page-wrapper">
      <div class="page-body">
        <div class="container-xl">
          <div id="vditor"></div>
          <button type="button" @click="saveMoment()" class="btn btn-primary">保存</button>
        </div>
      </div>
    </div>
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
