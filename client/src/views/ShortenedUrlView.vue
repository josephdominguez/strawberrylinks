<template>
  <div>
    <!-- Add loading or error handling if needed -->
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';  // Import useRoute
import axios from 'axios';

const route = useRoute();
const shortUrl = route.params.shortUrl;

onMounted(async () => {
  try {
    // Make API request to get the original link
    const response = await axios.get(`http://localhost:8080/${shortUrl}`);
    const originalLink = response.data.originalLink;

    // Redirect the user to the original link
    window.location.href = originalLink;
  } catch (error) {
    // Handle error (e.g., show 404 page)
    console.error('Error fetching original link:', error);
    // Redirect to 404 page or display an error message
  }
});
</script>
