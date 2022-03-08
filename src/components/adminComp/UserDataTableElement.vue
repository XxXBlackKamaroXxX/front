<template>
  <table class="user_data-table_element">
    <tr>
      <td>{{dt.firstname}}</td>
      <td>{{dt.lastname}}</td>
      <td>{{dt.age}}</td>
      <td>{{dt.role}}</td>
      <td>{{dt.email}}</td>
      <td>{{dt.title}}</td>
    </tr>
  </table>
</template>

<script>

export default {
  name: 'UserDataTableElement',
  props: {
    dt: {
      type: Object
    }
  }
}
</script>

<style scoped>
    .user_data-table_element {
        width: 100%;
        text-align: center;
        border-collapse: collapse;
    }
    .user_data-table_element tr td {
      padding-top: 1rem;
      min-width: 5rem;
    }
</style>
