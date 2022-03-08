<template>
 <div class="modal" v-if="appear">
    <div class="modal__content">
      <form @submit.prevent="changeRole">
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
          <span>Role</span>

          <div class="radio__buttons">

            <div class="radio">
              <input class="user__info__radio" type="radio" id="user_role" name="user" value="User" v-model="role">
              <label class="label" for="user_role">User</label>
            </div>

            <div class="radio">
              <input class="user__info__radio" type="radio" id="admin_role" name="admin" value="Administrator" v-model="role">
              <label class="label" for="admin_role">Administrator</label>
            </div>

          </div>

        </div>

        <div class="buttons">
          <button class="btn save">Apply</button>
          <button class="btn cancel" @click.prevent="hide">Close</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditRoleModal',
  props: {
    appear: {
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
      role: ''
    }
  },
  methods: {
    hide () {
      this.$emit('update:appear', false)
    },
    async changeRole () {
      this.submitEmail = this.email
      this.submitfirstname = this.firstname
      this.submitlastname = this.lastname
      this.submitOfficeTitle = this.officeTitle
      this.submitRole = this.role

      this.email = ''
      this.firstname = ''
      this.lastname = ''
      this.officeTitle = ''
      this.role = ''

      console.log(this.submitEmail)
      console.log(this.submitfirstname)
      console.log(this.submitlastname)
      console.log(this.submitOfficeTitle)
      console.log(this.submitRole)
      const result = await axios.post('http://localhost:3000/ChangeRole', {
        token: localStorage.getItem('Token'),
        editingUser:
        {
          email: this.submitEmail,
          firstname: this.submitfirstname,
          lastname: this.submitlastname,
          officeTitle: this.submitOfficeTitle,
          role: this.submitRole
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
  .radio__buttons {
    display: flex;
    flex-direction: column;
    min-width: 15rem;
  }
  .radio:first-child {
    margin-bottom: 1rem;
  }
  .user__info__radio {
    zoom: 1.5;
    vertical-align: middle;
  }
  .label {
    padding-left: 1rem;
    font-size: 1.25rem;
    vertical-align: middle;
    transition: color 0.5s;
  }
  .radio .label:hover {
    cursor: pointer;
    color: rgb(27, 11, 246);
  }
  .radio:first-of-type .label:hover {
    color: rgb(235, 4, 54);
  }
  .radio input[type = "radio"]:focus + label {
    color: rgb(27, 11, 246);
  }
  .radio:first-of-type input[type = "radio"]:focus + label {
    color: rgb(235, 4, 54);
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
