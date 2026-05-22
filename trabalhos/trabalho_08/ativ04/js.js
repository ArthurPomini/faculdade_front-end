function verificaValor() {
    const bandeira = document.querySelector('select#selectband').value
    const valor = Number(document.querySelector('input#valor').value)
    const numparc = Number(document.querySelector('input#numparc').value)

    if (bandeira === '') {
        const avisoSelect = document.querySelector('#avisoSelect')
        avisoSelect.innerHTML = 'Selecione uma bandeira'
        avisoSelect.style.color = 'red'
        return false
    } else {
        const avisoSelect = document.querySelector('#avisoSelect')
        avisoSelect.innerHTML = ''
    }

    if (valor == 0 || valor < 1) {
        const avisoValor = document.querySelector('#avisoValor')
        avisoValor.innerHTML = 'Digite um valor compatível'
        avisoValor.style.color = 'red'
        return false
    } else {
        const avisoValor = document.querySelector('#avisoValor')
        avisoValor.innerHTML = ''
    }

    if (numparc == 0 || numparc < 1) {
        const avisoParcelas = document.querySelector('#avisoParcelas')
        avisoParcelas.innerHTML = 'Digite um número de parcelas'
        avisoParcelas.style.color = 'red'
        return false
    } else {
        const avisoParcelas = document.querySelector('#avisoParcelas')
        avisoParcelas.innerHTML = ''
    }
}

function mostraBandeira() {
    let bandSelec = document.querySelector('select#selectband')
    let img = document.querySelector('img#imgBandeira')

    if (bandSelec.value === "") {
        img.style.display = 'none'
        return
    }

    img.style.display = 'block'

    switch (bandSelec.value) {
        case 'visa':
            img.setAttribute('src', 'img/visa.png')
            break
        case 'master':
            img.setAttribute('src', 'img/master.png')
            break
        case 'elo':
            img.setAttribute('src', 'img/elo.png')
            break
        default:
            alert('Por favor, selecione uma bandeira.')
    }
}

function calculaTotal() {
    
    if(verificaValor() == false) {
        return
    }

    let pegaBand = document.querySelector('select#selectband')
    let multBand = 0
    let valor = document.querySelector('input#valor')

    if (pegaBand.value === "") {
        img.style.display = 'none'
        return
    }

    switch(pegaBand.value) {
        case 'visa':
            multBand = 0.02
            break
        case 'master':
            multBand = 0.0185
            break
        case 'elo':
            multBand = 0.03
            break
        default:
            alert('Por favor, selecione uma bandeira.')
    }

    let res = document.querySelector('div#res')
    let taxa = Number(valor.value) * multBand
    let numparc = document.querySelector('input#numparc')
    let juros = Number(valor.value) * (0.015 * Number(numparc.value))
    let total = Number(valor.value) + taxa + juros
    const formatador = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
    
    res.innerHTML = ''
    res.innerHTML += `<p>Valor Taxa: ${formatador.format(taxa)}</p>`
    res.innerHTML += `<p>Valor Juros: ${formatador.format(juros)}</p>`
    res.innerHTML += `<p>Valor de Cada Parcela: ${formatador.format(total / Number(numparc.value))}</p>`
    res.innerHTML += `<p id ="tot">Valor Total: ${formatador.format(total)}</p>`
}