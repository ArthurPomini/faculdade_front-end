function verificar() {
    let cpf = document.querySelector('input#txtcpf')
    let res = document.querySelector('div#res')
    
    let m = 0
    for (let i=0; i<10; i++) {
        if (cpf.value[i] == cpf.value[i+1]) {
            m++
        }
    }
    if (m >= 10 || cpf.value.length != 11) {
        res.innerHTML = 'CPF INVÁLIDO'
        res.classList.add('incorreto')
        return
    }
    
    res.innerHTML = ''
    res.classList.remove('incorreto')
    res.classList.remove('correto')

    // VERIFICA 1º NÚMERO
    let prinum = cpf.value[9]
    let resultPrinum = 0
    let j = 10
    for (let i=0; i<9; i++) {    
        resultPrinum += cpf.value[i] * j
        j--
    }

    resultPrinum = resultPrinum % 11
    resultPrinum = 11 - resultPrinum
    if (resultPrinum >= 10) {
        resultPrinum = 0
    }

    // VERIFICA O 2º NÚMERO
    let secnum = cpf.value[10]
    let resultSecnum = 0
    let k = 11
    for (let i=0; i<10; i++) {
        resultSecnum += cpf.value[i] * k
        k--
    }

    resultSecnum = resultSecnum % 11
    resultSecnum = 11 - resultSecnum
    if (resultSecnum >= 10) {
        resultSecnum = 0
    }

    if (resultPrinum == prinum && resultSecnum == secnum) {
        res.innerHTML = 'CPF VÁLIDO'
        res.classList.add('correto')
    } else {
        res.innerHTML = 'CPF INVÁLIDO'
        res.classList.add('incorreto')
    }
}