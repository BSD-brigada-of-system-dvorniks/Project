//Modal settings password window
const modal = document.getElementById('settings-password-modal');
const closeBtn = document.querySelector('.settings-password-modal-close-btn');
const openBtn = document.getElementById('confirm-btn');

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
} );

openBtn.addEventListener('click', function() {
    modal.style.display = 'block';
} );