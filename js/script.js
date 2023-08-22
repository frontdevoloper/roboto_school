const menuBtn = document.querySelector('.header__nav-btn');

menuBtn.addEventListener('click', () => {
    const navList = document.querySelector('.header__nav-list');
    navList.classList.toggle('active');
    menuBtn.classList.toggle('active');
});