'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.header-nav__menu-icon');
  const closeIcon = document.querySelector('.header-nav__close-icon');
  const linksMenu = document.querySelector('.header-nav__link-list');

  menuIcon.addEventListener('click', () => {
    linksMenu.classList.add('header-nav__link-list--open')
  });

  closeIcon.addEventListener('click', () => {
    linksMenu.classList.remove('header-nav__link-list--open')
  });
});
