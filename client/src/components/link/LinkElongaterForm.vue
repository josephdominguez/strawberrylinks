<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { API_ENDPOINT } from '@/config';

const { updateOriginalLink } = defineProps(['updateOriginalLink']);

const originalLink = ref('');
const shortenedLink = ref('');

const enlongateLink = async () => {
  try {
    // Extract the short link identifier from the full link
    const shortLink = extractShortLink(shortenedLink.value);

    // Make API call to enlongate link
    const response = await axios.get(`${API_ENDPOINT}/elongate?shortLink=${shortLink}`);
    originalLink.value = response.data.originalLink;

    // Call the prop function to update the original link in the parent component
    updateOriginalLink(originalLink.value);
  } catch (error) {
    console.error('Error enlongating link:', error);
  }
};

const extractShortLink = (link: string): string => {
  // Split the link by '/' and get the last part
  const parts = link.split('/');
  return parts[parts.length - 1];
};
</script>

<template>
  <form class="link-form-container" id="shorten-link-form" @submit.prevent="enlongateLink">
    <label for="shortened-link">Enter the short link to elongate:</label>
    <input v-model="shortenedLink" type="url" id="shortened-link" name="shortened-link" required />
    <button type="submit">Elongate</button>
  </form>
</template>

<style scoped>
.link-form-container {
  text-align: center;
  padding-bottom: 20px;
}

.link-form-container label {
  font-size: 20px;
}

.link-form-container input[type='url'] {
  width: 50%;
  padding: 10px;
  border: 1px solid var(--gray);
  border-radius: 4px;
}

.link-form-container button[type='submit'] {
  margin: 10px;
}
</style>
