<template>
    <div>
        <manageHeader v-bind:headerData="headerData" />
        <manageBody v-bind:bodyData="bodyData"/>
        <manageFooter />
    </div>
</template>

<script>
import manageBody from './manageFlight/manageBody.vue'
import manageFooter from './manageFlight/manageFooter.vue'
import manageHeader from './manageFlight/manageHeader.vue'

export default {
  name: 'ManageFlightForm',
  components: {
    manageBody,
    manageFooter,
    manageHeader
  },
  props: [
    'bodyData',
    'headerData'
  ]
}
</script>

<style scoped>

</style>
