<template>
  <div class="flight__data">
    <div class="search__params">
      <h1 class="search__params__header">
        Search Parametres
      </h1>
        <form class="search__params__data">
            <div class="data__selectors">
                <div class="data__selectors__item">
                From
                <select class="user__info__input select border">
                  <option>Select airport</option>
                  <option v-for="airport in headerData" v-bind:key="airport.airport_id">{{airport.iata}}</option>
                </select>
                </div>

                <div class="data__selectors__item">
                To
                <select class="user__info__input select border">
                    <option>Select airport</option>
                    <option v-for="airport in headerData" v-bind:key="airport.airport_id">{{airport.iata}}</option>
                </select>
                </div>

                <div class="data__selectors__item">
                Cabin
                <select class="user__info__input select border">
                  <option>Select class</option>
                  <option>Economy</option>
                  <option>Business</option>
                  <option>First class</option>
                </select>
                </div>
            </div>

            <div class="data__selectors">
                <div class="data__selectors__item">
                <div class="form__element--radio">
                    <div class="radio">
                    <input class="user__info__radio" type="radio" id="return" name="flightType" value="Return"  v-model="flightType">
                    <label class="label" for="return">Return</label>
                    </div>

                    <div class="radio">
                    <input class="user__info__radio" type="radio" id="one__way" name="flightType" value="One way" style="margin-left: 1rem;" v-model="flightType">
                    <label class="label" for="one__way">One way</label>
                    </div>
                </div>
                </div>

                <div class="data__selectors__item">
                Outbound
                <input class="user__info__input border" type="text" placeholder="11/10/2016">
                </div>

                <div class="data__selectors__item">
                Return
                <input class="user__info__input border" type="text" placeholder="15/10/2016">
                </div>

                <div class="data__selectors__item">
                <button class="btn">Apply</button>
                </div>
            </div>
        </form>
    </div>

    <div class="flight">
      <div class="flight__header">
        Outbound flight details:
        <div class="data__selectors__item">
          <input type="checkbox" id="days__outbound__before" v-model="displayOutboundData">
          <label class="label" for="days__outbound__before">Display three days before and after</label>
        </div>
      </div>

      <div class="manage_table">
        <table class="data__table manage">
          <tr class="table__header">
            <td>From</td>
            <td>To</td>
            <td>Date</td>
            <td>Time</td>
            <td>Flight Number</td>
            <td>Cabin price</td>
            <td>Number of stops</td>
          </tr>
        </table>

        <div class="table__scroll height">
          <table class="data__table manage">
              <tr class="user_data-table_element">
            <td>From</td>
            <td>To</td>
            <td>Date</td>
            <td>Time</td>
            <td>Flight Number</td>
            <td>Cabin price</td>
            <td>Number of stops</td>
          </tr>
          <tr class="user_data-table_element">
            <td>From</td>
            <td>To</td>
            <td>Date</td>
            <td>Time</td>
            <td>Flight Number</td>
            <td>Cabin price</td>
            <td>Number of stops</td>
          </tr>
          <tr class="user_data-table_element">
            <td>From</td>
            <td>To</td>
            <td>Date</td>
            <td>Time</td>
            <td>Flight Number</td>
            <td>Cabin price</td>
            <td>Number of stops</td>
          </tr>
          <tr class="user_data-table_element">
            <td>From</td>
            <td>To</td>
            <td>Date</td>
            <td>Time</td>
            <td>Flight Number</td>
            <td>Cabin price</td>
            <td>Number of stops</td>
          </tr>
          <tr class="user_data-table_element">
            <td>From</td>
            <td>To</td>
            <td>Date</td>
            <td>Time</td>
            <td>Flight Number</td>
            <td>Cabin price</td>
            <td>Number of stops</td>
          </tr>
          <tr class="user_data-table_element">
            <td>From</td>
            <td>To</td>
            <td>Date</td>
            <td>Time</td>
            <td>Flight Number</td>
            <td>Cabin price</td>
            <td>Number of stops</td>
          </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="flight">
      <div class="flight__header">
        Return flight details:
        <div class="data__selectors__item">
          <input type="checkbox" id="days__return__before" v-model="displayReturnData">
          <label class="label" for="days__return__before">Display three days before and after</label>
        </div>
      </div>

      <div class="manage_table">
        <table class="data__table manage">
          <tr class="table__header">
            <td>From</td>
            <td>To</td>
            <td>Date</td>
            <td>Time</td>
            <td>Flight Number</td>
            <td>Cabin price</td>
            <td>Number of stops</td>
          </tr>
        </table>

        <div class="table__scroll height">
          <table class="data__table manage">
              <tr class="user_data-table_element">
            <td>From</td>
            <td>To</td>
            <td>Date</td>
            <td>Time</td>
            <td>Flight Number</td>
            <td>Cabin price</td>
            <td>Number of stops</td>
          </tr>
          <tr class="user_data-table_element">
            <td>From</td>
            <td>To</td>
            <td>Date</td>
            <td>Time</td>
            <td>Flight Number</td>
            <td>Cabin price</td>
            <td>Number of stops</td>
          </tr>
          <tr class="user_data-table_element">
            <td>From</td>
            <td>To</td>
            <td>Date</td>
            <td>Time</td>
            <td>Flight Number</td>
            <td>Cabin price</td>
            <td>Number of stops</td>
          </tr>
          <tr class="user_data-table_element">
            <td>From</td>
            <td>To</td>
            <td>Date</td>
            <td>Time</td>
            <td>Flight Number</td>
            <td>Cabin price</td>
            <td>Number of stops</td>
          </tr>
          <tr class="user_data-table_element">
            <td>From</td>
            <td>To</td>
            <td>Date</td>
            <td>Time</td>
            <td>Flight Number</td>
            <td>Cabin price</td>
            <td>Number of stops</td>
          </tr>
          <tr class="user_data-table_element">
            <td>From</td>
            <td>To</td>
            <td>Date</td>
            <td>Time</td>
            <td>Flight Number</td>
            <td>Cabin price</td>
            <td>Number of stops</td>
          </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="action__on__page">
      <form class="booking__data">
        <div class="data__selectors__item">
          <input class="user__info__input border" type="text" placeholder="[xxx]">
          <span class="tag">Passengers</span>
          <button class="btn" @click="BookingRedirect">&#10004;Book</button>
        </div>
      </form>
      <button class="btn" @click="back">&#9746;Exit</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SearchFlights',
  data () {
    return {
      flightType: '',
      displayOutboundData: '',
      displayReturnData: '',
      bodyData: null,
      headerData: null,
      allShedules: null,
      confObj: null
    }
  },
  async mounted () {
    const manageFlightData = await axios.post('http://localhost:3000/GetManageFlightData', { token: localStorage.getItem('Token') })
    if (manageFlightData.data.isManageFlightDataTaken) {
      const tempArr = manageFlightData.data.manageFlightData
      tempArr.sort(function (first, second) {
        const res = new Date(first.shedule_date.split('T')[0] + ' ' + first.shedule_time.split(':')[0] + ':' + first.shedule_time.split(':')[1]) - new Date(second.shedule_date.split('T')[0] + ' ' + second.shedule_time.split(':')[0] + ':' + second.shedule_time.split(':')[1])
        return res
      })
      this.bodyData = tempArr
      this.allShedules = manageFlightData.data.manageFlightData
      console.log(manageFlightData)
    } else {
      console.log(manageFlightData)
    }
    const airportData = await axios.post('http://localhost:3000/GetManageAirports', { token: localStorage.getItem('Token') })
    if (airportData.data.isAirportsTaken) {
      this.headerData = airportData.data.airports
      console.log(airportData)
    } else {
      console.log(airportData)
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    BookingRedirect () {
      this.$router.push({ name: 'bookingConformation' })
    }
  }
}
</script>

<style>
  .search__params {
    margin-bottom: 1.5rem;
  }
  .search__params__data {
    border: 1px solid black;
    margin: 0 1rem;
  }
  .data__selectors {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  .data__selectors__item {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
  }
  .border {
    border: 1px solid black;
    margin-left: 1rem;
  }
  .flight {
    margin: 0 1rem 3rem;
  }
  .flight__header {
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  .height {
    max-height: 230px;
    min-height: 180px;
  }
  .action__on__page {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .tag {
    margin: 0 5rem 0 1rem;
  }
</style>
