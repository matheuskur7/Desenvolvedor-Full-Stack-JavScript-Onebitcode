let cidades
let qtd
let continua = true

if(continua) {
    qtd = 1
    cidades = window.prompt('Insira o nome de uma cidade que você visitou:')
}
continua = window.confirm('Você visitou mais alguma cidade? ')

while(continua) {
    cidades += ' ' + window.prompt('Insira o nome dessa cidade: ')
    qtd ++

    continua = window.confirm('Você visitou mais alguma cidade? ')
}

window.alert(cidades)