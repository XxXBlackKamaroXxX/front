<template>
    <div class="user__data">
        <table class="data__table">
             <tr class="table__header">
                <td>Date</td>
                <td>Login time</td>
                <td>Logout time</td>
                <td>Time spent on system</td>
                <td>Unsuccessful logout reason</td>
            </tr>
            <UserInfoTableElement v-for="info in log" v-bind:key="info.user_id" v-bind:info="info"></UserInfoTableElement>
        </table>
    </div>
</template>

<script>
import UserInfoTableElement from './UserInfoTableElement.vue'

export default {
  name: 'UserInfoTable',
  components: {
    UserInfoTableElement
  },
  props: [
    'log'
  ]
}
</script>

<style scoped>
    .user-table {
        padding: 1rem 2rem;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.25rem;
    }
    .user-table_element {
        padding: 0.5rem 0.5rem;
        display: flex;
        justify-content: space-between;
        background-color: rgb(192, 170, 170);
        border-radius: 1rem;
    }
    .user-table_element p {
        min-width: 5rem;
    }
    .user-table_element p:first-child {
        min-width: 4rem;
    }
</style>
