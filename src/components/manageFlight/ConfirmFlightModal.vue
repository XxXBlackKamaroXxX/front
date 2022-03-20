<template>
 <div class="modal" v-if="CfmFModalShow">
    <div class="modal__content">
      <form>
        <div class="form__element">
          <input class="user__info__input" type="date" placeholder="Date" v-model="date">
        </div>

        <div class="form__element">
          <input class="user__info__input" type="time" placeholder="Time" v-model="time">
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
          <button class="btn save"  @click.prevent="confirmFlightClick">Confirm</button>
          <button class="btn cancel" @click.prevent="hide">Close</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const DEFAULT_CONFIRM_FLIGHT_VALUE = 1

export default {
  name: 'ConfirmFlightModal',
  props: {
    CfmFModalShow: {
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
  async confirmFlightClick () {
    if (this.from && this.date && this.time && this.to && this.flightNumber && this.aircraftNumber) {
      const objectToConfirmFlight = {
        date: this.date,
        time: this.time,
        from: this.from,
        to: this.to,
        flightNumber: this.flightNumber,
        aircraftNumber: this.aircraftNumber
      }
      const resultOfConfirmFlight = await axios.post('http://localhost:3000/SheduleEdit', {
        token: localStorage.getItem('Token'),
        objectToCancelFlight: objectToConfirmFlight,
        num: DEFAULT_CONFIRM_FLIGHT_VALUE
      })
      this.date = ''
      this.time = ''
      this.from = ''
      this.to = ''
      this.flightNumber = ''
      this.aircraftNumber = ''
      if (resultOfConfirmFlight.data.isSheduleEdited) {
        console.log('the shedule was updated')
      } else {
        console.log('the shedule was not updated')
      }
    } else {
      console.log('no data')
    }
  },
  methods: {
    hide () {
      this.$emit('update:CfmFModalShow', false)
    }
  }
}
</script>
