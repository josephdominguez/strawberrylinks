<script setup lang="ts">
import LinkForm from '@/components/LinkForm.vue';
import LinkContainer from '@/components/LinkContainer.vue';
import { ref } from 'vue';

const shortenedLink = ref('');

const updateShortenedLink = (link: string) => {
  shortenedLink.value = link;
};
</script>

<template>
  <div>
    <LinkForm :updateShortenedLink="updateShortenedLink" />
    <LinkContainer :shortenedLink="shortenedLink" />
  </div>
</template>
