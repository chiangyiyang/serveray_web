// 平滑滾動效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 導航欄響應式處理
const navToggle = document.createElement('button');
navToggle.innerHTML = '&#9776;';
navToggle.classList.add('nav-toggle');
document.querySelector('header').appendChild(navToggle);

const nav = document.querySelector('nav ul');
navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
});

// 當視窗大小改變時，移除導航欄的展開狀態
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        nav.classList.remove('nav-open');
    }
});

// 圖片延遲加載
const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
        }
    });
});

images.forEach(img => {
    imageObserver.observe(img);
});

// 處理初始加載
window.addEventListener('load', () => {
    // 檢查視窗大小並調整導航列
    if (window.innerWidth <= 768) {
        nav.classList.remove('nav-open');
    }
});
