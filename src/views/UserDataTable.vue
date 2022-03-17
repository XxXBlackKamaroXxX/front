<template>
  <div class="user__data">
    <table class="data__table">
      <tr class="table__header">
        <td>Name</td>
        <td>Last Name</td>
        <td>Age</td>
        <td>User Role</td>
        <td>Email Address</td>
        <td>Office</td>
      </tr>
    </table>
    <div class="table__scroll">
      <table class="data__table">
        <UserDataTableElement v-for="dt in data" v-bind:key="dt.user_id" v-bind:dt="dt"></UserDataTableElement>
      </table>
    </div>
  </div>
</template>

<script>
import UserDataTableElement from '../components/adminComp/UserDataTableElement.vue'

export default {
  name: 'UserDataTable',
  components: {
    UserDataTableElement
  },
  props: [
    'data'
  ]
}
</script>

<style>
   .user__data {
      padding: 0 1rem;
      font-size: 1.2rem;
   }

   .data__table {
      width: 100%;

      text-align: center;
      border-collapse: collapse;
   }

   .data__table td {
   min-width: 250px;
   }

   .data__table.manage td {
   min-width: 100px;
   }

   .table__header {
   font-weight: bold;
   }

   .table__header td {
   padding: 0.3rem 0;

   border: 1px solid black;
   }

   .table__scroll {
   max-height: 600px;

   border: 1px solid black;
   border-top: none;

   overflow-y: auto;
   }
</style>
