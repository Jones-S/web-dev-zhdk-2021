let health = document.getElementById("health")
console.log(health);
var clicks = 0;

document.onclick = function(){
    if (clicks > 5){
        health.value -=70
        clicks = 0;
    } else {
        health.value -=15;
        clicks += 1;
    }
    if (health.value < 1){
        health.value = 1200;
    }
    };