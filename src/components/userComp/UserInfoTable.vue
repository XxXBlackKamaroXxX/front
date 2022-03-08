<template>
    <div class="user-table">
        <div class="user-table_element">
            <p>Date</p>
            <p>Login time</p>
            <p>Logout time</p>
            <p>Time spent on system</p>
            <p>Unsuccessful logout reason</p>
        </div>
        <UserInfoTableElement v-for="info in log" v-bind:key="info.user_id" v-bind:info="info"></UserInfoTableElement>
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
