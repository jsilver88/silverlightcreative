const header = document.querySelector('header');
window.addEventListener('scroll', fixNav);

function fixNav() {
    if (window.scrollY > header.offsetHeight + 100) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav__list');
const navLinks = document.querySelectorAll('.nav__links');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navList.classList.toggle('active');
    navToggle.classList.toggle('nav-open');
});

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('nav-open');
        navToggle.classList.remove('active');
        navList.classList.remove('active');
    });
});

AOS.init({
    duration: 1200,
});
