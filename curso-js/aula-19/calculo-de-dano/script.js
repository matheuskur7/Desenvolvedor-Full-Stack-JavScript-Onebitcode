let nomeAtaque = window.prompt('Insira o nome do personagem de ataque: ')
let dano = Number.parseInt(window.prompt('Insira o poder de ataque do personagem: '))

let nomeDefesa = window.prompt('Insira o nome do personagem de defesa: ')
let vida = Number.parseInt(window.prompt('Digite quantos pontos de vida o personagem possui: '))
let defesa = Number.parseInt(window.prompt('Insira o poder de defesa do personagem: '))
let escudo = window.confirm('O personagem possui um escudo?')

if(dano <= defesa) {
    window.alert('Dano Causado: 0 \n Nenhum dano foi causado!')
} else if(dano > defesa && !escudo) {
    dano -= defesa
    vida -= dano

    window.alert(`Dano Causado: ${dano} \n A vida restante de ${nomeDefesa} é: ${vida}`)
} else {
    dano = (dano - defesa) / 2
    vida -= dano

    window.alert(`Dano Causado: ${dano} \n A vida restante de ${nomeDefesa} é: ${vida}`)
}