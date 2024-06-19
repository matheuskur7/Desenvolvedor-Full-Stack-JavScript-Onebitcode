let imoveis = []

let opcao

/*
    ESTRUTURA DO OBJETOS DOS IMÓVEIS

    {
        prop: "nome-do-proprietário",
        qtdQ: 1,
        qtdB: 1,
        garagem: 'Sim/Não'
    }
*/

do {
    opcao = Number(window.prompt(
        'MENU\n' +
        'Selecione uma opção:\n\n' +
        '[1] Exibir Imóveis/Apontar Vendido\n' +
        '[2] Adicionar Imóvel\n' +
        '[3] Sair do Programa\n'
    ))

    switch(opcao) {
        case 1:
            exibeImoveis()
            break
        case 2:
            addImovel()
            break
        case 3:
            window.alert("Saindo...")
            break
        default:
            window.alert('OPÇÃO INVÁLIDA!!!')
    }

} while(opcao != 3)


function exibeImoveis() {
    if(imoveis.length == 0) {
        window.alert('Não existe nenhum imóvel cadastrado!')
    } else {
        for(let i = 0; i <= imoveis.length - 1; i ++) {
            let vendido = window.confirm(
                `Imóvel Nº ${i}\n\n` +
                `Proprietário: ${imoveis[i].prop}\n` +
                `Quantidade de Quartos: ${imoveis[i].qtdQ}\n` +
                `Quantidade de Banheiros: ${imoveis[i].qtdB}\n` +
                `Possui Garagem? ${imoveis[i].garagem}`
            )
            console.log(imoveis)
            if(vendido) {
                imoveis.splice(i, 1)
                console.log(imoveis)
                window.alert(`Imóvel Nº ${i} Vendido! (Removido da lista)`)
            }
        }
    }
}

function addImovel() {
    let proprietario = window.prompt("Digite o nome do proprietário do imóvel:")
    let qtdQuartos = Number(window.prompt("Digite a quantidade de quartos do imóvel:"))
    let qtdBanheiros = Number(window.prompt("Digite a quantidade de banheiros do imóvel:"))
    let temGaragem = window.prompt("O imóvel possui garagem?")

    imoveis.push(
        {
            prop: proprietario,
            qtdQ: qtdQuartos,
            qtdB: qtdBanheiros,
            garagem: temGaragem
        }
    )
}