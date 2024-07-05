let jobVacancies = [
    {
        nome: "Auxiliar Administrativo",
        descricao: "Realização de Tarefas de escritório, atendimento ao cliente, utilização do pacote Office, preenchimento de planilhas e utilização de sistema da empresa",
        dataLimite: "24/06/2024",
        salario: "R$ 1.600,00",
        candidatos: [
            {
                nome: "Kamylla Meireles",
                idade: 16
            },
            {
                nome: "Anselmo Amaral Corrêa",
                idade: 19
            }
        ]
    }
] // Array que armazenará as vagas de emprego e suas características

/*
ESTRUTURA DOS DADOS
    [ 
        {
            nome: "nome da vaga de emprego",
            descricao: "descrição da vaga",
            dataLimite: "data limite para inscrição",
            salario: salário da Vaga,
            candidatos: [ {Candidato1}, {Candidato2}, ... ]
        }
    ]
*/

let optMainMenu
let jobVacanciesString

do {
    optMainMenu = Number(window.prompt(
        'MENU PRINCIPAL\n\n' +
        '[1] Listar Vagas Disponívels\n' +
        '[2] Adicionar uma Nova Vaga\n' +
        '[3] Visualizar uma Vaga\n' +
        '[4] Excluir uma Vaga\n' +
        '[5] Sair do Sistema'
    ))

    jobVacanciesString = jobVacancies.reduce(function(accumulator, jobVacancy, index) { // Realiza a transformação dos dados do Array "jobVacancies" em uma string, tornando possível a sua exibição na tela
        return(
            accumulator + 'Nº: ' + index  + '\n' + '    Vaga: ' + jobVacancy.nome + '\n' + '    Salário: ' + jobVacancy.salario + '\n' +  '    Quantidade de Candidatos Inscritos: ' + jobVacancy.candidatos.length + '\n\n\n'
        )
    }, '')

    switch(optMainMenu) {
        case 1:
            listVacancies() // Função responsável por listar as vagas de emprego disponíveis
            break
        case 2:
            addVacancy() // Função responsável por cadastrar uma nova vaga ao sistema
            break
        case 3:
            viewVacancy() // Função responsável por exibir os detalhes de uma determinada vaga de emprego
            break
        case 4:
            deleteVacancy()
            break
        case 5:
            window.alert("Saindo...")
    }
} while(optMainMenu != 5)


function listVacancies() {
    window.alert(jobVacanciesString)
}

function addVacancy() {
    let vaga = window.prompt("Insira o nome da vaga: ")
    let descricao = window.prompt("Descreva a vaga: ")
    let dataLimite = window.prompt("Insira a data limite de inscrição: ")
    let salario = window.prompt("Digite o salário proposto para esta vaga: (Com o símbolo de R$)")
    jobVacancies.push(
        {
            nome: vaga,
            descricao: descricao,
            dataLimite: dataLimite,
            salario: salario,
            candidatos: [ ]
        }
    )
}

function viewVacancy() {
    let vacancyIndex = Number(window.prompt("Digite o número da vaga que deseja visualizar os detalhes: "))

    if(vacancyIndex < jobVacancies.length) {
        let viewAgain

        do {
            let vacancy = jobVacancies[vacancyIndex]

            let candidatesString = jobVacancies[vacancyIndex].candidatos.reduce(function(accumulator, candidate, index) {
                return(
                    accumulator + '     Candidato ' + index  + '\n' + '        Nome: ' + candidate.nome + '\n' + '        Idade: ' + candidate.idade + '\n\n'
                )
            }, "")
        
            viewAgain = window.confirm(
                'Vaga Nº ' + vacancyIndex + '\n' +
                '   Vaga: ' + vacancy.nome + '\n' +
                '   Descrição:\n' +
                '   ' + vacancy.descricao + '\n\n' +
                '   Data Limite para Inscrição: ' + vacancy.dataLimite + '\n' +
                '   Salário: ' + vacancy.salario  + '\n' +
                '   Candidatos Inscritos:\n' + candidatesString +
                '\n\n CLIQUE EM OK PARA ADICIONAR UM CANDIDATO Á VAGA! +\n' +
                'CLIQUE EM CANCELAR PARA RETORNAR AO MENU PRINCIPAL!'
            )

            if(viewAgain) {
                submitCandidate(vacancyIndex)
            }
        } while(viewAgain)
    }
}

function submitCandidate(vacancyIndex) {
    let nome = window.prompt("Insira o nome do candidato:")
    let idade = Number(window.prompt("Insira a idade do candidato"))

    jobVacancies[vacancyIndex].candidatos.push({ nome: nome, idade: idade })
}

function deleteVacancy() {
    let index = Number(window.prompt("Insira o número da Vaga que deseja excluir:"))
    jobVacancies.splice(index, 1)
}