(function(){
    const sliders = [...document.querySelectorAll('.slider_body')];
    const arrowAdelante = document.querySelector('#adelante');
    const arrowAtras = document.querySelector('#atras');
    let value = 1; 

    arrowAdelante.addEventListener('click', ()=>changePosition(1));
    arrowAtras.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){
        const currentElement = value;
        value += change;

        if (value === 0){
            value = sliders.length;
        } else if (value === sliders.length + 1){
            value = 1;
        }

        sliders[currentElement - 1].classList.remove('slider_body_show');
        sliders[value - 1].classList.add('slider_body_show');
    }
})();

