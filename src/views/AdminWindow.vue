<template>
    <div class="admin">
        <div class="btnsBlock">
            <button class="btn addUserBtn" @click="showAddUserModal">Add User</button>
            <AddUserModal v-model:show="addUserModalVisible"></AddUserModal>
            <button class="btn" @click="ManageFlightRedirect">Manage Flight</button>
            <button class="btn" @click="SearchFlightsRedirect">Search Flights</button>
            <button class="btn exitBtn" @click="adminLogout">Exit</button>
        </div>

        <div class="offices">
            <span class="text">Office:</span>
            <select class="select" v-model="office">
                <option>All offices</option>
                <option>Abu dhabi</option>
                <option>Cairo</option>
                <option>Bahrain</option>
                <option>Doha</option>
                <option>Riyadh</option>
            </select>

            <button class="btn" @click="showInOffice">Show in Office</button>

            <span class="text">Access Type:</span>
            <select class="select" v-model="access">
                <option>Any</option>
                <option>Granted</option>
                <option>Banned</option>
            </select>

            <button class="btn" @click="showByAccess">Show by access</button>
        </div>

        <div class="user__management">
          <button class="btn change__role" @click="showEditRoleModal">Change Role</button>
          <EditRoleModal v-model:appear="editRoleModalVisible"></EditRoleModal>
          <button class="btn login__status" @click="showAbleUserModal">Enable/Disable Login</button>
          <AbleUserModal v-model:comeUp="ableUserModalVisible"></AbleUserModal>
        </div>
        <Table v-bind:data="users"></Table>
    </div>
</template>

<script>
import Table from '../views/UserDataTable.vue'
import AddUserModal from '../components/adminComp/AddUserModal.vue'
import EditRoleModal from '../components/adminComp/EditRoleModal.vue'
import AbleUserModal from '../components/adminComp/AbleUserModal.vue'
import axios from 'axios'
export default {
  components: {
    Table,
    AddUserModal,
    EditRoleModal,
    AbleUserModal
  },
  data () {
    return {
      user: null,
      users: null,
      usersData: null,
      addUserModalVisible: false,
      editRoleModalVisible: false,
      ableUserModalVisible: false,
      office: 'All offices',
      access: 'Any'
    }
  },
  async mounted () {
    const users = await axios.post('http://localhost:3000/takeAdminPageData', {
      token: localStorage.getItem('Token')
    })
    this.users = users.data.allUsers
    console.log(this.users)
    this.usersData = users.data.allUsers
    this.user = users.data.user
    if (this.users) {
      for (let i = 0; i < this.users.length; ++i) {
        const now = new Date()
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
        const birthday = this.users[i].birthdate.split('-')
        const dob = new Date(birthday[0], birthday[1] - 1, birthday[2][0] * 10 + birthday[2][1])
        const dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate())
        this.users[i].age = today.getFullYear() - dob.getFullYear()
        if (today < dobnow) {
          this.users[i].age = this.users[i].age - 1
        }
      }
    }
  },
  methods: {
    async adminLogout () {
      const result = await axios.post('http://localhost:3000/Exit', { token: localStorage.getItem('Token') })
      if (result) {
        localStorage.removeItem('Token')
        this.$router.push({ name: 'Login' })
      } else {
        console.log(result)
      }
    },
    showAddUserModal () {
      this.addUserModalVisible = true
    },
    showEditRoleModal () {
      this.editRoleModalVisible = true
    },
    showAbleUserModal () {
      this.ableUserModalVisible = true
    },
    ManageFlightRedirect () {
      this.$router.push({ name: 'manageFlight' })
    },
    SearchFlightsRedirect () {
      this.$router.push({ name: 'searchFlights' })
    },
    showInOffice () {
      const usersInOffice = []
      if (this.office !== 'All offices') {
        for (let i = 0; i < this.usersData.length; ++i) {
          if (this.usersData[i].title === this.office) {
            usersInOffice.push(this.usersData[i])
          }
        }
        this.users = usersInOffice
      } else {
        this.users = this.usersData
      }
    },
    showByAccess () {
      const usersAccess = []
      if (this.access !== 'Any') {
        let accessType
        if (this.access === 'Banned') {
          accessType = 0
        } else {
          accessType = 1
        }
        for (let i = 0; i < this.usersData.length; ++i) {
          if (this.usersData[i].active === accessType) {
            usersAccess.push(this.usersData[i])
          }
        }
        this.users = usersAccess
      } else {
        this.users = this.usersData
      }
    }
  }
}
</script>

<style scoped>
    .btnsBlock {
      margin-bottom: 2rem;
      padding: 1.5rem .5rem;
      border-bottom: 0.1rem solid black;
    }

    .btnsBlock > .btn {
      margin-right: 2rem;
    }

    .offices {
      display: flex;
      justify-content: space-around;
    }

    .text {
      font-size: 1.5rem;
      padding: 0 1rem;
    }

    .select {
      width: 10rem;
      font-size: 1.2rem;
    }

    .user__management {
      margin-bottom: 1rem;
      padding: 1rem;
      display: flex;
      justify-content: space-around;
    }

    .change__role:hover {
      background: rgb(147, 245, 147);
    }

    .login__status:hover {
      background: rgb(253, 132, 132);
    }
</style>
