let nome = window.prompt('Insira seu Primeiro Nome: ')
let sobrenome = window.prompt('Insira seu Sobrenome')
let campoDeEstudo = window.prompt('Insira seu Campo de Estudo: ')
let ano = window.prompt('Insira seu Ano de Nascimento: ')

let dataAtual = new Date()
let anoAtual = dataAtual.getFullYear()

let idade = anoAtual - ano

console.log(`Nome Completo: ${nome} ${sobrenome}.`)
console.log(`Campo de Estudo: ${campoDeEstudo}.`)
console.log(`Idade: ${idade} Anos.`)