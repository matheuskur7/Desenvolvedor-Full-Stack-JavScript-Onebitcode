let fila = []
let continua = true

while(continua) {
    let opcao = Number(window.prompt('Fila atual: ' + fila + '\n\nSelecione uma opção:\n[1] Adicionar Paciente\n[2] Atender Paciente\n[3] SAIR'))
    console.log(opcao)
    switch(opcao) {
        case 1:
            fila.push("\n" + window.prompt("Digite o nome do paciente: "))
            break
        case 2:
            if(fila.length > 0) {
                window.alert('Paciente atendido: ' + fila.shift())
            } else {
                window.alert('Não há ninguém na fila!')
            }
            break
        case 3:
            continua = false
            window.alert("FIM DO PROGRAMA")
            break
        default:
            window.alert('OPÇÃO INVÁLIDA')
            break
    }
}