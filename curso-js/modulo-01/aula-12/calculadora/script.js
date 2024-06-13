let n1 = Number.parseFloat(window.prompt('Insira um número: '))
let n2 = Number.parseFloat(window.prompt('Insira outro número: '))

let soma = Number.parseFloat(n1 + n2)
let subt = Number.parseFloat(n1 - n2)
let mult = Number.parseFloat(n1 * n2)
let div  = Number.parseFloat(n1 / n2)

console.log(`${n1} + ${n2} = ${soma}`)
console.log(`${n1} - ${n2} = ${subt}`)
console.log(`${n1} x ${n2} = ${mult}`)
console.log(`${n1} / ${n2} = ${div}`)
