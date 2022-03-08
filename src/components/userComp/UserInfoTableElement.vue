<template>
  <div class="user__info-table_element">
    <p>{{info.logsDate}}</p>
    <p>{{info.loginTime}}</p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
  </div>
</template>

<script>

export default {
  name: 'UserInfoTableElement',
  props: {
    info: {
      type: Object
    }
  }
}
</script>

<style scoped>
    .user__info-table_element {
      padding: 0.5rem 0.5rem;
      display: flex;
      justify-content: space-between;
    }
    .user__info-table_element p {
      min-width: 5rem;
    }
    .user__info-table_element p:first-child {
      min-width: 2rem;
    }
</style>
