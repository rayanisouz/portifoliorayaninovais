const body = document.body;
const btn = document.getElementById('themeToggle');
const favicon = document.getElementById('favicon');

if (!favicon) {
    const link = document.createElement('link');
    link.id = 'favicon';
    link.rel = 'icon';
    link.type = 'image/png';
    document.head.appendChild(link);
}

function setTheme(isLight) {
    if (isLight) {
    body.classList.add('light-mode');
    btn.textContent = '☀️';
    document.getElementById('favicon').href = '/src/favicon-light.png';
    document.documentElement.setAttribute('data-bs-theme', 'light');
    } else {
    body.classList.remove('light-mode');
    btn.textContent = '🌙';
    document.getElementById('favicon').href = '/src/favicon-dark.png';
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    }
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

btn.addEventListener('click', () => {
    const isLightNow = body.classList.contains('light-mode');
    setTheme(!isLightNow);
});

// on load: aplica tema salvo (ou detecta preferência do sistema)
window.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
    setTheme(true);
    return;
    }
    if (saved === 'dark') {
    setTheme(false);
    return;
    }
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    setTheme(prefersLight);
});