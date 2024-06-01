//segmento escondido com botão
document.getElementById('showSectionButton').addEventListener('click', function() {

    var hiddenSection = document.getElementById('hiddenSection');
    if (hiddenSection.classList.contains('hidden')) {
        hiddenSection.classList.remove('hidden');
    } else {
        hiddenSection.classList.add('hidden');
    }
});

// SlideShow Automático
let imagens=['./src/img/grafico1.png','./src/img/garfico2.png','./src/img/grafico3.png'];
let index = 0;
let time = 5000;

function slideShow(){
    document.getElementById('imgBanner').src=imagens[index];
    index++;

    if(index == imagens.length){
        index = 0;
    }
    setTimeout('slideShow()', time);
}
slideShow();

document.getElementById('aparecergraficos').addEventListener('click', function() {

    var hiddenSection = document.getElementById('banner');
    if (hiddenSection.classList.contains('hidden')) {
        hiddenSection.classList.remove('hidden');
    } else {
        hiddenSection.classList.add('hidden');
    }
});