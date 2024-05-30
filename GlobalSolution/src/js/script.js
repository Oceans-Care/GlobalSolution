//esconder as informações da empresa
document.getElementById('botão1').addEventListener('click', function() {
    var section = document.getElementById('sec1');
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
    } else {
        section.classList.add('hidden');
    }
});

