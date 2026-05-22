function converterC() {
    let c = document.querySelector('input#txtc')
    let f = document.querySelector('input#txtf')

    if (isNaN(c.value)) {
        f.value = 'ERRO'
        return
    }

    let cConvertido = (Number(c.value) * 9/5) + 32
    let cConvFormat = cConvertido.toFixed(2)
    f.value = cConvFormat
}

function converterF() {
    let f = document.querySelector('input#txtf')
    let c = document.querySelector('input#txtc')

    if (isNaN(f.value)) {
        c.value = 'ERRO'
        return
    }

    let fConvertido = (Number(f.value) - 32) * 5/9
    let fConvFormat = fConvertido.toFixed(2)
    c.value = fConvFormat
}