<template>
  <div class="blackIpContainer">
    <div>
      <button type="button">新增</button>
    </div>
    <div>
      <table>
        <thead>
        <tr>
          <th>序号</th>
          <th>ip</th>
          <th>创建时间</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="blackip in datalist" :key="blackip.id">
          <td> {{ blackip.id }} </td>
          <td> {{ blackip.ip }} </td>
          <td> {{ blackip.createAt}} </td>
          <td>
            <a href="javascript:void(0)">删除</a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlackIps',
  data () {
    return {
      datalist: [{
        id: 1,
        ip: '127.0.0.1',
        createAt: '2021年03月28日12:11:02'
      },
      {
        id: 2,
        ip: '127.0.0.1',
        createAt: '2021年03月28日12:11:02'
      },
      {
        id: 3,
        ip: '127.0.0.1',
        createAt: '2021年03月28日12:11:02'
      }]
    }
  }
}
</script>
<style scoped lang="scss">
  .blackIpContainer {
    display: flex;
    width: 100%;
    table {
      width: 100%;
    }
  }
</style>
