let baralho = []

let continua = true

while(continua == true) {
    let opcao = Number(window.prompt(`Baralho:\n${baralho} \n\nEscolha uma opção:\n[1] Adicionar carta\n[2] Retirar carta\n[3] Sair`))
    if (baralho.length > 10) {
        window.alert("A que ponto chegamos???'")
    }
    switch(opcao) {
        case 1:
            baralho.unshift(window.prompt("Qual o nome da carta? "))
            break
        case 2:
            if(baralho.length > 0) {
                window.alert('Carta removida: ' + baralho.shift())
            } else {
                window.alert("O baralho está vazio!")
            }
            break
        case 3:
            continua = false
            break
        default:
            window.alert("Opção Iválida!!!")
    }
}

