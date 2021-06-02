'use strict';

let buttons = {
  prev: false,
  next: false
};
let container;
let pageSlider = false;

class Slider {
  constructor(pages) {
    this.pages = pages;
    this.currentPageIndex = 0;
  }
  
  callNext() {
    this.currentPageIndex += 1;
    if (this.currentPageIndex > this.pages.length) this.currentPageIndex = 0;
    console.log('this.currentPage: ', this.currentPageIndex);
    return `./cards/${this.pages[this.currentPageIndex].path}`;
  }
  
  callPrevious() {
    this.currentPageIndex -= 1;
    if (this.currentPageIndex < 0) this.currentPageIndex = this.pages.length - 1;
    console.log('this.currentPage: ', this.currentPageIndex);
    return `./cards/${this.pages[this.currentPageIndex].path}`;
  }

  getCurrent() {
    return `./cards/${this.pages[this.currentPageIndex].path}`;
  }
}

async function fetchCards() {
  let cards;
  // fetching all student cards by reading generated .json file from directories
  await fetch('./cards/cards.json')
    .then(response => response.json())
    .then(json => {
      cards = json;
    });
  
  return cards;
}

function next () {
  if (pageSlider) {
    const path = pageSlider.callNext();
    console.log('path: ', path)
    showPage(path);
  }
}

function prev () {
  if (pageSlider) {
    const path = pageSlider.callPrevious();
    console.log('path: ', path)
    showPage(path);
  }
}

function showPage(path) {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', path);
  iframe.setAttribute('class', 'iframe');
  iframe.setAttribute('sandbox', 'true');
  container.innerHTML = '';
  container.appendChild(iframe);
}

function initUi() {
  container = document.querySelector('[data-content]');
  buttons.prev = document.querySelector('[data-button="prev"]');
  buttons.next = document.querySelector('[data-button="next"]');

  buttons.prev.addEventListener('click', prev);
  buttons.next.addEventListener('click', next);
}



document.addEventListener('DOMContentLoaded', async function () {
  console.log('... Fetching Cards');
  initUi();

  const cards = await fetchCards();
  pageSlider = new Slider(cards);
  const path = pageSlider.getCurrent();
  showPage(path);
});