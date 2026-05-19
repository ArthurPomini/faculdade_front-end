function verificaValores() {
    let numero_convidados = Number(document.querySelector('input#numconv').value)
    let aviso = document.querySelector('div#aviso')
    aviso.style.setProperty('grid-column', 'span 2')
    aviso.style.color = 'red'
    
    if (numero_convidados < 1) {
        aviso.innerHTML = 'Por favor, digite um valor numérico.'
        return false
    } else {
        aviso.innerHTML = ''
    }
}

function calcValor() {
    verificaValores()
    if (verificaValores() == false) {
        return
    }

    let op = document.querySelector('select#plano')
    let conv = document.querySelector('input#numconv')
    let res = document.querySelector('div#res')
    let valorPlano = 0

    switch (op.value) {
        case 'op1':
            valorPlano = 50.00
            break
        case 'op2':
            valorPlano = 80.00
            break
        case 'op3':
            valorPlano = 120.00
            break
        default:
            res.innerHTML = 'Impossível Calcular o Valor'
    }

    let valorFinal = Number(conv.value) * valorPlano
    //valorFinal = valorFinal.toFixed(2)
    res.innerHTML = `Valor Total: ${valorFinal.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
    })}`
}