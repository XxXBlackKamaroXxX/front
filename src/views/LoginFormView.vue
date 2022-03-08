<template>
  <div class="login">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'LoginFormView',
  components: {
    LoginForm
  }
}
</script>

<style scoped>
  .login {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
</style>
