
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
let time = 4000;

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

let imagens2=['./src/img/frame1.png','./src/img/frame2.png'];
let index2 = 0;
let time2 = 4000;

function slideShow2(){
    document.getElementById('imgBanner2').src=imagens2[index2];
    index2++;

    if(index2 == imagens2.length){
        index2 = 0;
    }
    setTimeout('slideShow2()', time2);
}
slideShow2();

//menu mobile (hamburguer)
let btnmenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')