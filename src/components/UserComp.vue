<template>
    <div>
      <UserHeader v-bind:userdt="user"/>
      <UserInfoTable v-bind:log="userLogs"/>
    </div>
</template>

<script>
import UserHeader from './userComp/UserHeader.vue'
import UserInfoTable from './userComp/UserInfoTable.vue'

import axios from 'axios'
export default {
  name: 'UserPage',
  components: {
    UserHeader,
    UserInfoTable
  },
  data () {
    return {
      currentUser: null,
      userLogs: null
    }
  },
  async mounted () {
    const logs = await axios.post('http://localhost:3000/takeUserPageData', {
      token: localStorage.getItem('Token')
    })
    console.log(logs)
    this.userLogs = logs.data.userLogs
    this.currentUser = logs.data.user
    if (this.userLogs) {
      for (let i = 0; i < this.userLogs.length; ++i) {
        const log = this.userLogs[i].logsDate.split('T')
        const logDate = log[0].split('-')
        let logExactDate = logDate[0]
        for (let j = 1; j < logDate.length; ++j) {
          logExactDate += '/' + logDate[j]
        }
        this.userLogs[i].logsDate = logExactDate
      }
    }
  },
  props: ['user']
}
</script>
