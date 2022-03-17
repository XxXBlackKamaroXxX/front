<template>
 <div class="modal" v-if="EFModalShow">
    <div class="modal__content">
      <form>

        <div class="form__element">
          <input class="user__info__input" type="text" placeholder="From" v-model="from">
        </div>

        <div class="form__element">
          <input class="user__info__input" type="text" placeholder="To" v-model="to">
        </div>

        <div class="form__element">
          <input class="user__info__input" type="text" placeholder="Aircraft Number" v-model="aircraftNumber">
        </div>

        <div class="form__element">
          <input class="user__info__input" type="date" placeholder="Date" v-model="date">
        </div>

        <div class="form__element">
          <input class="user__info__input" type="time" placeholder="Time" v-model="time">
        </div>

        <div class="form__element">
          <input class="user__info__input" type="text" placeholder="Eco price &#36;" v-model="price">
        </div>

        <div class="buttons">
          <button class="btn save">Save</button>
          <button class="btn cancel" @click.prevent="hide">Close</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'EditFlightModal',
  props: {
    EFModalShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      from: '',
      to: '',
      aircraftNumber: '',
      date: '',
      time: '',
      price: ''
    }
  },
  methods: {
    hide () {
      this.$emit('update:EFModalShow', false)
    }
  }
}
</script>
