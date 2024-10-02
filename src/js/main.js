const button = document.querySelector('.header-burger-button');
const menu = document.querySelector('.header-menu-list');
const menuLinks = document.querySelectorAll('.header-menu-link');

button.addEventListener('click', () => {
    button.classList.toggle('active');

    if (button.classList.contains('active')) {
        button.setAttribute('aria-expanded', 'true');
        menu.setAttribute('aria-hidden', 'false');
        menuLinks.forEach(link => link.setAttribute('tabindex', '0'));
    } else {
        button.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
        menuLinks.forEach(link => link.setAttribute('tabindex', '-1'));
    }
});


const openBtn = document.querySelector('.js-open-btn');
const closeBtn = document.querySelector('.js-close-btn');
const modal = document.querySelector('.js-modal');

openBtn.addEventListener('click', () => {
    modal.showModal();
});
modal.addEventListener('click', (e) => {
    const modal = e.currentTarget;
    const isClickOnBackDrop = e.target == modal

    if (isClickOnBackDrop) {
        modal.close();
    }
});
closeBtn.addEventListener('click', () => {
    modal.close();
});


const inputs = document.querySelectorAll('input[type="tel"]');
const im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);


document.querySelectorAll('.footer-nav__title').forEach(title => {
    title.addEventListener('click', () => {
      const target = document.getElementById(title.dataset.target);      
      target.classList.toggle('active');       
      title.classList.toggle('active');
    });
  });