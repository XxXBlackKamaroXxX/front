<template>
  <tr class="user_data-table_element">
    <td>{{dt.firstname}}</td>
    <td>{{dt.lastname}}</td>
    <td>{{dt.age}}</td>
    <td>{{dt.role}}</td>
    <td>{{dt.email}}</td>
    <td>{{dt.title}}</td>
  </tr>
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

<style>
    .user_data-table_element {
        width: 100%;

        text-align: center;
    }
    .user_data-table_element td {
      padding: 0.25rem 0;
    }
</style>
