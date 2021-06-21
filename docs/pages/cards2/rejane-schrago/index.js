alert("Don't click on the cat - you'll wake it up!!");

const catImage = document.querySelector('.image');
const card = document.querySelector('.card');
const cardBack = document.querySelector('.cardBack');

catImage.addEventListener('click', () => {
    card.classList.add('turned');
    alert("You messed up m8! Cheers to seven years of bad luck ahead of you!");
})

const backImage = document.querySelector('.backImage');
let h = new Date();

if (h.getHours() > 5 & h.getHours() < 22){
    backImage.style.opacity = 1;
}
else {
    backImage.style.opacity = 0.5;
}
