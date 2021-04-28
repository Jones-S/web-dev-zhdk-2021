document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello Bulma!');

  // add addEventListeners for burger
  const burger = document.querySelector("[data-burger]");
  const nav = document.querySelector("[data-nav]");

  burger.addEventListener('click', () => {
    console.log('toggle nav');
    burger.classList.toggle('is-active');
    nav.classList.toggle('is-visible');
  });
});

