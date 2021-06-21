/* 
 * JavaScript is mainly used to manipulate webpage items.
 * To do so, all the elements have to be ready, before we can select and manipulate them.
 * One way of making sure all things are ready, is embedding the JavaScript file at the end of the html
 * just before the closing </body> tag.
 * Another way is shown here: We first add a listener, that executes a function, whenever the DOM is loaded:
*/

document.addEventListener('DOMContentLoaded', () => {
  console.log('The DOM is ready.');




var div = document.querySelector(".card ");

div.addEventListener(
  "mousemove", function (e) {
  x = e.offsetX;
  y = e.offsetY;
  console.log(x,y);
  div.style.backgroundColor 
      = `rgb(${x}, ${y}, ${x - y})`;
});

}, false);

