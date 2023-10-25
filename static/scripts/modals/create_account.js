import * as modal from './modals.js';

// Get elements.
const createAccountModal = document.getElementById('create-account-modal');
const closeAccountModal = document.getElementById('close-create-account-modal');
const switchToLoginButton = document.getElementById('switch-to-login');
const loginModal = document.getElementById('login-modal');

// Add click event listeners to hide create account modal.
document.addEventListener('click', (event) => 
   modal.hideModalOnClick(event, createAccountModal, closeAccountModal));

// Add a click event listener to the "Back" button to switch modals.
switchToLoginButton.addEventListener('click', () =>
   modal.switchModals(createAccountModal, loginModal));
