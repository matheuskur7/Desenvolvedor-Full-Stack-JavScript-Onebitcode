let dinheiro = Number(window.prompt('Digite a quantidade incial de dinheiro: '))
let continua = true

do {
    window.alert(`Você possui R$ ${dinheiro},00.`)
    let acao = window.prompt(`Você possui R$ ${dinheiro},00.` + '\n \n Digite o número da opção desejada:' + '\n [1] Adicionar Dinheiro' + '\n [2] Retirar Dinheiro' + '\n [3] SAIR')

    if(acao == 1) {
        dinheiro += Number(window.prompt(`Você possui R$ ${dinheiro},00. \n Quanto deseja adicionar?`))
    } else if (acao == 2) {
        dinheiro -= Number(window.prompt(`Você possui R$ ${dinheiro},00. \n Quanto deseja retirar?`))
    } else {
        continua = false
        window.alert('FIM...')
    }
} while (continua == true)