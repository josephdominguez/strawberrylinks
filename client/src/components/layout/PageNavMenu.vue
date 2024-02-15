<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';

const { isAuthenticated } = useAuth0();
</script>

<template>
  <nav class="page-nav">
    <ul>
      <li><router-link v-if="isAuthenticated" to="/dashboard">Dashboard</router-link></li>
      <li><router-link to="/">Shorten</router-link></li>
      <li><router-link to="/elongate">Elongate</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.page-nav {
  margin: auto;
  width: 40%;
}

.page-nav ul {
  list-style: none;
}

.page-nav li {
  display: inline;
  margin-right: 80px;
}
</style>
