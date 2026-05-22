const elBichinho = document.getElementById('bichinho');
const body = document.body;

let estadoAtual = 'normal';
let timerPet; 

const imagens = {
    normal: 'assets/b_n.png',
    bravo: 'assets/b_p.png',
    morto: 'assets/b_d.png',
    comendo: 'assets/b_c.png',
    feliz: 'assets/b_a.png'
};

function mudarEstado(novoEstado) {
    estadoAtual = novoEstado;
    elBichinho.src = imagens[novoEstado];
    
    clearTimeout(timerPet);

    switch(novoEstado) {
        case 'normal':
            timerPet = setTimeout(() => mudarEstado('bravo'), 30000);
            break;
        case 'bravo':
            timerPet = setTimeout(() => mudarEstado('morto'), 10000);
            break;
        case 'morto':
            break;
        case 'comendo':
            timerPet = setTimeout(() => mudarEstado('feliz'), 5000);
            break;
        case 'feliz':
            timerPet = setTimeout(() => mudarEstado('normal'), 20000);
            break;
    }
}

function alimentar() {
    mudarEstado('comendo');
}

let eDia = true;

setInterval(() => {
    eDia = !eDia;
    if (eDia) {
        body.classList.replace('noite', 'dia');
    } else {
        body.classList.replace('dia', 'noite');
    }
}, 60000);

mudarEstado('normal');