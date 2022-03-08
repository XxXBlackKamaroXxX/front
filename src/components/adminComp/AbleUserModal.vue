<template>
  <div class="modal" v-if="comeUp">
    <div class="modal__content">
      <form>
        <div class="form__element">
          <span>Email address</span> <input class="user__info__input" type="email" placeholder="Email" v-model="email">
        </div>

        <div class="buttons">
            <div class="system__buttons">
              <button class="btn enable" id="enableUserBtn" @click.prevent="enableUser">Enable</button>
              <button class="btn disable" id="disableUserBtn" @click.prevent="disableUser">Disable</button>
            </div>
          <button class="btn cancel" @click.prevent="hideModal">Close</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AbleUserModal',
  props: {
    comeUp: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      email: ''
    }
  },
  methods: {
    hideModal () {
      this.$emit('update:comeUp', false)
    },
    async enableUser () {
      this.submitEmail = this.email

      this.email = ''

      console.log(this.submitEmail)

      const result = await axios.post('http://localhost:3000/unBanUser', {
        token: localStorage.getItem('Token'),
        userToUnBan: {
          email: this.submitEmail
        }
      })
      console.log(result)
    },
    async disableUser () {
      this.submitEmail = this.email

      this.email = ''

      console.log(this.submitEmail)

      const result = await axios.post('http://localhost:3000/BanUser', {
        token: localStorage.getItem('Token'),
        userToBan: {
          email: this.submitEmail
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
    margin: 3rem 2rem 10rem;
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
    padding: 0.5rem;
  }
  .system__buttons {
    display: flex;
    justify-content: space-around;
    margin-bottom: 10rem;
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
  .enable:hover {
    background: rgb(248, 244, 22);
  }
  .disable:hover {
    background: rgb(250, 76, 105);
  }
  .cancel {
    display: block;
    margin: auto;
  }
</style>
