<script setup lang="ts">
import LinkShortenerForm from '@/components/link/LinkShortenerForm.vue';
import LinkShortenerContainer from '@/components/link/LinkShortenerContainer.vue';
import { ref } from 'vue';

const shortenedLink = ref('');

const updateShortenedLink = (link: string) => {
  shortenedLink.value = link;
};
</script>

<template>
  <LinkShortenerForm :updateShortenedLink="updateShortenedLink" />
  <LinkShortenerContainer v-if="shortenedLink" :shortenedLink="shortenedLink" />
</template>
