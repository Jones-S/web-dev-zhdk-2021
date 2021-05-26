document.addEventListener('DOMContentLoaded', () => {
  console.log('The DOM is ready.');

  /**
  select and console.log div with class .select-me
  select and console.log h2 inside of .select-me
  select and console.log the last table cell
  */

  // a single element returned by querySelector
  const div = document.querySelector('.select-me');
  console.log('div: ', div);
  
  // here we get a collection of all elements with the class `select-me`
  // Attenzione: When selecting by class name, we have leave away the dot at the beginning!
  const array = document.getElementsByClassName('select-me');
  // to get to the actual item (DOM Node), we have to target a specific array index.
  // to get the first we use [0]
  console.log('array: ', array[0]);


  const cells = document.getElementsByTagName('td');
  console.log('cells: ', cells);

  // cheap solution, we know that there are 4 cells, so we select the one with index 3 (4 - 1)
  // this only works as long as there are only 4 cells
  const fourthCell = cells[3];
  console.log('fourthCell: ', fourthCell);
  
  // a more robust solution would make use of the .length property of an array
  console.log('cells.length: ', cells.length);

  // to get the last index of an array, we can use .length - 1
  // this will always work, even if we increase the number of cells in the table
  const lastCell = cells[cells.length - 1];
  console.log('lastCell: ', lastCell);

  // another solution would make use of the pseudo class :last-child
  // for example like this:
  const last = document.querySelector('tbody tr:last-child td:last-child');
  console.log('last: ', last);
});