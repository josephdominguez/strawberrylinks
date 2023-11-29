<script setup lang="ts">
import Header from '@/components/Header.vue';
import LinkForm from '@/components/LinkForm.vue';
import LinkContainer from '@/components/LinkContainer.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div class="app-container">
    <Header />
    <main>
      <LinkForm />
      <LinkContainer />
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
