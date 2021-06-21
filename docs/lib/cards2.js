'use strict';

let buttons = {
  prev: false,
  next: false
};
let container;
let pageSlider = false;

class Slider {
  constructor(pages, folderName) {
    this.pages = pages;
    this.folderName = folderName;
    this.currentPageIndex = 0;
  }
  
  callNext() {
    this.currentPageIndex += 1;
    if (this.currentPageIndex > this.pages.length - 1) this.currentPageIndex = 0;
    return `./${this.folderName}/${this.pages[this.currentPageIndex].path}`;
  }
  
  callPrevious() {
    this.currentPageIndex -= 1;
    if (this.currentPageIndex < 0) this.currentPageIndex = this.pages.length - 1;
    return `./${this.folderName}/${this.pages[this.currentPageIndex].path}`;
  }

  getCurrent() {
    return `./${this.folderName}/${this.pages[this.currentPageIndex].path}`;
  }
}

async function fetchCards(folderName) {
  let cards;
  // fetching all student cards by reading generated .json file from directories
  await fetch(`./${folderName}/cards.json`)
    .then(response => response.json())
    .then(json => {
      cards = json;
    });
  
  return cards;
}

function next () {
  if (pageSlider) {
    const path = pageSlider.callNext();
    showPage(path);
  }
}

function prev () {
  if (pageSlider) {
    const path = pageSlider.callPrevious();
    showPage(path);
  }
}

function showPage(path) {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', path);
  iframe.setAttribute('class', 'iframe');
  iframe.setAttribute('sandbox', 'allow-scripts');
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

  const cards = await fetchCards('cards2');
  pageSlider = new Slider(cards, 'cards2');
  const path = pageSlider.getCurrent();
  showPage(path);
});