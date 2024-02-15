<script setup lang="ts">
  import PageLoader from '@/components/layout/PageLoader.vue';
  import { useAuth0 } from '@auth0/auth0-vue';

  const { isLoading } = useAuth0();
</script>

<template>
  <div v-if="isLoading">
    <PageLoader />
  </div>
  <router-view v-else />
</template>
