function revelar() {
    const imgJogador = document.querySelector('.card-img-top');
    const spanNome = document.getElementById('Nome'); 
    const spanRank = document.getElementById('Rank');
    const spanNascimento = document.getElementById('Data_Nas');
    const spanAltura = document.getElementById('Alutra'); 
    const spanPosicao = document.getElementById('Posição '); 

    imgJogador.src = 'img/_vinicius_junior.png';


    spanNome.firstChild.textContent = 'Vinícius José Paixão de Oliveira Júnior ';
    spanRank.textContent = '9,5';
    spanNascimento.textContent = '12/07/2000 (25 anos)';
    spanAltura.textContent = '1,76 m';
    spanPosicao.textContent = 'Ponta-esquerda / Atacante';

    const elementosComPlaceholder = [spanNome, spanNascimento, spanAltura, spanPosicao];

    elementosComPlaceholder.forEach(el => {
        el.classList.remove('placeholder-glow');
        
        const placeholderSpan = el.querySelector('.placeholder');
        if (placeholderSpan) {
            placeholderSpan.classList.remove('placeholder', 'col-6', 'col-4');
            placeholderSpan.classList.add('card-text');
        }
    });

    spanRank.classList.remove('text-bg-secondary');
    spanRank.classList.add('text-bg-warning');
}