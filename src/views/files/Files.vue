<template>
  <div class="__main_container">
    <select>
      <option>/</option>
      <option>video</option>
      <option>image</option>
    </select>
    <input type="file" value="" id="file"/>
    <button type="button" @click="uploadConfig">上传</button>
  </div>
</template>

<script>
import { uploadFile } from '../../api/file'
export default {
  name: 'Files',
  data () {
    return {
      file: null
    }
  },
  methods: {
    uploadConfig (e) {
      const formData = new FormData()
      formData.append('file', e.target.files[0])
      formData.append('path', '/video')
      uploadFile(formData).then(res => {

      })
    }
  }
}
</script>
