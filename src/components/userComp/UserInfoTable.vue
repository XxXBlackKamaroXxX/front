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
        </table>
        <div class="table__scroll">
          <table class="data__table">
            <UserInfoTableElement v-for="info in log" v-bind:key="info.user_id" v-bind:info="info"></UserInfoTableElement>
          </table>
        </div>
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

<style>

</style>
