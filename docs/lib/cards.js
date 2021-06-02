'use strict';

let buttons = {
  prev: false,
  next: false
};
let iframe;
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
  }
  
  callPrevious() {
    this.currentPageIndex -= 1;
    if (this.currentPageIndex < 0) this.currentPageIndex = this.pages.length - 1;
    console.log('this.currentPage: ', this.currentPageIndex);
  }

  async fetchPage() {
    console.log('...fetching');
    let page;

    await fetch('./cards/bin-martig/index.html')
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        // Convert the HTML string into a document object
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        console.log('doc: ', doc)
        page = doc;
      })
      .catch(function (err) {
        console.warn('Something went wrong.', err);
      });

    return page;
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

async function next () {
  if (pageSlider) {
    pageSlider.callNext();
    const page = await pageSlider.fetchPage();
    showPage(page);
  }
}

function prev () {
  if (pageSlider) {
    pageSlider.callPrevious();
    const page = pageSlider.fetchPage();
    showPage(page);
  }
}

function showPage() {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', '/pages/cards/bin-martig/index.html');
  iframe.setAttribute('class', 'iframe');
  iframe.setAttribute('sandbox', 'true');
  document.body.appendChild(iframe);
}

function initUi() {
  iframe = document.querySelector('[data-content]');
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
});