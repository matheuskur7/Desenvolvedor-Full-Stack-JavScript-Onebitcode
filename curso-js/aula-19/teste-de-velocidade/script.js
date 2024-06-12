window.alert('Insira as informações do veículo 1: ')
let mod1 = window.prompt('Marca/Modelo: ')
let vel1 = Number.parseFloat(window.prompt('Velocidade: '))

window.alert('Insira as informações do veículo 2: ')
let mod2 = window.prompt('Marca/Modelo: ')
let vel2 = Number.parseFloat(window.prompt('Velocidade: '))

if(vel1 == vel2) {
    window.alert('Ambos os veículos estão na mesma velocidade!')
} else if(vel1 > vel2) {
    window.alert(`O ${mod1} está andando mais rápido que o ${mod2}`)
} else {
    window.alert(`O ${mod2} está andando mais rápido que o ${mod1}`)
}