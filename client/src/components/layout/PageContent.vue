<script setup lang="ts"></script>

<template>
  <div class="content-container">
    <slot></slot>
  </div>
</template>

<style scoped>
.content-container {
  background-color: var(--off-white);
  width: 40%;
  margin: 0 auto;
  padding: 25px 0;
  border: 1px solid var(--gray);
  border-radius: 10px;
  text-align: center;
}
</style>
