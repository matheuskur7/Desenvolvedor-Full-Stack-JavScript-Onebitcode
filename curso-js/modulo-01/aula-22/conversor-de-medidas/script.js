const valI = Number.parseFloat(window.prompt('Insira o valor em metros que deseja converter: '))
const unidade = window.prompt('Agora insira qual múltiplo ou submúltiplo para o qual deseja converter o valor digitado (SEM ACENTOS): ')

let valF

switch(unidade) {
    case 'milimetro':
        valF = valI * 1000
        window.alert(`${valI} m é igual à ${valF} milímetro(s).`)
        break
    case 'centimetro':
        valF = valI * 100
        window.alert(`${valI} m é igual à ${valF} centímetro(s).`)
        break
    case 'decimetro':
        valF = valI * 10
        window.alert(`${valI} m é igual à ${valF} decímetro(s).`)
        break
    case 'decametro':
        valF = valI / 10
        window.alert(`${valI} m é igual à ${valF} decâmetro(s).`)
        break
    case 'hectometro':
        valF = valI / 100
        window.alert(`${valI} m é igual à ${valF} hectômetro(s).`)
        break
    case 'quilometro':
        valF = valI / 1000
        window.prompt(`${valI} m é igual à ${valF} quilômetro(s).`)
        break
    default:
        window.alert('UNIDADE INVÁLIDA!!!')
}