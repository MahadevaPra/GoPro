const languageToggle = document.getElementById('language-toggle');
const heading = document.getElementById('heading');
const content = document.getElementById('content');

const englishContent = {
    heading: 'Sign In',
    content: 'Sign in to your account.'
};

const kannadaContent = {
    heading: 'ಸೈನ್ ಇನ್',
    content: 'ನಿಮ್ಮ ಖಾತೆಗೆ ಸೈನ್ ಇನ್ ಮಾಡಿ.'
};

// Function to set the language and update the content
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    if (lang === 'english') {
        languageToggle.textContent = 'Kannada';
        heading.textContent = englishContent.heading;
        content.textContent = englishContent.content;
    } else {
        languageToggle.textContent = 'English';
        heading.textContent = kannadaContent.heading;
        content.textContent = kannadaContent.content;
    }
}

// Check if a language is already stored in local storage
const storedLanguage = localStorage.getItem('language');
if (storedLanguage) {
    setLanguage(storedLanguage);
} else {
    // Set a default language (e.g., Kannada)
    setLanguage('kannada');
}

languageToggle.addEventListener('click', () => {
    const currentLanguage = localStorage.getItem('language');
    if (currentLanguage === 'english') {
        setLanguage('kannada');
    } else {
        setLanguage('english');
    }
});