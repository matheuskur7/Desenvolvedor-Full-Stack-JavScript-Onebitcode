let imoveis = []
let continua = true
let lastIndex
/*
    ESTRUTURA DOS ARRAYS DOS IMÓVEIS

    - [0] NOME DO PROPRIETÁRIO: "\n\nNOME"
    - [1] QTD DE QUARTOS: "\n - QUANTIDADE"
    - [2] QTD DE BANHEIROS: "\n - QUANTIDADE"
    - [3] POSSUI GARAGEM? "true/false"
    - [4] ÍNDICE DO IMÓVEL NO ARRAY
*/
do {
    let opcao = Number(window.prompt(
        'MENU: \n\n' +
        'Selecione uma Opção:\n' +
        '[1] Adicionar Imóvel\n' +
        '[2] Sair\n' +
        '===========================\n' +
        'Lista de Imóveis:\n' +
        imoveis
    ))

    switch(opcao) {
        case 1:
            let proprietario = window.prompt('Digite o nome do proprietário: ')
            let qtdQuartos = window.prompt('Digite a quantidade de quartos:')
            let qtdBanheiros = window.prompt('Digite a quantidade de banheiros:')
            let garagem = window.confirm('O imóvel possui garagem?')

            lastIndex = imoveis.push(
                ['\n\nProprietário: ' + proprietario] +
                ['\nQuantidade de Quartos: ' + qtdQuartos] +
                ['\nQuantidade de Banheiros: ' + qtdBanheiros] +
                ['\nPossui Garagem? ' + garagem]
            ) - 1
            console.log(lastIndex)
            imoveis[lastIndex[4]] = `Índice: ${lastIndex}`
            break
        case 2:
            window.alert("PROGRAMA ENCERRADO!!!")
            continua = false
    }
} while(continua)