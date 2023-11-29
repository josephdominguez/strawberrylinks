<script setup lang="ts"></script>

<template>
  <header>
    <div class="header-container">
      <div class="title">
        <img class="strawberry-logo" src="@/assets/strawberry-left.png" />
        <h1><a href="/">strawberrylinks.com</a></h1>
        <img class="strawberry-logo" src="@/assets/strawberry-right.png" />
      </div>
      <div class="login-icon">
        <i class="fa fa-user" id="login-icon"></i>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.strawberry-logo {
  width: 32px;
  height: 32px;
}

.login-icon {
  cursor: pointer;
  margin-left: auto;
  position: relative;
  float: right;
  right: 30px;
}
</style>
