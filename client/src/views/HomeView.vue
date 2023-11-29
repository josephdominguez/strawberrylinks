<script setup lang="ts">
import Header from '@/components/Header.vue';
import LinkShortener from '@/components/LinkShortener.vue';
import Footer from '@/components/Footer.vue';

const onMounted = () => {
  console.log('HomeView mounted');  // Add this line
};
</script>

<template>
  <div class="app-container">
    <Header />
    <main>
      <LinkShortener />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}
</style>
