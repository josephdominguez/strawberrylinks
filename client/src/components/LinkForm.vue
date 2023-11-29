<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const { updateShortenedLink } = defineProps(['updateShortenedLink']);

const originalLink = ref('');
const shortenedLink = ref('');

const shortenLink = async () => {
  try {
    const response = await axios.post(`http://localhost:8080/shorten?originalLink=${originalLink.value}`);
    shortenedLink.value = response.data.shortLink;

    // Call the prop function to update the shortened link in the parent component
    updateShortenedLink(shortenedLink.value);
  } catch (error) {
    console.error('Error shortening link:', error);
  }
};
</script>

<template>
  <form
    class="link-form-container"
    id="shorten-link-form"
    @submit.prevent="shortenLink"
  >
    <label for="original-link">Enter the link to shorten:</label>
    <input v-model="originalLink" type="url" id="original-link" name="original-link" required />
    <button type="submit">Shorten</button>
  </form>
</template>

<style scoped>
.link-form-container {
  text-align: center;
  padding-bottom: 20px;
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
