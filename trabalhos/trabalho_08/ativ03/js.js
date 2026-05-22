function calcMedia() {
    let n1 = document.querySelector('input#n1')
    let n2 = document.querySelector('input#n2')
    let n3 = document.querySelector('input#n3')
    let res = document.querySelector('div#res')

    if (isNaN(n1.value) || isNaN(n2.value) || isNaN(n3.value)) {
        res.innerHTML = "ERRO"
        return
    }

    if (Number(n1.value) > 10 || Number(n1.value) < 0 || Number(n2.value) > 10 || Number(n2.value) < 0 || Number(n3.value) > 10 || Number(n3.value) < 0) {
        res.innerHTML = "DIGITE UMA NOTA COMPATÍVEL"
        return
    }

    res.style.setProperty('background', 'var(--cor-branco)')
    let media = (Number(n1.value) + Number(n2.value) + Number(n3.value)) / 3
    let mediaArrumado = media.toFixed(2)

    res.innerHTML = `Média Final: ${mediaArrumado}`
}