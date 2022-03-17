<template>
 <div class="modal" v-if="appear">
    <div class="modal__content">
      <form @submit.prevent="changeRole">
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

        <div class="form__element form__element--radio">
          <div class="radio">
            <input class="user__info__radio" type="radio" id="user_role" name="user" value="User" v-model="role">
            <label class="label" for="user_role">User</label>
          </div>

          <div class="radio">
            <input class="user__info__radio" type="radio" id="admin_role" name="admin" value="Administrator" v-model="role">
            <label class="label" for="admin_role">Admin</label>
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
      officeTitle: 'Select office',
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

<style>
  .modal {
    display: flex;

    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  .modal__content {
    margin: auto;
    background: white;
    border-radius: .5rem;
    min-width: 35rem;
    padding: 1.5rem 5rem;
  }

  .form__element {
    margin-bottom: 1rem;
  }

  .form__element::after{
    content: "";
    display: block;
    width: 100%;
    height: 1px;

    background: #777;
  }

  .form__element--radio {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .form__element.form__element--radio::after {
    content: none;
  }

  .user__info__input {
    width: 100%;
    padding: .2rem 0;

    font-size: 1.1rem;
    text-align: center;

    border: none;
  }

  .user__info__input::placeholder {
    color: #aaa;
  }

  .user__info__input.select {
    padding-left: .75rem;

    cursor: pointer;
  }

   .user__info__input.date-time {
     padding-left: 3.3rem;

     cursor: pointer;
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
    color: #196aa6;
  }

  .radio:first-of-type .label:hover {
    color: #f79420;
  }

  .radio input[type = "radio"]:focus + label {
    color: #196aa6;
  }

  .radio:first-of-type input[type = "radio"]:focus + label {
    color: #f79420;
  }

  .buttons {
    display: flex;
    justify-content: space-around;

    padding-top: .5rem;
  }

  .btn {
    padding: 0.35rem 2.5rem;

    font-size: 1rem;

    background: transparent;

    border: 1px solid black;
    border-radius: 5px;

    transition: background 1s;
  }

  .btn:hover {
    cursor: pointer;
    background: rgb(202, 202, 202);
  }
</style>
