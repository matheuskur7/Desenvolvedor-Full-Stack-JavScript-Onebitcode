const name = document.getElementById('name')
const btnAddTech = document.getElementById('addTech')
const techsDiv = document.getElementById('techsDiv')
const btnSave = document.getElementById('save')

let contador = 0
let dataBase = []

//=======================================================================================================================//Adicionando Nova Tecnologia

btnAddTech.addEventListener('click', function(event) {
    contador ++

    event.preventDefault()
    const newTech = document.createElement('div')
    newTech.className = 'newTechDiv'
    newTech.id = `newTech` + contador

    const newTechInput = document.createElement('input')
    newTechInput.type = 'text'
    newTechInput.name = 'newTechInput' + contador
    newTechInput.id = 'newTechInput' + contador
    newTechInput.className = 'newTechInput'
    newTechInput.placeholder = 'Insira o nome da tecnologia'

    let experienceTimeArray = []
    let labelArray = []

    for(let i = 0; i < 3; i++) {
        experienceTimeArray[i] = document.createElement('input')
        experienceTimeArray[i].type = 'radio'
        experienceTimeArray[i].name = 'experienceTime' + contador
        experienceTimeArray[i].id = 'experienceTime' + i + '-' + contador
    }

    for(let i = 0; i < 3; i ++) {
        let labelText
            switch(i) {
                case 0:
                    labelText = "0-2 Anos"
                    break
                case 1:
                    labelText = "3-4 Anos"
                    break
                case 2:
                    labelText = "5+ Anos"
            }

        labelArray[i] = document.createElement('span')
        labelArray[i].innerHTML = `<label for="${experienceTimeArray[i].id}">${labelText}</label>`
    }



    const experienceTime = document.createElement('div')
    experienceTime.className = 'experienceTimeDiv'
    experienceTime.id = 'experienceTimeDiv' + contador

    for(let i = 0; i < 3; i ++) {
        experienceTime.append(experienceTimeArray[i], labelArray[i])
    }

//=======================================================================================//Botão que remove a tecnologia

    const btnRemoveTech = document.createElement('button')
    btnRemoveTech.innerText = 'Remover'
    btnRemoveTech.addEventListener('click', function(event) {
        event.preventDefault()
        techsDiv.removeChild(this.parentNode)
    })

//=======================================================================================//
    
    const br = document.createElement('br')

    newTech.append(br, newTechInput, experienceTime, btnRemoveTech, br)
    techsDiv.appendChild(newTech)
})

btnSave.addEventListener('click', function(event) {
    event.preventDefault()
})