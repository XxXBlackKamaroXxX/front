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
          <button class="btn save" @click.prevent="cancelFlightClick">Confirm</button>
          <button class="btn cancel" @click.prevent="hide">Close</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const DEFAULT_CANCEL_FLIGHT_VALUE = 0

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
  async cancelFlightClick () {
    if (this.from && this.date && this.time && this.to && this.flightNumber && this.aircraftNumber) {
      const objectToCancelFlight = {
        date: this.date,
        time: this.time,
        from: this.from,
        to: this.to,
        flightNumber: this.flightNumber,
        aircraftNumber: this.aircraftNumber
      }
      const resultOfCancelFlight = await axios.post('http://localhost:3000/SheduleEdit', {
        token: localStorage.getItem('Token'),
        objectToCancelFlight: objectToCancelFlight,
        num: DEFAULT_CANCEL_FLIGHT_VALUE
      })
      this.date = ''
      this.time = ''
      this.from = ''
      this.to = ''
      this.flightNumber = ''
      this.aircraftNumber = ''
      if (resultOfCancelFlight.data.isSheduleEdited) {
        console.log('the shedule was upadted')
      } else {
        console.log('the shedule was not updated')
      }
    } else {
      console.log('no data')
    }
  },
  methods: {
    hide () {
      this.$emit('update:ClFModalShow', false)
    }
  }
}
</script>
