<script setup lang="ts">
import { ref } from 'vue';
import LoginButton from '@/components/auth/LoginButton.vue';
import LogoutButton from '@/components/auth/LogoutButton.vue';
import SignupButton from '@/components/auth/SignupButton.vue';
import { useAuth0 } from '@auth0/auth0-vue';

const { isAuthenticated } = useAuth0();
const showAuthButtons = ref(false);

const toggleAuthButtons = () => {
  showAuthButtons.value = !showAuthButtons.value;
};
</script>

<template>
  <div class="user-nav-menu">
    <div class="login-icon" @click="toggleAuthButtons">
      <i class="fa fa-user" id="login-icon"></i>
    </div>

    <div class="auth-buttons" v-if="showAuthButtons">
      <template v-if="!isAuthenticated">
        <LoginButton />
        <SignupButton />
      </template>
      <template v-if="isAuthenticated">
        <LogoutButton />
      </template>
    </div>
  </div>
</template>

<style scoped>
.user-nav-menu {
  display: flex;
  flex-direction: column;
}

.login-icon {
  cursor: pointer;
  margin-left: auto;
  position: relative;
  padding-top: 5px;
  padding-right: 25px;
}

.auth-buttons {
  position: absolute;
  top: 30px;
  right: 20px;
  background-color: var(--off-white);
  border: 1px solid var(--gray);
  border-radius: 5px;
  width: 100px;
  padding: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.auth-buttons button {
  width: 100%;
  margin: 5px 0;
}
</style>
