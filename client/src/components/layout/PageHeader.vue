<script setup lang="ts">
import UserNavMenu from '@/components/auth/UserNavMenu.vue';
</script>

<template>
  <header>
    <UserNavMenu />
    <div class="title">
      <img class="strawberry-logo" src="@/assets/strawberry-left.png" />
      <h1><a href="/">strawberrylinks.com</a></h1>
      <img class="strawberry-logo" src="@/assets/strawberry-right.png" />
    </div>
  </header>
</template>

<style scoped>
.title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.strawberry-logo {
  width: 32px;
  height: 32px;
}
</style>
