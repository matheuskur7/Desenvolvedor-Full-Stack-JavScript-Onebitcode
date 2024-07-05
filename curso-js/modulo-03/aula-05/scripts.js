let contagemLi = 0

function addInput() {
    const ul = document.getElementById('inputs')

    const newLi = document.createElement('li')
    newLi.setAttribute('id', `input${contagemLi}`)
    newLi.className = 'list-item'

    newLi.innerText = `Item Nº ${contagemLi}`

    ul.appendChild(newLi)

    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.placeholder = `Carai hein ${contagemLi}`
    newInput.id = `input${contagemLi}`

    newLi.appendChild(newInput)

    contagemLi ++    
}