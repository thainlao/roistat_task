const form = document.getElementById('authForm');
const message = document.getElementById('message');
const goToLanding = document.getElementById('goToLanding');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    message.classList.remove('hidden');
});

goToLanding.addEventListener('click', function () {
    window.location.href = 'landing.html';
});