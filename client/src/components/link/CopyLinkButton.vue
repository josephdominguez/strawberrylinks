<script setup lang="ts">
const { link } = defineProps(['link']);

const copyToClipboard = () => {
  const el = document.createElement('textarea');
  el.value = link;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};
</script>

<template>
  <button @click="copyToClipboard" class="copy-button"><i class="fas fa-copy"></i> Copy</button>
</template>

<style scoped>
.copy-button {
  padding: 8px;
}
</style>
