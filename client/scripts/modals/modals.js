// Utility class for interacting with modals.

/**
 * Shows a modal by removing the 'hidden' class and adding the 'visible' class.
 *
 * @param {HTMLElement} modal - The modal element to show.
 */
export const showModal = (modal) => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
};

/**
 * Hides a modal by removing the 'visible' class and adding the 'hidden' class.
 *
 * @param {HTMLElement} modal - The modal element to hide.
 */
export const hideModal = (modal) => {
    modal.classList.remove('visible');
    modal.classList.add('hidden');
};

/**
 * Hides a modal when the user clicks outside the modal or the close modal element.
 *
 * @param {MouseEvent} event - The click event.
 * @param {HTMLElement} modal - The modal element to hide.
 * @param {HTMLElement} closeModal - The close modal element.
 */
export const hideModalOnClick = (event, modal, closeModal) => {
    if (event.target == modal || event.target == closeModal) {
        hideModal(modal);
    }
};

/**
 * Switchs from one modal to another by hiding the first and showing the second.
 *
 * @param {HTMLElement} modalA - The first modal to hide.
 * @param {HTMLElement} modalB - The second modal to show.
 */
export const switchModals = (modalA, modalB) => {
    hideModal(modalA);
    showModal(modalB);
};
