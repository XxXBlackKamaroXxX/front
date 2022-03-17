<template>
  <div class="modal" v-if="show">
    <div class="modal__content">
      <form @submit.prevent="addUser">
        <div class="form__element">
          <input class="user__info__input" type="email" placeholder="Email" v-model="email">
        </div>

        <div class="form__element">
          <input class="user__info__input" type="text" placeholder="First name" v-model="firstname">
        </div>

        <div class="form__element">
          <input class="user__info__input" type="text" placeholder="Last name" v-model="lastname">
        </div>

        <div class="form__element">
          <select class="user__info__input select" v-model="officeTitle">
            <option>Select office</option>
            <option>Abu Dhabi</option>
            <option>Cairo</option>
            <option>Bahrain</option>
            <option>Doha</option>
            <option>Riyadh</option>
          </select>
        </div>

        <div class="form__element">
          <input class="user__info__input date-time" type="date" placeholder="Birthdate" v-model="birthdate">
        </div>

        <div class="form__element">
          <input class="user__info__input" type="password" placeholder="Password" v-model="password">
        </div>

        <div class="buttons">
          <button class="btn save">Add</button>
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
