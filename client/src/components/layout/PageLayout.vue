<script setup lang="ts">
import PageHeader from '@/components/layout/PageHeader.vue';
import PageContent from '@/components/layout/PageContent.vue';
import PageNavMenu from '@/components/layout/PageNavMenu.vue';
import PageFooter from '@/components/layout/PageFooter.vue';
</script>

<template>
  <div class="app-container">
    <PageHeader />
    <PageNavMenu />
    <main>
      <PageContent>
        <slot></slot>
      </PageContent>
    </main>
    <PageFooter />
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
