<template>
  <div class="modal" v-if="PreBookModalShow">
    <div class="modal__content">
      <form>
        To
        <div class="form__element">
          <input class="user__info__input" type="text" placeholder="From" v-model="from">
        </div>

        <div class="form__element">
          <input class="user__info__input" type="text" placeholder="To" v-model="to">
        </div>

        <div class="form__element">
          <input class="user__info__input" type="text" placeholder="Price" v-model="toPrice">
        </div>

         <div class="form__element">
          <input class="user__info__input" type="date" placeholder="Date" v-model="toDate">
        </div>

         <div class="form__element">
          <input class="user__info__input" type="text" placeholder="Flight number" v-model="toFlightNumber">
        </div>

        Back
         <div class="form__element">
          <input class="user__info__input" type="text" placeholder="Price" v-model="backPrice">
        </div>

         <div class="form__element">
          <input class="user__info__input" type="date" placeholder="Date" v-model="backDate">
        </div>

         <div class="form__element">
          <input class="user__info__input" type="text" placeholder="Flight number" v-model="backFlightNumber">
        </div>

        <div class="buttons">
          <button class="btn save" @click="BookingRedirect">&#9745;Confirm booking</button>
          <button class="btn cancel" @click.prevent="hide">&#9746;Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    PreBookModalShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      from: '',
      to: '',
      toPrice: '',
      toDate: '',
      toFlightNumber: '',
      backPrice: '',
      backDate: '',
      backFlightNumber: ''
    }
  },
  methods: {
    BookingRedirect () {
      this.$router.push({ name: 'bookingConformation' })
    },
    hide () {
      this.$emit('update:PreBookModalShow', false)
    }
  }
}
</script>
