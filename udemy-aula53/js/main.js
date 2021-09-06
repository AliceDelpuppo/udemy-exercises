const $insertText = document.querySelector('.insert-here')
const div = document.createElement('div')

const ELEMENTOS = [
    {
        tag: 'p',
        text: 'Qualquer texto'
    },

    {
        tag: 'div',
        text: 'Qualquer texto2'
    },

    {
        tag: 'section',
        text: 'Qualquer texto3'
    },

    {
        tag: 'footer',
        text: 'Qualquer texto4'
    }
]

ELEMENTOS.forEach(function (elemento) {
    const tag = elemento.tag
    const text = elemento.text

    const tagCreated = document.createElement(tag)
    //Outra forma (melhor)
    //const textNode = document.createTextNode(text)
    //tagCreated.appendChild(textNode)
    //No lugar das duas linhas abaixo
    tagCreated.textContent = text
    div.appendChild(tagCreated)
});

$insertText.appendChild(div)