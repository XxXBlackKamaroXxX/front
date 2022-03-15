<template>
    <div class="sitenav" id="nav">
      <router-link class="sitenav__link" to="/">Login</router-link>
      <router-link class="sitenav__link" to="/about">About</router-link>
      <router-link class="sitenav__link" to="/admin">AdminForm</router-link>
    </div>
    <router-view />
</template>

<style>
 * {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
 }

 .sitenav {
  padding: 1rem;

  font-size: 1.2rem;
}

.sitenav__link {
  text-decoration: none;
  color: #000;
}

.sitenav__link:not(:last-child) {
  margin-right: 1.5rem;
}

.sitenav__link:hover {
  text-decoration: underline;
}

</style>
