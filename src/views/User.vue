<template>
    <div>
        <UserPage v-if="!this.isAdmin" v-bind:user="user" />
        <AdminPage v-else v-bind:user="user" />
    </div>
</template>

<script>
import axios from 'axios'
import UserPage from '../components/UserComp.vue'
import AdminPage from '../views/AdminWindow.vue'

const ADMIN_ROLE = 1

export default {
  name: 'UserAss',
  data () {
    return {
      user: '',
      isAdmin: true
    }
  },
  async mounted () {
    const result = await axios.post('http://localhost:3000/takeUser', {
      token: localStorage.getItem('Token')
    })
    console.log(result)
    this.user = result.data.firstname
    if (result.data.user_role_id === ADMIN_ROLE) {
      this.isAdmin = true
    } else {
      this.isAdmin = false
    }
  },
  components: {
    UserPage,
    AdminPage
  }
}
</script>
