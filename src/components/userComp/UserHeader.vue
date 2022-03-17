<template>
    <div class="header">
        <button class="exit__btn" @click="userLogout">Exit</button>
        <hr>
        <p class="header__greetings">Hi <strong>{{userdt}}</strong>, Welcome to AMONIC Airlanes</p>
        <div class="header__logs-info">
            <p>Time spent on system : 00:19:03</p>
            <p>Number of crashes: 1</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UserHeader',
  methods: {
    async userLogout () {
      const result = await axios.post('http://localhost:3000/Exit', { token: localStorage.getItem('Token') })
      if (result) {
        localStorage.removeItem('Token')
        this.$router.push({ name: 'Login' })
      } else {
        console.log(result)
      }
    }
  },
  props: ['userdt']
}
</script>

<style scoped>

    .header {
      width: 100%;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      padding: 1rem 2rem;
      overflow: hidden;
    }

    .exit__btn {
        margin-bottom: 1rem;
        background: none;
        border: none;
        font-size: 1rem;
    }

    hr {
        margin-bottom: 1rem;
        border-style: dashed;
        border-width: 0.13rem;
        margin-inline-start: -1000rem;
        margin-inline-end: -1000rem;
    }

    .exit__btn:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    .header__greetings {
        margin-bottom: 1rem;
    }

    .header__logs-info {
        display: flex;
        justify-content:space-evenly;
    }

    .header__logs-info p:first-child {
        padding-left: 25%;
    }
</style>
