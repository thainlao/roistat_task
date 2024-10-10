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

function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function closeMenu() {
    const menu = document.getElementById("dropdownMenu");
    menu.style.display = "none";
}

window.onclick = function(event) {
    const menu = document.getElementById("dropdownMenu");
    if (event.target !== menu && event.target.closest('.header_menu') !== menu) {
        closeMenu();
    }
}

document.getElementById("closemenu").addEventListener("click", closeMenu);