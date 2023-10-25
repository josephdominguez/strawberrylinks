import * as modal from './modals.js';

// Get elements.
const loginIcon = document.getElementById('login-icon');
const loginModal = document.getElementById('login-modal');
const closeLoginModal = document.getElementById('close-login-modal');
const switchToCreateAccountButton = document.getElementById('switch-to-create-account');
const createAccountModal = document.getElementById('create-account-modal');

// Add click event listeners to show/hide login modal.
loginIcon.addEventListener('click', () => modal.showModal(loginModal));
document.addEventListener('click', (event) => 
   modal.hideModalOnClick(event, loginModal, closeLoginModal));

// Add a click event listener to the "Create Account" to switch modals.
switchToCreateAccountButton.addEventListener('click', () => 
   modal.switchModals(loginModal, createAccountModal));
