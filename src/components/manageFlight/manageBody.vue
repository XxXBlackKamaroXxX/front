<template>
    <div class="manage_table">
        <table>
            <tr>
                <td>Date</td>
                <td>Time</td>
                <td>From</td>
                <td>To</td>
                <td>Flight Number</td>
                <td>Aircraft</td>
                <td>Economy price</td>
                <td>business price</td>
                <td>First class price</td>
            </tr>
            <manageBodyTableEl v-for="dt in bodyData" v-bind:key="dt.shedule_id" v-bind:dt="dt" />
        </table>
    </div>
</template>

<script>
import manageBodyTableEl from './manageBodyTableEl.vue'

export default {
  name: 'manageBody',
  components: {
    manageBodyTableEl
  },
  mounted () {
  },
  props: [
    'bodyData'
  ]
}
</script>

<style scoped>
    .manage_table {
        padding-top: 50px;
        width: 1200px;
        margin: 0 auto;
    }
</style>
