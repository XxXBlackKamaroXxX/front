<template>
  <div class="modal" v-if="show">
    <div class="modal__content">
      <form @submit.prevent="addUser">
        <div class="form__element">
          <span>Email address</span> <input class="user__info__input" type="email" placeholder="Email" v-model="email">
        </div>

        <div class="form__element">
          <span>First name</span> <input class="user__info__input" type="text" placeholder="First name" v-model="firstname">
        </div>

        <div class="form__element">
          <span>Last name</span> <input class="user__info__input" type="text" placeholder="Last name" v-model="lastname">
        </div>

        <div class="form__element">
          <span>Office</span>

          <select class="user__info__input" v-model="officeTitle">

            <option>All offices</option>

            <option>Abu Dhabi</option>

            <option>Cairo</option>

            <option>Bahrain</option>

            <option>Doha</option>

            <option>Riyadh</option>
          </select>
        </div>

        <div class="form__element">
          <span>Birthdate</span> <input class="user__info__input" type="date" placeholder="Birthdate" v-model="birthdate">
        </div>

        <div class="form__element">
          <span>Password</span> <input class="user__info__input" type="password" placeholder="Password" v-model="password">
        </div>

        <div class="buttons">
          <button class="btn save">Save</button>
          <button class="btn cancel" @click.prevent="hideModal">Close</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AddUserModal',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      email: '',
      firstname: '',
      lastname: '',
      officeTitle: 'All offices',
      birthdate: '',
      password: ''
    }
  },
  methods: {
    hideModal () {
      this.$emit('update:show', false)
    },
    async addUser () {
      this.submitEmail = this.email
      this.submitfirstname = this.firstname
      this.submitlastname = this.lastname
      this.submitOfficeTitle = this.officeTitle
      this.submitbirthdate = this.birthdate
      this.submitPassword = this.password

      this.email = ''
      this.firstname = ''
      this.lastname = ''
      this.officeTitle = ''
      this.birthdate = ''
      this.password = ''

      console.log(this.submitEmail)
      console.log(this.submitfirstname)
      console.log(this.submitlastname)
      console.log(this.submitOfficeTitle)
      console.log(this.submitbirthdate)
      console.log(this.submitPassword)

      const result = await axios.post('http://localhost:3000/AddUser', {
        token: localStorage.getItem('Token'),
        addingUser:
        {
          email: this.submitEmail,
          firstname: this.submitfirstname,
          lastname: this.submitlastname,
          officeTitle: this.submitOfficeTitle,
          birthdate: this.submitbirthdate,
          password: this.submitPassword
        }
      })
      console.log(result)
    }
  }
}
</script>

<style scoped>
  .modal {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
  }
  .modal__content {
    margin: auto;
    background: white;
    border-radius: 1rem;
    min-height: 35rem;
    min-width: 30rem;
    padding: 1.5rem;
  }
  .form__element {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 3rem 2rem;
  }
  span {
    font-size: 1.5rem;
  }
  .user__info__input {
    margin-left: 1rem;
    padding: 0.5rem;
    min-width: 15rem;
    font-size: 1rem;
  }
  .buttons {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.5rem;
  }
  .btn {
    padding: 0.5rem 2rem;
    background: transparent;
    font-size: 1rem;
    transition: background 1s;
  }
  .btn:hover {
    cursor: pointer;
    background: rgb(202, 202, 202);
  }
</style>
