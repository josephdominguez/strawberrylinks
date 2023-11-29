<script setup lang="ts">
const { shortenedLink } = defineProps(['shortenedLink']);

const copyToClipboard = () => {
  const el = document.createElement('textarea');
  el.value = shortenedLink;
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
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  padding: 8px;
  cursor: pointer;
  border-radius: 4px;
}
</style>
