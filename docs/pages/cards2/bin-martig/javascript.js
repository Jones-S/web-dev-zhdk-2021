const image = document.querySelector(".title-image");

const firstRiddleInput = document.getElementById("riddle1");
const secondRiddleInput = document.getElementById("riddle2");
const thirdRiddleInput = document.getElementById("riddle3");

secondRiddleInput.disabled = thirdRiddleInput.disabled = "true";

let step = 0;


image.onclick = function () {
    switch (step) {
        case 0:
            if (firstRiddleInput.value === "18") {
                if (step < 1) step++;
                firstRiddleInput.disabled = true;
                secondRiddleInput.disabled = false;

            } else {
                alert("find the clues first!");
            }
            break;
        case 1:
            if (secondRiddleInput.value === "4") {
                if (step < 2) step++;
                secondRiddleInput.disabled = true;
                thirdRiddleInput.disabled = false;
            } else {
                alert("come on, it's so easy!")
            }
            break;
        case 2:
            if (thirdRiddleInput.value === "milk"){
                image.src = "./assets/win.jpg";
                let title = document.querySelector(".description");
                title.textContent = "a powerless drink";
                let rating = document.querySelector(".rating");
                rating.textContent = "☆☆☆☆☆";
            } else {
                alert("cat is liquid. cat is white. cat is..?")
            }
    }
}