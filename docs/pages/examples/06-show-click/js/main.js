const emojis = ['🐓', '🐈‍⬛', '🍊', '🥑'];

// if we define the button outside of the functions we have access to it
// read more about this: https://javascript.info/closure
let button;

function initUserInterface() {
  button = document.querySelector('[data-js-button]');
  const emojiBox = document.querySelector('[data-js-emoji-box]');

  console.log('button1: ', button);

  button.addEventListener('click', () => showRamdomEmoji(emojis, emojiBox))
}

function showRamdomEmoji(emojis, targetContainer) {
  console.log('emojis: ', emojis);
  console.log('targetContainer: ', targetContainer);

  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

  const span = document.createElement('span');
  span.innerHTML = randomEmoji;
  
  targetContainer.innerHTML = '';
  targetContainer.appendChild(span);

  console.log('button2: ', button);
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded.');

  initUserInterface();

}, false);