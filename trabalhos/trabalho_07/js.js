function verificaInput() {
    const input = document.querySelector('input').value
    if (input.length == 0) {
        alert("Digite uma nova tarefa!")
        return false
    }
}

function addTask() {
    if (verificaInput() == false) {
        return
    }

    const pegaLista = document.querySelector('#taskList')
    const criaElemento = document.createElement('li')
    const criaTexto = document.createElement('p')
    let pegaInput = document.querySelector('#taskInput').value
    criaTexto.innerHTML = `${pegaInput}`

    const criaConcluir = document.createElement('button')
    criaConcluir.innerHTML = 'Concluir'
    criaConcluir.addEventListener('click', () => btnConcluir(criaTexto))
    
    const criaEditar = document.createElement('button')
    criaEditar.innerHTML = 'Editar'
    criaEditar.addEventListener('click', () => btnEditar(criaTexto))
    
    const criaExcluir = document.createElement('button')
    criaExcluir.innerHTML = 'Excluir'
    criaExcluir.addEventListener('click', () => btnExcluir(criaElemento))
    
    pegaLista.appendChild(criaElemento)
    criaElemento.appendChild(criaTexto)
    criaElemento.appendChild(criaConcluir)
    criaElemento.appendChild(criaEditar)
    criaElemento.appendChild(criaExcluir)
}

function btnConcluir(texto) {
    texto.classList.toggle('completed')
}

function btnEditar(texto) {
    let novaTask = prompt('Digite a nova task:')
    texto.innerHTML = `${novaTask}`
}

function btnExcluir(elemento) {
    elemento.remove()
}