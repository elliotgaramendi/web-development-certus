'use strict';

window.addEventListener('DOMContentLoaded', () => {
  // // Inicio header
  // const header = document.querySelector('.header');
  // const menuIcon = document.querySelector('.header-nav__menu-icon');
  // const closeIcon = document.querySelector('.header-nav__close-icon');
  // const linksMenu = document.querySelector('.header-nav__link-list');

  // window.addEventListener('scroll', () => {
  //   header.classList.toggle('header--scroll', scrollY > 0);
  // });

  // menuIcon.addEventListener('click', () => {
  //   linksMenu.classList.add('header-nav__link-list--open');
  // });

  // closeIcon.addEventListener('click', () => {
  //   linksMenu.classList.remove('header-nav__link-list--open');
  // });

  // linksMenu.addEventListener('click', (e) => {
  //   if (e.target.tagName === 'A') {
  //     linksMenu.classList.remove('header-nav__link-list--open');
  //   }
  // });
  // // Fin header

  // // Inicio slider
  // const previewArrow = document.getElementById('previewArrow');
  // const nextArrow = document.getElementById('nextArrow');
  // const slides = document.querySelectorAll('.testimony__testimony');

  // const changePosition = (change) => {
  //   const currentSlide = +document.querySelector('.testimony__testimony--show').dataset.id;
  //   let newTestimony = currentSlide + change;

  //   (newTestimony < 0) && (newTestimony = slides.length - 1);
  //   (newTestimony > slides.length - 1) && (newTestimony = 0);

  //   slides[currentSlide].classList.remove('testimony__testimony--show');
  //   slides[newTestimony].classList.add('testimony__testimony--show');
  // };

  // previewArrow.addEventListener('click', () => changePosition(-1));
  // nextArrow.addEventListener('click', () => changePosition(1));
  // // Fin slider slider

  // Inicio faq
  const questionsQuestion = document.querySelectorAll('.questions__question');
  questionsQuestion.forEach(element => {
    element.addEventListener('click', () => {
      let height = 0;
      const answer = element.nextElementSibling;

      (answer.clientHeight === 0) && (height = answer.scrollHeight);
      element.children[1].classList.toggle('questions__arrow--rotate-180');
      answer.classList.toggle('questions__answer--open');
      answer.style.height = height + 'px';
    });
  });
});
