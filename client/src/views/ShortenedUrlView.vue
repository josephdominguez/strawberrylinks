<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { API_ENDPOINT } from '@/config';

const route = useRoute();
const shortUrl = route.params.shortUrl;

onMounted(async () => {
  try {
    // Make API request to get the original link
    const response = await axios.get(`${API_ENDPOINT}/${shortUrl}`);
    const originalLink = response.data.originalLink;

    // Redirect the user to the original link
    window.location.href = originalLink;
  } catch (error) {
    // Redirect to 404 page or display an error message
    console.error('Error fetching original link:', error);
  }
});
</script>

<template>
  <div>
  </div>
</template>
