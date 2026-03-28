document.getElementById('year').textContent = new Date().getFullYear();

const header = document.getElementById('header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY && window.scrollY > 80) {
        header.classList.add('-translate-y-full');
    } else {
        header.classList.remove('-translate-y-full');
    }
    lastScrollY = window.scrollY;
});

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach((elem) => {
    observer.observe(elem);
});

const modal = document.getElementById('privacy-modal');
const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');

openModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
});

closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
});

const btnBelaVista = document.getElementById('btn-belavista');
const btnBiguacu = document.getElementById('btn-biguacu');
const infoBelaVista = document.getElementById('info-belavista');
const infoBiguacu = document.getElementById('info-biguacu');
const mapBelaVista = document.getElementById('map-belavista');
const mapBiguacu = document.getElementById('map-biguacu');

const setBtnActive = (activeBtn, inactiveBtn) => {
    activeBtn.classList.remove('bg-white', 'text-primary', 'border', 'border-primary');
    activeBtn.classList.add('bg-primary', 'text-white');
    
    inactiveBtn.classList.remove('bg-primary', 'text-white');
    inactiveBtn.classList.add('bg-white', 'text-primary', 'border', 'border-primary');
};

btnBelaVista.addEventListener('click', () => {
    setBtnActive(btnBelaVista, btnBiguacu);
    infoBelaVista.classList.remove('hidden');
    infoBiguacu.classList.add('hidden');
    mapBelaVista.classList.remove('hidden');
    mapBiguacu.classList.add('hidden');
});

btnBiguacu.addEventListener('click', () => {
    setBtnActive(btnBiguacu, btnBelaVista);
    infoBiguacu.classList.remove('hidden');
    infoBelaVista.classList.add('hidden');
    mapBiguacu.classList.remove('hidden');
    mapBelaVista.classList.add('hidden');
});