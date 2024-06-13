let palavra = window.prompt('Digite uma palavra: ')
let palavraInvertida = ''

for(let i = palavra.length - 1; i >= 0; i --) {
    palavraInvertida += palavra[i]
    console.log(i)
}

if(palavraInvertida == palavra) {
    window.alert("Você digitou um Palíndromo!")
} else {
    window.alert(
        `Palavra digitada: ${palavra}` +
        `\nPalavra Invertida: ${palavraInvertida}`
    )
}