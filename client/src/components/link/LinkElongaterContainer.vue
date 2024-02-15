<script setup lang="ts">
import CopyLinkButton from '@/components/link/CopyLinkButton.vue';

const { originalLink} = defineProps(['originalLink']);
</script>

<template>
  <h3>Your original link:</h3>
  <div v-if="originalLink" class="shortened-link-container">
    <a :href="originalLink" target="_blank">{{ originalLink }}</a>
    <CopyLinkButton :link="originalLink" />
  </div>
  <div v-else><br /></div>
</template>

<style scoped>
h3 {
  margin-top: 0;
  margin-bottom: 5px;
}

a:hover {
  text-decoration: underline;
}

.shortened-link-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
</style>
