function change() {
    var img1 = "./assets/Monster_2.svg",
        img2 = "./assets/Monster_1.svg";

    var imgElement = document.getElementById('img');
    var images = document.querySelectorAll('.monster img');
    console.log('images: ', images);

    images.forEach(image => {
        image.classList.toggle('is-hidden');
    })
    document.getElementById('eyeDiv').classList.toggle('is-hidden');
}

$(".card").mousemove(function(event) {
    var eye = $(".eye");
    var x = (eye.offset().left) + (eye.width() / 2);
    var y = (eye.offset().top) + (eye.height() / 2);
    var rad = Math.atan2(event.pageX - x, event.pageY - y);
    var rot = (rad * (180 / Math.PI) * -1) + 180;
    eye.css({
      '-webkit-transform': 'rotate(' + rot + 'deg)',
      '-moz-transform': 'rotate(' + rot + 'deg)',
      '-ms-transform': 'rotate(' + rot + 'deg)',
      'transform': 'rotate(' + rot + 'deg)'
    });
  });