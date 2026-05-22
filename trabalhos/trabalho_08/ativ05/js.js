const lista = document.querySelector('ul#lista')
const nome_lista = document.querySelector('input#nome')

function verificaNome() {
    if (nome_lista.value.trim() === '') {
        const aviso = document.querySelector('div#aviso')
        aviso.innerHTML = 'Por favor digite um nome'
        return false
    } else {
        aviso.innerHTML = ''
    }
}

function addConvidado() {
    if (verificaNome() == false) {
        return
    }

    const cria_element = document.createElement('li')
    const cria_nome = document.createElement('p')
    const cria_concluir = document.createElement('button')
    const cria_editar = document.createElement('button')
    const cria_excluir = document.createElement('button')

    cria_nome.innerHTML = `${nome_lista.value}`
    
    cria_concluir.innerHTML = 'Concluir'
    cria_concluir.classList.add('botao-concluir')
    cria_concluir.addEventListener('click', () => {concluirTask(cria_nome)})
    
    cria_editar.innerHTML = 'Editar'
    cria_editar.classList.add('botao-editar')
    cria_editar.addEventListener('click', () => {editarTask(cria_nome)})

    cria_excluir.innerHTML = 'Excluir'
    cria_excluir.classList.add('botao-excluir')
    cria_excluir.addEventListener('click', () => {excluirTask(cria_element)})
    
    lista.appendChild(cria_element)
    cria_element.appendChild(cria_nome)
    cria_element.appendChild(cria_concluir)
    cria_element.appendChild(cria_editar)
    cria_element.appendChild(cria_excluir)
}

function concluirTask(nome) {
    nome.classList.toggle('classe-riscado')
}

function editarTask(nome) {
    let novo_nome = prompt('Digite um novo nome')
    nome.innerHTML = `${novo_nome}`
}

function excluirTask(element) {
    element.remove()
}