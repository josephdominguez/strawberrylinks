<script setup lang="ts"></script>

<template>
  <form
    class="link-form-container"
    id="shorten-link-form"
    action="https://express-api.com/shorten"
    method="POST"
  >
    <label for="original-link">Enter the link to shorten:</label>
    <input type="url" id="original-link" name="original-link" required />
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
