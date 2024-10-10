const form = document.getElementById('authForm');
const goToLanding = document.getElementById('goToLanding');
const submitButton = document.querySelector('.submit_button');
const phoneInput = document.getElementById('phoneInput');
const otherInputs = document.querySelectorAll('.input_text');
const checkbox = document.getElementById('checkbox');

function checkInputs() {
    const allFilled = Array.from(otherInputs).every(input => input.value.trim() !== '');
    submitButton.disabled = !allFilled || !checkbox.checked; // Disable if not filled or checkbox is not checked
}

form.addEventListener('input', checkInputs);
checkbox.addEventListener('change', checkInputs);

submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    const formData = {
        name: otherInputs[0].value,
        company: otherInputs[1].value,
        phone: phoneInput.value,
    };

    console.log(formData);
    localStorage.setItem('formData', JSON.stringify(formData));
    window.location.href = 'landing.html';
});

function formatPhoneNumber(value) {
    const digits = value.replace(/\D/g, '');
    const firstDigit = '7';
    let formatted = firstDigit;

    if (digits.length <= 1) {
        return formatted;
    }

    const remainingDigits = digits.slice(1);
    const parts = [
        remainingDigits.slice(0, 3),
        remainingDigits.slice(3, 6),
        remainingDigits.slice(6, 8),
        remainingDigits.slice(8, 10)
    ].filter(part => part);

    formatted += ' ' + parts.join(' ');
    return formatted.trim();
}

function handlePhoneNumberInput(event) {
    const input = event.target;
    const currentValue = input.value;
    const formatted = formatPhoneNumber(currentValue);
    input.value = formatted;
}

phoneInput.addEventListener('input', handlePhoneNumberInput);
submitButton.disabled = true; 
