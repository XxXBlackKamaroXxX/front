<template>
  <div class="modal" v-if="BookModalShow">
    <div class="modal__content">
      <form>
        <div class="form__element">
          Total amount: <span>[xxx]</span>
        </div>

        Paid using:
        <div class="form__element form__element--radio">
          <div class="radio">
            <input class="user__info__radio" type="radio" id="credit" name="pay__type" value="User">
            <label class="label" for="credit">Credit card</label>
          </div>

          <div class="radio">
            <input class="user__info__radio" type="radio" id="cash" name="pay__type" value="Administrator">
            <label class="label" for="cash">Cash</label>
          </div>

          <div class="radio">
            <input class="user__info__radio" type="radio" id="voucher" name="pay__type" value="Administrator">
            <label class="label" for="voucher">Voucher</label>
          </div>
        </div>

        <div class="buttons">
          <button class="btn save">&#9745;Issue tickets</button>
          <button class="btn cancel" @click.prevent="hide">&#9746;Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    BookModalShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hide () {
      this.$emit('update:BookModalShow', false)
    }
  }
}
</script>
