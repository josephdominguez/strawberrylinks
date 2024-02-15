<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';

const { loginWithRedirect } = useAuth0();

const handleSignUp = () => {
    loginWithRedirect({
        appState: {
            target: '/profile'
        },
        authorizationParams: {
            screen_hint: 'signup'
        },
    });
};
</script>

<template>
    <button @click="handleSignUp">Sign Up</button>
</template>
