<template>
  <tr class="user_data-table_element">
    <td>{{info.logsDate}}</td>
    <td>{{info.loginTime}}</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</template>

<script>

export default {
  name: 'UserInfoTableElement',
  props: {
    info: {
      type: Object
    }
  }
}
</script>
