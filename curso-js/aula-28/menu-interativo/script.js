let continua

do {
    let opcao = window.prompt('Escolha uma das opções disponíveis: \n [1: Guaíba] \n [2: Porto Alegre] \n [3: Canoas] \n [4: Gravataí] \n [5: Encerrar]')
    if(opcao == 5) {
        continua = false
    } else if(opcao > 5 || opcao < 1) {
        window.alert('OPÇÃO INVÁLIDA!!!')
        continua = true
    } else {
        continua = true
        window.alert(opcao)
    }
} while(continua == true)

window.alert('ENCERRADO')
