
function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        element.textContent = element.getAttribute(`data-lang-${lang}`);
    });
    alert(`Language switched to: ${lang}`);
}
