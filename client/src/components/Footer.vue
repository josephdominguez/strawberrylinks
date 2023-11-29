<script setup lang="ts"></script>

<template>
  <footer>
    <div class="footer-container">
      <div>
        Made by <img class="github-logo" src="@/assets/github.svg" />
        <a href="https://github.com/josephdominguez">Joseph Dominguez-Virla</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background-color: var(--toasted-oatmeal);
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.25);
  color: white;
  padding: 10px 10px;
}

.footer-container {
  display: flex;
  justify-content: end;
}

.footer-container a {
  font-weight: 600;
}

.github-logo {
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: auto;
}
</style>
