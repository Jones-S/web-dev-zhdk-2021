'use strict';

document.addEventListener('DOMContentLoaded', function () {
  console.log('Hello Bulma!');

  // add addEventListeners for burger
  var burger = document.querySelector("[data-burger]");
  var nav = document.querySelector("[data-nav]");

  burger.addEventListener('click', function () {
    console.log('toggle nav');
    burger.classList.toggle('is-active');
    nav.classList.toggle('is-visible');
  });
});