const rank = document.querySelector('#rank');

const dadosIniciais = [
    { nome: 'Marcos', posicao: '7º' }, 
    { nome: 'Amanda', posicao: '6º' },
    { nome: 'Bruno',  posicao: '5º' },
    { nome: 'Jéssica', posicao: '4º' },
    { nome: 'Kleber',  posicao: '3º' },
    { nome: 'Jonas',   posicao: '2º' },
    { nome: 'Arthur',  posicao: '1º' }  
];

dadosIniciais.forEach(jogador => {
    const campo = document.createElement('li');
    const nome = document.createElement('p');
    const posicao = document.createElement('p');

    nome.innerHTML = jogador.nome;
    posicao.innerHTML = jogador.posicao;

    campo.appendChild(nome);
    campo.appendChild(posicao);

    rank.prepend(campo);
});