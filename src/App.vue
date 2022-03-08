<template>
  <div>
    <div id="nav">
      <router-link to="/">Login</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/admin">AdminForm</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
 * {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
 }
</style>
