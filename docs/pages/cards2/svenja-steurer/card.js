let image = document.querySelector(".cardpic");

image.addEventListener("mouseenter", e => {
    console.log('こんにちわ');
    /*alert("seewholeimage");*/
    document.querySelector(".cardpic").style.height = "200%"
});

function toggle(target, cclass) {
    document.getElementById(target).classList.toggle(cclass);
}