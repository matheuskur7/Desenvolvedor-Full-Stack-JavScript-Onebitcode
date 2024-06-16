let continua = true

while(continua) {
    let resFinal = fArea()
    window.alert('A área da forma escolhida é: ' + resFinal)
}

function fArea() {
    let fGeom = Number(window.prompt(
        'Digite opção correspondente à forma geométrica a qual deseja calcular a área:\n\n' +
        '[1] Triângulo\n' + 
        '[2] Retângulo\n' +
        '[3] Quadrado\n' +
        '[4] Trapézio\n' +
        '[5] Circulo\n' +
        '[6] SAIR'
    ))

    switch(fGeom) {
        case 1:
            return(triangulo())
            break
        case 2:
            return(retangulo())
            break
        case 3:
            return(quadrado())
            break
        case 4:
            return(trapezio())
            break
        case 5:
            return(circulo())
            break
        case 6:
            continua = false
            window.alert('Encerrando programa!')
    }
}

function triangulo() {
    let base = Number(window.prompt('Digite a medida da base do triângulo: '))
    let altura = Number(window.prompt('Digite a medida da altura do triângulo'))
    let area = (base * altura) / 2
    return(area)
}

function retangulo() {
    let base = Number(window.prompt('Digite a medida da base do retângulo:'))
    let altura = Number(window.prompt('Digite a medida da altutra do rertângulo: '))
    let area = base * altura
    return(area)
}

function quadrado() {
    let lado = Number(window.prompt('Digite a medida do lado do quadrado: '))
    let area = lado ** 2
    return(area)
}

function trapezio() {
    let base1 = Number(window.prompt('Digite a medida de uma das bases do trapézio: '))
    let base2 = Number(window.prompt('Digite a medida da outra base do trapézio: '))
    let altura = Number(window.prompt('Digite a medida da altura do trapézio: '))
    
    let area = ((base1 + base2) * altura) / 2
    return(area)
}

function circulo() {
    let raio = Number(window.prompt('Digite a medida do raio do círculo: '))
    const pi = 3.14
    let area = pi * (raio ** 2)
    return(area)
}
