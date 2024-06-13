let num = Number(window.prompt('Digite o número ao qual deseja saber a tabuada: '))
let tabuada = ' '

for(let i = 1; i <= 20; i ++) {
    tabuada += '\n' + num + ' x ' + i + ' = ' + String(num * i)
}

window.alert(tabuada)