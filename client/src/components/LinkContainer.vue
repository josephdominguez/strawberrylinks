<script setup lang="ts"></script>

<template>
  <div class="link-container">
    <h3>Your shortened link:</h3>
    <a href="your-generated-link-url" target="_blank">your-generated-link-url</a>
  </div>
</template>

<style scoped>
.link-container {
  background-color: var(--off-white);
  width: 50%;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid var(--gray);
  border-radius: 10px;
  text-align: center;
}

.link-container h3 {
  margin-top: 0;
  margin-bottom: 5px;
}

.link-container a:hover {
  text-decoration: underline;
}
</style>
