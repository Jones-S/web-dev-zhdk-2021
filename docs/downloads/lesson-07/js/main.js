/* 
 * JavaScript is mainly used to manipulate webpage items.
 * To do so, all the elements have to be ready, before we can select and manipulate them.
 * One way of making sure all things are ready, is embedding the JavaScript file at the end of the html
 * just before the closing </body> tag.
 * Another way is shown here: We first add a listener, that executes a function, whenever the DOM is loaded:
*/

document.addEventListener('DOMContentLoaded', () => {
  console.log('The DOM is ready.');

  const myFirstVariable = '🦦';
  console.log('myFirstVariable: ', myFirstVariable);

  // here we select an object from the DOM and log out it's content.
  // This part would not work if it was declared outside the DOMContentLoaded callback function
  // (as long the JavaScript file is linked in the head...)
  const text = document.querySelector('[data-js-text]');
  console.log('text: ', text.innerHTML);

  // Playground for executing JavaScript in the Browser
  //...

}, false);