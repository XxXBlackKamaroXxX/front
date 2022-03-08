<template>
  <div class="LoginForm">
    <form v-on:submit.prevent="takeUserData">
      <div>
        <span>Login</span><input type="text" placeholder="Login" v-model="email">
      </div>
      <div>
        <span>Password</span><input type="password" placeholder="Password" v-model="password">
      </div>
          <button class="Submit-btn">Submit</button>
    </form>
  </div>
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

<style scoped>
  form {
    width: 400px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  form div {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 30px;
  }
  form div input{
    padding: 2px 10px ;
  }
  form button {
      display: block;
      width: 100px;
      margin: auto;
  }
</style>
