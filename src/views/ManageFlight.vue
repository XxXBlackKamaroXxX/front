<template>
    <div>
        <div class="manage__flight__header">
          <h3>
              Filter by
          </h3>
          <hr />
          <div class="header_params_block first_block">
              <div>
                  From
                  <select>
                      <option>[ Airport list ]</option>
                      <option v-for="airport in headerData" v-bind:key="airport.airport_id">{{airport.iata}}</option>
                  </select>
              </div>
              <div>
                  To
                  <select>
                      <option>[ Airport list ]</option>
                      <option v-for="airport in headerData" v-bind:key="airport.airport_id">{{airport.iata}}</option>
                  </select>
              </div>
              <div>
                  Sort by
                  <select>
                      <option>Date-time</option>
                      <option>Price</option>
                      <option>Confirmed / Not Confirmed</option>
                  </select>
              </div>
          </div>
          <div class="header_params_block second_block">
              <div>
                  Outbound
                <input v-model="dateInput" type="text" placeholder="[ dd / mm / yyyy]">
              </div>
              <div>
                  Flight Number
                  <input v-model="flightNumberInput" type="text" placeholder="[ xxxx ]">
              </div>
              <div>
                <button @click="GetOutputDataParams">Apply</button>
              </div>
          </div>
          <hr />
      </div>
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
            <manageBodyTableEl
              v-for="dt in bodyData" v-bind:key="dt.shedule_id" v-bind:dt="dt"
            />
        </table>
      </div>
      <div class="manage__flight__footer">
        <div class="left_btns">
            <button  @click="showCancelFlightModal">Cancel Flight</button>
            <CancelFlightModal v-model:ClFModalShow="cancelFlightModalVisible"></CancelFlightModal>

            <button  @click="showConfirmFlightModal">Confirm Flight</button>
            <ConfirmFlightModal v-model:CfmFModalShow="confirmFlightModalVisible"></ConfirmFlightModal>

            <button  @click="showEditFlightModal">Edit Flight</button>
            <EditFlightModal v-model:EFModalShow="editFlightModalVisible"></EditFlightModal>
        </div>
      </div>
    </div>
</template>

<script>
import manageBodyTableEl from '../components/manageFlight/manageBodyTableEl.vue'
import CancelFlightModal from '../components/manageFlight/CancelFlightModal.vue'
import ConfirmFlightModal from '../components/manageFlight/ConfirmFlightModal.vue'
import EditFlightModal from '../components/manageFlight/EditFlightModal.vue'
import axios from 'axios'
const DEFAUT_AIRPORT_SELECT_VALUE = '[ Airport list ]'
export default {
  name: 'ManageFlight',
  components: {
    manageBodyTableEl,
    CancelFlightModal,
    ConfirmFlightModal,
    EditFlightModal
  },
  data () {
    return {
      bodyData: null,
      headerData: null,
      allShedules: null,
      confObj: null,
      cancelFlightModalVisible: false,
      confirmFlightModalVisible: false,
      editFlightModalVisible: false
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
    } else {
      console.log(manageFlightData)
    }
    const airportData = await axios.post('http://localhost:3000/GetManageAirports', { token: localStorage.getItem('Token') })
    if (airportData.data.isAirportsTaken) {
      this.headerData = airportData.data.airports
    } else {
      console.log(airportData)
    }
  },
  methods: {
    showCancelFlightModal () {
      this.cancelFlightModalVisible = true
    },
    showConfirmFlightModal () {
      this.confirmFlightModalVisible = true
    },
    showEditFlightModal () {
      this.editFlightModalVisible = true
    },
    GetOutputDataParams () {
      const allHeaderSelects = document.querySelectorAll('select')
      this.confObj = {
        date: this.dateInput,
        flightNumber: this.flightNumberInput,
        from: allHeaderSelects[0].value,
        to: allHeaderSelects[1].value,
        sortBy: allHeaderSelects[2].value
      }
      console.log(this.confObj)
      const arrOfParams = [true, true, true, true]
      if (this.confObj.from === DEFAUT_AIRPORT_SELECT_VALUE) {
        arrOfParams[0] = false
      }
      if (this.confObj.to === DEFAUT_AIRPORT_SELECT_VALUE) {
        arrOfParams[1] = false
      }
      if (typeof this.confObj.flightNumber === 'undefined' || this.confObj.flightNumber === '') {
        arrOfParams[2] = false
      }
      if (typeof this.confObj.date === 'undefined' || this.confObj.date === '') {
        arrOfParams[3] = false
      }
      console.log(arrOfParams)
      const nextBodyData = []
      for (const shedule of this.allShedules) {
        let resultBool = true
        const sheduleDate = shedule.shedule_date.split('T')[0].split('-').reverse().join('/')
        if (arrOfParams[0]) {
          resultBool &= (this.confObj.from === shedule.departure_airport.iata)
        }
        if (arrOfParams[1]) {
          resultBool &= (this.confObj.to === shedule.arrival_airport.iata)
        }
        if (arrOfParams[2]) {
          resultBool &= (parseInt(this.confObj.flightNumber) === shedule.shedule_id)
        }
        if (arrOfParams[3]) {
          resultBool &= (this.confObj.date === sheduleDate)
        }
        if (resultBool) {
          nextBodyData.push(shedule)
        }
      }
      for (let i = 0; i < arrOfParams.length; ++i) {
        arrOfParams[i] = true
      }
      if (this.confObj.sortBy === 'Date-time') {
        nextBodyData.sort(function (first, second) {
          const res = new Date(first.shedule_date.split('T')[0] + ' ' + first.shedule_time.split(':')[0] + ':' + first.shedule_time.split(':')[1]) - new Date(second.shedule_date.split('T')[0] + ' ' + second.shedule_time.split(':')[0] + ':' + second.shedule_time.split(':')[1])
          return res
        })
      }
      if (this.confObj.sortBy === 'Price') {
        nextBodyData.sort(function (first, second) {
          const res = first.eco_price - second.eco_price
          return res
        })
      }
      if (this.confObj.sortBy === 'Confirmed / Not Confirmed') {
        nextBodyData.sort(function (first, second) {
          const res = first.confirmed - second.confirmed
          return res
        })
      }
      this.bodyData = nextBodyData
    }
  }
}
</script>

<style scoped>
   h3 {
        margin-bottom: 25px;
    }
    .manage_table {
        padding-top: 50px;
        width: 1200px;
        margin: 0 auto;
    }
    .first_block {
        padding-top: 10px;
        margin-bottom: 60px;
    }
    .second_block {
        margin-bottom: 10px;
    }
    .manage__flight__header {
        width: 1200px;
        margin: 0 auto;
        font-size: 20px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    .header_params_block {
        display: flex;
        justify-content: space-between;
    }
    .manage__flight__footer {
        padding-top: 50px;
        width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .left_btns {
        width: 550px;
        display: flex;
        justify-content: space-between;
    }
    button {
        font-size: 16px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
</style>
