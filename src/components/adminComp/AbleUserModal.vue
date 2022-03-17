<template>
  <div class="modal" v-if="comeUp">
    <div class="modal__content">
      <form>
        <div class="form__element">
          <input class="user__info__input" type="email" placeholder="Email" v-model="email">
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
