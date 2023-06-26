'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const menuIcon = document.querySelector('.header-nav__menu-icon');
  const closeIcon = document.querySelector('.header-nav__close-icon');
  const linksMenu = document.querySelector('.header-nav__link-list');

  window.addEventListener('scroll', () => {
    header.classList.toggle('header--scroll', scrollY > 0);
  });

  menuIcon.addEventListener('click', () => {
    linksMenu.classList.add('header-nav__link-list--open');
  });

  closeIcon.addEventListener('click', () => {
    linksMenu.classList.remove('header-nav__link-list--open');
  });

  linksMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      linksMenu.classList.remove('header-nav__link-list--open');
    }
  });
});
