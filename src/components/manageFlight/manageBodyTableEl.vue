<template>
    <tr>
        <td>{{dt.shedule_date.split('T')[0].split('-').reverse().join('/')}}</td>
        <td>{{dt.shedule_time.split(':')[0] + ':' + dt.shedule_time.split(':')[1]}}</td>
        <td>{{dt.departure_airport.iata}}</td>
        <td>{{dt.arrival_airport.iata}}</td>
        <td>{{dt.shedule_id}}</td>
        <td>{{dt.eco_price}}</td>
        <td>{{parseInt(dt.eco_price * 1.35)}}</td>
        <td>{{parseInt(dt.eco_price * 1.35 * 1.3)}}</td>
    </tr>
</template>

<script>
export default {
  name: 'manageBodyTableEl',
  props: [
    'dt'
  ],
  mounted () {
  }
}
</script>

<style scoped>
</style>
