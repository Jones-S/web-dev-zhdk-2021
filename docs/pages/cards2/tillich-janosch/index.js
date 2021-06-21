console.log("Welcome to SneakerWorld");

let karte = document.querySelector(".karte");

karte.addEventListener("mouseenter", (e) => {
  document.querySelector(".karte").style.gridTemplateColumns = "800px";
});
karte.addEventListener("mouseleave", (e) => {
  document.querySelector(".karte").style.gridTemplateColumns = "430px";
  document.querySelector(".karte").style.gridTemplateRows =
    "260px 288px 2px 115px";
  document.querySelector(".titel").style.fontSize = "34px";
  document.querySelector(".typ").style.fontSize = "18px";
  document.querySelector(".text").style.margin = "35px";
});

let bild = document.querySelector(".bild");

bild.addEventListener("mouseenter", (e) => {
  document.querySelector(".karte").style.gridTemplateRows =
    "360px 188px 2px 115px";
  document.querySelector(".text").style.margin = "10px";
});

bild.addEventListener("mouseleave", (e) => {
  document.querySelector(".karte").style.gridTemplateRows =
    "260px 288px 2px 115px";
  document.querySelector(".text").style.margin = "35px";
});

let titel = document.querySelector(".titel");

titel.addEventListener("mouseenter", (e) => {
  document.querySelector(".karte").style.gridTemplateRows =
    "230px 318px 2px 115px";
  document.querySelector(".titel").style.fontSize = "95px";
  document.querySelector(".typ").style.fontSize = "35px";
  document.querySelector(".text").style.margin = "10px";
  document.querySelector(".titel").style.margin = "10px";
});

titel.addEventListener("mouseleave", (e) => {
  document.querySelector(".karte").style.gridTemplateRows =
    "260px 288px 2px 115px";
  document.querySelector(".titel").style.fontSize = "34px";
  document.querySelector(".typ").style.fontSize = "18px";
  document.querySelector(".text").style.margin = "35px";
});

let kurztext = document.querySelector(".kurztext");

kurztext.addEventListener("mouseenter", (e) => {
  document.querySelector(".kurztext").style.fontSize = "28px";
});

kurztext.addEventListener("mouseleave", (e) => {
  document.querySelector(".kurztext").style.fontSize = "20px";
});

// ab jetzt mit Tutorial https://www.youtube.com/watch?v=a6XIMIKmj9k

const counters = document.querySelectorAll(".counter");
const speed = 3000; // Je höher desto langsamer

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    // Geschwindigkeitsumrechnung
    const inc = target / speed;

    // Überprüft ob max erreicht
    if (count < target) {
      counter.innerText = count + inc;

      setTimeout(updateCount, 300);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});
