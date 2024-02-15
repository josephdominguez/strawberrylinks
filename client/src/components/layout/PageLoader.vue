<template>
  <div class="loader"></div>
</template>

<style scoped>
.loader {
  margin: auto;
  border: 4px solid rgba(200, 200, 200, 0.3);
  border-top: 4px solid var(--strawberry);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
