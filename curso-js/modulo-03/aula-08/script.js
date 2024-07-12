const tbody = document.getElementById('table-body')

function escalar() {

    const tr = document.createElement('tr')
    const tdPosicao = document.createElement('td')
    const tdNome = document.createElement('td')
    const tdNum = document.createElement('td')

    tdPosicao.innerText = window.prompt("Informe a posição do jogador:")
    tdNome.innerText = window.prompt("Informe o nome do Jogador: ")
    tdNum.innerText = Number(window.prompt("Digite o número da camiseta do Jogador: "))

    
    tr.append(tdPosicao, tdNome, tdNum)
    tbody.appendChild(tr)
}

function apagar() {
    const tr = document.getElementsByTagName('tr')
    const ultimo = tr.length - 1
    tbody.removeChild(tr[ultimo])
}