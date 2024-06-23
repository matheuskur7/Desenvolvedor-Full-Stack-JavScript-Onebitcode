let dataBase = [
    { nome: "Bieleta Dianteira", valor: 79.82, qtd: 2 },
    { nome: "Amortecedor Dianteiro", valor: 398.89, qtd: 2 },
    { nome: "Coxim de Amortecedor Dianteiro", valor: 232.00, qtd: 2 }
] // Array que contém todos os itens do orçamento

let orcamento

while(1) {
    orcamento = dataBase.reduce(function(accumulator, itemReduce, index) {
        const valorTotal = itemReduce.valor * itemReduce.qtd
        const itemOrcamento = accumulator + index + '    ' + itemReduce.nome + '    ' + 'R$ ' + itemReduce.valor + '    ' + itemReduce.qtd + '    '  + valorTotal + '\n'
        return(itemOrcamento)
    }, "") // Transforma o Array "orcamento" em um array que pode ser impresso no window.alert e semelhantes...
    
    let opcao = Number(window.prompt( // Exibe o orçamento, o menu de opções e armazena o valor digitado pelo usuário na variável "opcao"
        'ORÇAMENTO\n' +
        orcamento + '\n\n' +
        'MENU\n' +
        '[1] Adicionar Item\n' +
        '[2] Remover Item\n' +
        '[3] Editar Item\n'
    ))

    switch(opcao) { // Teste para executar uma ação de acordo com o que o usuário digitou
        case 1:
            dataBase.push(adicionaItem()) // Chama a função de adicionar um item ao orçamento e adiciona o retorno dela ao fim do array em um novo índice
            break
        case 2:
            removeItem() // Chama a função de adicionar um item ao orçamento
            break
        case 3:
            editaItem() // Chama a função de editar um item existente no orçamento
            break
        default:
            window.alert("OPÇÃO INVÁLIDA!!!") // Exibe na tela se o usuário digitar uma opção que não existe
    }
}

function adicionaItem() { // Função responsável por adicionar um novo item ao orçamento
    let nome = window.prompt("Digite o nome do item à ser adicionado ao orçamento:")
    let valor = window.prompt("Digite o valor do item adicionado ao orçamento: \n (sempre com duas casas decimais, mesmo que ambas sejam 0!)")
    let qtd = window.prompt("Digite a quantidade do item adicionado ao orçamento:")

    return( // Retorna um objeto com 
        { nome: nome, valor: valor, qtd: qtd}
    )
}

//====================================================================================================================// removeItem()


function removeItem() { // Função responsável por remover um item do orçamento
    console.log('REMOVENDO...')
    let indexRemove = Number(window.prompt( // Pergunta ao usuário qual item deseja remover do orçamento
        'ORÇAMENTO\n' +
        orcamento + "\n\n" +
        'Digite o índice do item a ser removido do orçamento:'        
    ))
    if(indexRemove < dataBase.length) {
        let dataBaseTemp = [] // Cria uma base de dados temporária apenas para armazenar todos os itens que não serão removidos
        for(let i = 0; i < dataBase.length; i ++) {
            if(i != indexRemove) {
                dataBaseTemp.push({nome:dataBase[i].nome, valor:dataBase[i].valor, qtd:dataBase[i].qtd})
                // Adiciona o item à base de dados temporária se ele não for o que o usuário escolheu para remover
            }
        }
        dataBase = dataBaseTemp // Pega a base de dados do orçamento e a atualiza, sem o item que o usuário escolheu remover
    } else {
        window.alert(`O item ${indexRemove} não existe no orçamento...`)
    }
}


//====================================================================================================================// editaItem()

function editaItem() { // Função responsável por remover um item do orçamento
    let indexEdit = Number(window.prompt( // Armazena o índice do item que o usuário deseja editar na variável
        'ORÇAMENTO\n' +
        orcamento + '\n\n' +
        'Digite o índice do item que deseja editar:'
    ))

    let editParameter // Declaração da variável

    if(indexEdit < dataBase.length) { // Testa se o índice escolhido pelo usuário existe no orçamento
        do {
            editParameter = Number(window.prompt( //Armazena qual parâmetro o usuário quer editar na variável
                'Selecione o parâmetro que deseja editar ou digite 4 para sair:\n\n' +
                '[1] Nome: ' + dataBase[indexEdit].nome + '\n' +
                '[2] Valor: R$ ' + dataBase[indexEdit].valor + '\n' +
                '[3] Quantidade: ' + dataBase[indexEdit].qtd + '\n' +
                '[4] Sair')
            )

            let validEdit = true // Declaração da variável que armazena se a opção escolhida é válida ou não

            switch(editParameter) { // Converte o valor digitado pelo usuário em algo útil para o código
                case 1:
                    editParameter = 'nome'
                    break
                case 2:
                    editParameter = 'valor'
                    break
                case 3:
                    editParameter = 'qtd'
                    break
                case 4:
                    validEdit = false
                    break
                default:
                    validEdit = false
                    window.alert('Opção Inválida')
            }
    
            if(validEdit) {
                dataBase[indexEdit][editParameter] = window.prompt(`Digite o(a) novo(a) ${editParameter} do item:`)
                // Altera o parâmetro escolhido pelo usuário
            }
    
        } while (editParameter != 4)
    } else {
        window.alert(`O item ${indexEdit} não existe no orçamento...`)
    }
}