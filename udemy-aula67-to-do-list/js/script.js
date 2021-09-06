const $inputNewTarefas = document.querySelector('.input-new-tarefas')
const $buttonAddTarefas = document.querySelector('.button-add-tarefas')
const $localAddTarefas = document.querySelector('.local-add-tarefas')

// const $buttonRemoveItemTarefa = document.querySelectorAll('.button-remove-item-tarefa')

function createTarefa(textInput) {
    const $li = createLi()
    // li.textContent = textInput
    const $p = document.createElement('p')
    const text = document.createTextNode(textInput)
    // console.log(text)
    $p.appendChild(text)
    $li.appendChild($p)
    $localAddTarefas.appendChild($li)

    createButtonDelete($li)
}

function createLi() {
    return document.createElement('li')
}

function clearInput() {
    $inputNewTarefas.value = ''
    // $inputNewTarefas.focus()
}

function createButtonDelete($li) {
    const $divButton = document.createElement('div')
    $divButton.classList.add('button-generic')
    
    // $divButton.setAttribute('class', 'button-remove-item-tarefa button-generic')
    $divButton.classList.add('button-remove-item-tarefa', 'button-generic')
    $divButton.setAttribute('title', 'Apagar esta tarefa')

    const text = document.createTextNode('Remover')
    $divButton.appendChild(text)
    $li.appendChild($divButton)
}


// function saveTarefas(){
//     const $lisTarefas = $localAddTarefas.querySelectorAll('li')
//     const listTarefas = []

//     $lisTarefas.forEach(function($liTarefa) {
//         let textTarefa = $liTarefa.innerText

//         textTarefa = textTarefa.replace('Remover', '')
//         listTarefas.push(textTarefa)
//     });
//     const tarefasJASON = JSON.stringify(listTarefas)
//     localStorage.setItem('listaDeTarefas', tarefasJASON)
// }

// function addSaveTarefas() {
//     localStorage = localStorage.getItem('listaDeTarefas')
//     const listTarefasArray = JSON.parse(localStorage)

//     for (const tarefa of listTarefasArray) {
//         createTarefa(tarefa)
//     }
// }

function removeTarefa(element){
    if(element.classList.contains('button-remove-item-tarefa')){
        element.parentElement.remove()
    }
}

document.addEventListener('click', function(event){
    const element = event.target

    removeTarefa(element)    
})


$inputNewTarefas.addEventListener('keypress', function (event) {
    // console.log(event)
    if (event.keyCode === 13) {
        const $inputValue = $inputNewTarefas.value

        if (!$inputValue) return
        
        createTarefa($inputValue)
        clearInput()
    }
})

$buttonAddTarefas.addEventListener('click', function (event) {
    // event.preventDefault()
    const $inputValue = $inputNewTarefas.value

    if (!$inputValue) return
    
    createTarefa($inputValue)
    clearInput()
})
