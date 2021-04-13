<template>
  <div>
    <form onsubmit="return false">
      <textarea id="content" rows="30" cols="50" name="content" v-model="moment.content"></textarea><br/>
      允许评论<input type="checkbox" v-model="moment.allowComment" /><br/>
      私人动态<input type="checkbox" v-model="moment.private" /> <br/>
      <button @click="saveComment">保存</button>
    </form>
  </div>
</template>

<script>
import { saveMoment } from '../../api/moment'
export default {
  name: 'Moment',
  mounted () {
    // console.log(this.$route.params)
    // this.$store.dispatch('getMoment', this.$route.params.id)
  },
  data () {
    return {
      moment: {
        content: '',
        allowComment: true,
        private: false
      }
    }
  },
  methods: {
    saveComment: function () {
      console.log(this.moment)
      saveMoment(this.moment).then(res => {
        this.$router.push('/console/moments')
      })
    }
  }
}
</script>

<style scoped>

</style>
