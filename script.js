// Зберігання інформації про браузер
const info = {
    platform: navigator.platform,
    userAgent: navigator.userAgent,
    language: navigator.language,
    cookiesEnabled: navigator.cookieEnabled
};
localStorage.setItem('browserInfo', JSON.stringify(info));

// Виведення у футері
document.getElementById('local-storage-data').textContent =
    'Інформація про браузер: ' + localStorage.getItem('browserInfo');

// Завантаження коментарів
fetch('https://jsonplaceholder.typicode.com/posts/18/comments')
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById('comments');
        data.forEach(c => {
            const div = document.createElement('div');
            div.innerHTML = `<strong>${c.name}</strong> (${c.email}): <p>${c.body}</p><hr>`;
            container.appendChild(div);
        });
    });

// Відображення модального вікна через 60 секунд
setTimeout(() => {
    document.getElementById('modal').classList.remove('hidden');
}, 60000);

// Закриття модального вікна
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('modal').classList.add('hidden');
});

// Перемикач теми
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Автоматична тема за часом
const hour = new Date().getHours();
if (hour < 7 || hour >= 21) {
    document.body.classList.add('dark');
}
