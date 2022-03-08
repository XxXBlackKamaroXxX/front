<template>
  <div class="user__data">
    <table class="data__table">
      <tr>
        <td>Name</td>
        <td>Last Name</td>
        <td>Age</td>
        <td>User Role</td>
        <td>Email Address</td>
        <td>Office</td>
      </tr>
    </table>
    <UserDataTableElement v-for="dt in data" v-bind:key="dt.user_id" v-bind:dt="dt"></UserDataTableElement>
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

<style scoped>
.user__data {
       padding: 0 1rem;
       font-size: 1.2rem;
    }
    .data__table {
        width: 100%;
        text-align: center;
        border-collapse: collapse;
    }
    .data__table tr td {
        min-width: 5rem;
    }
    td {
        border: 0.05rem solid black;
    }
</style>
