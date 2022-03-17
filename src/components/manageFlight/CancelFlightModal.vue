<template>
 <div class="modal" v-if="ClFModalShow">
    <div class="modal__content">
      <form>
        <div class="form__element">
          <input class="user__info__input" type="date" v-model="date">
        </div>

        <div class="form__element">
          <input class="user__info__input" type="time" v-model="time">
        </div>

        <div class="form__element">
          <input class="user__info__input" type="text" placeholder="From" v-model="from">
        </div>

        <div class="form__element">
          <input class="user__info__input" type="text" placeholder="To" v-model="to">
        </div>

        <div class="form__element">
          <input class="user__info__input" type="text" placeholder="Flight Number" v-model="flightNumber">
        </div>

        <div class="form__element">
          <input class="user__info__input" type="text" placeholder="Aircraft Number" v-model="aircraftNumber">
        </div>

        <div class="buttons">
          <button class="btn save">Confirm</button>
          <button class="btn cancel" @click.prevent="hide">Close</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CancelFlightModal',
  props: {
    ClFModalShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      date: '',
      time: '',
      from: '',
      to: '',
      flightNumber: '',
      aircraftNumber: ''
    }
  },
  methods: {
    hide () {
      this.$emit('update:ClFModalShow', false)
    }
  }
}
</script>
