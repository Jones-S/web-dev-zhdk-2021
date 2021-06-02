function changeStyle(event) {
  console.log('event: ', event);
  console.log('event.target: ', event.target);

  const clickedBox = event.target;

  // add highlight class: 'is-highlighted'    
  clickedBox.classList.toggle('is-highlighted');
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded.')

  // select boxes
  const boxes = document.querySelectorAll('.box');
  console.log('boxes: ', boxes);

  boxes.forEach((box) => {
    console.log('box: ', box);

    box.addEventListener('click', changeStyle);
    box.addEventListener('mouseover', changeStyle);

    /* 
     * anonymous function instead of named function:
     */

    // box.addEventListener('click', (event) => {
    //   console.log('event: ', event);
    //   console.log('event.target: ', event.target);

    //   const clickedBox = event.target;
    //   // clickedBox.style.color = '#E41515';

    //   // add highlight class: 'is-highlighted'    
    //   clickedBox.classList.toggle('is-highlighted');
    // });
  });

  // const person = {
  //   name: 'Max',
  //   age: 17,
  // };
  
  // console.log(person.name);
  // console.log(person.age);
  // console.log(person['age']);

});



