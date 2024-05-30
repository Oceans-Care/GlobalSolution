//segmento escondido com botão
document.getElementById('showSectionButton').addEventListener('click', function() {
    var hiddenSection = document.getElementById('hiddenSection');
    if (hiddenSection.classList.contains('hidden')) {
        hiddenSection.classList.remove('hidden');
    } else {
        hiddenSection.classList.add('hidden');
    }
});