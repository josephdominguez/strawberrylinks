<script setup lang="ts">
import LinkElongaterForm from '@/components/link/LinkElongaterForm.vue';
import LinkElongaterContainer from '@/components/link/LinkElongaterContainer.vue';
import { ref } from 'vue';

const originalLink = ref('');

const updateOriginalLink = (link: string) => {
  originalLink.value = link;
};
</script>

<template>
  <LinkElongaterForm :updateOriginalLink="updateOriginalLink" />
  <LinkElongaterContainer v-if="originalLink" :originalLink="originalLink" />
</template>
