<template>
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
                </select>
            </div>
        </div>
        <div class="header_params_block second_block">
            <div>
                Outbound
               <input type="text" placeholder="[ dd / mm / yyyy]">
            </div>
            <div>
                Flight Number
                <input type="text" placeholder="[ xxxx ]">
            </div>
            <div>
               <button>Apply</button>
            </div>
        </div>
        <hr />
    </div>
</template>

<script>

export default {
  name: 'manageHeader',
  props: [
    'headerData'
  ],
  data () {
    return {
      inputData: ''
    }
  }
}
</script>

<style scoped>
    h3 {
        margin-bottom: 25px;
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
</style>
