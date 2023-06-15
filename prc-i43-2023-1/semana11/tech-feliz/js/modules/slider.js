const slider = () => {
  let newTestimony;
  const previewArrow = document.querySelector('#previewArrow');
  const nextArrow = document.querySelector('#nextArrow');
  const slides = document.querySelectorAll('.testimony__testimony');
  // const slides = document.getElementsByClassName('testimony__testimony');

  const changePosition = (change) => {
    const currentTestimony = +document.querySelector('.testimony__testimony--show').dataset.id;
    newTestimony = currentTestimony + change;

    // if (newTestimony < 0) {
    //   newTestimony = slides.length - 1;
    // }

    // if (newTestimony > slides.length - 1) {
    //   newTestimony = 0;
    // }

    (newTestimony < 0) && (newTestimony = slides.length - 1);
    (newTestimony > slides.length - 1) && (newTestimony = 0);

    slides[currentTestimony].classList.remove('testimony__testimony--show');
    slides[newTestimony].classList.add('testimony__testimony--show');
  };

  previewArrow.addEventListener('click', () => changePosition(-1));
  nextArrow.addEventListener('click', () => changePosition(1));
};

export default slider;