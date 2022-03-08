<template>
    <div class="admin">
        <div class="btnsBlock">
            <button class="btn addUserBtn" @click="showAddUserModal">Add User</button>
            <AddUserModal v-model:show="addUserModalVisible"></AddUserModal>
            <button class="btn exitBtn" @click="adminLogout">Exit</button>
        </div>
        <div class="offices">
            <span class="text">Office:</span>
            <select class="select">
                <option>All offices</option>
                <option>Abu Dhabi</option>
                <option>Cairo</option>
                <option>Bahrain</option>
                <option>Doha</option>
                <option>Riyadh</option>
            </select>
        </div>
        <div class="user__management">
          <button class="button change__role" @click="showEditRoleModal">Change Role</button>
          <EditRoleModal v-model:appear="editRoleModalVisible"></EditRoleModal>
          <button class="button login__status" @click="showAbleUserModal">Enable/Disable Login</button>
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
      addUserModalVisible: false,
      editRoleModalVisible: false,
      ableUserModalVisible: false
    }
  },
  async mounted () {
    const users = await axios.post('http://localhost:3000/takeAdminPageData', {
      token: localStorage.getItem('Token')
    })
    this.users = users.data.allUsers
    this.user = users.data.user
    if (this.users) {
      for (let i = 0; i < this.users.length; ++i) {
        const now = new Date()
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
        const birthday = this.users[i].birthdate.split('-')
        const dob = new Date(birthday[0], birthday[1] - 1, birthday[2])
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
    }
  }
}
</script>

<style scoped>
    .btnsBlock {
      margin-bottom: 0.5rem;
      padding: 1rem 1rem 0.5rem;
      border-bottom: 0.1rem solid black;
    }
    .btn {
      padding: 0;
      margin-right: 1rem;
      border: none;
      background: transparent;
      font-size: 1rem;
    }
    .btn:hover {
      cursor: pointer;
      text-decoration: underline;
    }
    .offices {
      display: flex;
      justify-content: center;
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
    .button {
      padding: 0.2rem 0.5rem;
      background: none;
      border: 0.2rem solid black;
      font-size: 1rem;
      transition: background 1s, border 1s;
    }
    .button:hover {
      border: 0.2rem solid rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
    .button:first-child {
      margin-right: 1rem;
    }
    .change__role:hover {
      background: rgb(147, 245, 147);
    }
    .login__status:hover {
      background: rgb(253, 132, 132);
    }
</style>
