<template>
 <div class="modal" v-if="ClFModalShow">
    <div class="modal__content">
      <form>
        <div class="form__element">
          <span>Date</span> <input class="user__info__input" type="date" placeholder="Date" v-model="date">
        </div>

        <div class="form__element">
          <span>Time</span> <input class="user__info__input" type="time" placeholder="Time" v-model="time">
        </div>

        <div class="form__element">
          <span>From</span> <input class="user__info__input" type="text" placeholder="From" v-model="from">
        </div>

        <div class="form__element">
          <span>To</span> <input class="user__info__input" type="text" placeholder="To" v-model="to">
        </div>

        <div class="form__element">
          <span>Flight Number</span> <input class="user__info__input" type="text" placeholder="Flight Number" v-model="flightNumber">
        </div>

        <div class="form__element">
          <span>Aircraft</span> <input class="user__info__input" type="text" placeholder="Aircraft Number" v-model="aircraftNumber">
        </div>

        <div class="buttons">
          <button class="btn save">Cancel Flight</button>
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
