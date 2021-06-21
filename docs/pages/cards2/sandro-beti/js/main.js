


document.addEventListener('DOMContentLoaded', () => {
    console.log('The DOM is ready.');
    
    const typo = document.querySelector('.typo');
    const typo2 = document.querySelector('.typo2');
    const typo3 = document.querySelector('.typo3');
    const typo4 = document.querySelector('.typo4');
    const wrapper = document.querySelector('.wrapper');
    const slider = document.querySelector('.slider');

    var w = window.innerWidth;
    var whalf = w*0.5;
    
    wrapper.setAttribute("style", "left: " +(whalf - 215)+ "px;");
    slider.setAttribute("style", "left: " +(whalf - 215)+ "px;");

    function scale (number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }

wrapper.addEventListener('mousemove', e => {

    var fontcurs = e.pageX;
    var wleft = wrapper.style.left;
    var xtypo = e.pageX;
    const parsed = parseInt(wleft, 10);
    const weyght = scale(fontcurs, parsed, parsed + 430, 0, 900);
    const antiweyght = scale(fontcurs, parsed, parsed + 430, 900, 0);
    const parsednav = scale(parsed, parsed + 430, 140, 0);
    var xvalue = xtypo - parsed;
    var xvalue2 = xvalue - parsednav;
    var xvalue2 = scale(xvalue, 0, 430, 15, 125 );
    var antival = parseInt(typo.style.left, 10);
    var antixvalue = xvalue2 - 2*antival;

    typo.setAttribute("style", "left: " +(xvalue2)+ "px;");
    typo.style['font-variation-settings'] = "'wght'" + weyght;

    typo2.setAttribute("style", "left: " +(antixvalue)+ "px;");
    typo2.style['font-variation-settings'] = "'wght'" + antiweyght;

    typo3.setAttribute("style", "left: " +(xvalue2)+ "px;");
    typo3.style['font-variation-settings'] = "'wght'" + weyght;

    typo4.setAttribute("style", "left: " +(antixvalue)+ "px;");
    typo4.style['font-variation-settings'] = "'wght'" + antiweyght;

    if(xvalue2 > 120){
        typo.style.color = "#000000";
        typo3.style.color = "#000000";
        typo2.style.color = "#D5081C";
        typo4.style.color = "#D5081C";
    }

    if(xvalue2 < 20){
        typo.style.color = "#000000";
        typo3.style.color = "#000000";
        typo2.style.color = "#D5081C";
        typo4.style.color = "#D5081C";
    }


    
})




  });