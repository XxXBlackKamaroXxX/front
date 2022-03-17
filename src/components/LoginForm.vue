<template>
  <form v-on:submit.prevent="takeUserData">
    <div class="form__element">
      <input class="user__info__input" type="text" placeholder="Login" v-model="email">
    </div>

    <div class="form__element">
      <input class="user__info__input" type="password" placeholder="Password" v-model="password">
    </div>

    <div class="buttons">
      <button class="btn Submit-btn">Submit</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'LoginForm',
  data () {
    return {
      email: '',
      password: '',
      submitEmail: '',
      submitPassword: ''
    }
  },
  methods: {
    async takeUserData () {
      this.submitEmail = this.email
      this.submitPassword = this.password
      this.password = ''
      this.email = ''

      const result = await axios.post('http://localhost:3000/login', {
        email: this.submitEmail,
        password: this.submitPassword
      })
      if (localStorage.getItem('Token')) {
        localStorage.removeItem('Token')
        localStorage.setItem('Token', `${result.data.token}`)
      } else {
        localStorage.setItem('Token', `${result.data.token}`)
      }
      this.$router.push({ name: 'User' })
    }
  }
}
</script>
