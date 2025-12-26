function updateLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('preferred-lang', lang);
    
    // Update active state of buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function initLanguage() {
    const savedLang = localStorage.getItem('preferred-lang') || 'en';
    updateLanguage(savedLang);
}

document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    
    // Delegate click event for lang buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('lang-btn')) {
            const lang = e.target.dataset.lang;
            updateLanguage(lang);
        }
    });
});

